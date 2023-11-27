import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CommentModel, PostModel } from '../../models/post.model';
import { PostService } from '../../services/post.service';

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
    private postService: PostService,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.getPost();
    this.loadComments();
  }

  loadComments() {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.postService.getComments(id).subscribe((comments) => {
      this.comments = comments;
    });
  }

  getPost() {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.postService.getPost(id).subscribe((post) => (this.selectedPost = post));
  }

  onBack() {
    this.location.back();
  }
}
