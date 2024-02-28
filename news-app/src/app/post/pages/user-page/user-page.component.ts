import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PostModel, UserModel } from '../../models/post.model';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
})
export class UserPageComponent implements OnInit {
  public user?: UserModel;

  public posts?: PostModel[];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.user = this.route.snapshot.data['user'][0];
    this.posts = this.route.snapshot.data['user'][1];
  }

  onBack() {
    this.location.back();
  }
}
