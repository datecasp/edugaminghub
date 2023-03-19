import { Injectable } from '@angular/core';
import { Pixel } from 'ol/pixel';
import Feature from 'ol/Feature';
import { Geometry, Point } from 'ol/geom';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import ImageLayer from 'ol/layer/Image';
import Static from 'ol/source/ImageStatic';
import { ProjectionLike } from 'ol/proj';
import { Extent } from 'ol/extent';
import { IElement } from '../interfaces/IElement';

@Injectable({
  providedIn: 'root',
})
export class OlMapService {
  data: IElement[] | any;
  showedData: IElement | any;

  constructor() {}

  public setData(elementData: IElement[]) {
    this.data = elementData;
  }

  public getRandomShowedElementService(): IElement {
    this.showedData = this.data[Math.floor(Math.random() * this.data.length)];
    return this.showedData;
  }

  public checkClickedIElementService(pixel: Pixel): boolean {
    return pixel == (this.showedData.point as Pixel);
  }

  public createNewMapLayerService(url: string, projection: ProjectionLike, extent: Extent): ImageLayer<Static>{
    return new ImageLayer({
      source: new Static({
        url: url,
        projection: projection,
        imageExtent: extent,
      }),
    })
  }
 
  public createNewPointLayerService(): VectorLayer<VectorSource<Geometry>>{
    var showedData = this.getRandomShowedElementService();
    var point = new Point(showedData.point);

    return new VectorLayer({
      source: new VectorSource({
        features: [new Feature(point)],
      }),
      style: {
        'circle-radius': 9,
        'circle-fill-color': 'blue',
      },
    })
  }
}
