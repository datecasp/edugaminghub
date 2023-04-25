import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-user-data-page',
  templateUrl: './user-data-page.component.html',
  styleUrls: ['./user-data-page.component.css'],
})
export class UserDataPageComponent implements OnInit {
  userName: string = '';
  userId: number = 0;
  userDataSubscription: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private _userDataService: UserDataService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.userName = params['userName'];
      this.userId = params['userId'];
    });

  }

  getValues() {}
}
