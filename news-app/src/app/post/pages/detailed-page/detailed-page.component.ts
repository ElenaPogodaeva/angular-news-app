import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CommentModel, PostModel } from '../../models/post.model';

@Component({
  selector: 'app-detailed-page',
  templateUrl: './detailed-page.component.html',
  styleUrls: ['./detailed-page.component.scss'],
})
export class DetailedPageComponent implements OnInit {
  public selectedPost?: PostModel;

  public comments: CommentModel[] = [];

  public showComments: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.selectedPost = this.route.snapshot.data['post'];
    this.comments = this.route.snapshot.data['comments'];
  }

  onBack() {
    this.location.back();
  }
}
