import {
  Component,
  NgZone,
  AfterViewInit,
  Output,
  Input,
  EventEmitter,
  ChangeDetectorRef,
} from '@angular/core';
import { Coordinate } from 'ol/coordinate';
import VectorLayer from 'ol/layer/Vector';
import Projection from 'ol/proj/Projection';
import VectorSource from 'ol/source/Vector';
import { defaults as DefaultControls, ScaleLine } from 'ol/control';
import { Point } from 'ol/geom';
import ImageLayer from 'ol/layer/Image';
import Static from 'ol/source/ImageStatic';
import { Pixel } from 'ol/pixel';
import View from 'ol/View';
import Map from 'ol/Map';
import { useGeographic } from 'ol/proj';
import { OlMapService } from '../../services/ol-map.service';
import { IAacc } from '../../interfaces/IAacc';
import { InlineStyles } from '../../resources/inline-styles';

useGeographic();

@Component({
  selector: 'app-ol-map',
  templateUrl: './ol-map.component.html',
  styleUrls: ['./ol-map.component.css'],
})
export class OlMapComponent implements AfterViewInit {
  @Input() center: Coordinate | any; // map center
  @Input() zoom: number | any; // initial zoom
  @Input() url: string | any; //url of map to show
  view: View | any;
  map: Map | any;
  vectorLayer: any;
  mapLayer: any;
  inlineStyleStore: InlineStyles = new InlineStyles();
  tries: number = 1;

  //Data and defs for column buttons
  data = this._olMapService.getDataService();
  dataSourceLeft: IAacc[] = this.data.slice(0, this.data.length / 2 + 1);
  dataSourceRight: IAacc[] = this.data.slice(this.data.length / 2 + 1);
  columnStyleLeft = this.inlineStyleStore.columnStyleLeft;
  columnStyleRight = this.inlineStyleStore.columnStyleRight;
  stylePlayAgainBtn = this.inlineStyleStore.stylePlayAgainBtn;

  // Map views always need a projection.  Here we just want to map image
  // coordinates directly to map coordinates, so we create a projection that uses
  // the image extent in pixels.
  readonly extent = [0, 0, 800, 700];
  readonly projection = new Projection({
    code: 'xkcd-image',
    units: 'pixels',
    extent: this.extent,
  });

  constructor(
    private zone: NgZone,
    private cd: ChangeDetectorRef,
    private _olMapService: OlMapService
  ) {}

  ngAfterViewInit(): void {
    if (!this.map) {
      this.zone.runOutsideAngular(() => this.initMap());
    } else {
      this.onClick();
    }
  }

  private initMap(): void {
    this.view = new View({
      center: this.center,
      zoom: this.zoom,
      projection: this.projection,
    });
    this.map = new Map({
      target: 'map',
      view: this.view,
      controls: DefaultControls().extend([new ScaleLine({})]),
    });
    this.mapLayer = this._olMapService.createNewMapLayerService(
      this.url,
      this.projection,
      this.extent
    );
    this.vectorLayer = this._olMapService.createNewPointLayerService();
    this.map.addLayer(this.mapLayer);
    this.map.addLayer(this.vectorLayer);
  }

  onClick() {
    this.tries = 1;
    this.map.removeLayer(this.vectorLayer);
    this.map.removeLayer(this.mapLayer);
    this.vectorLayer = this._olMapService.createNewPointLayerService();
    this.map.addLayer(this.mapLayer);
    this.map.addLayer(this.vectorLayer);
  }

  buttonClicked() {
    this.tries++;
  }
}
