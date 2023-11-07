import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostModel } from '../../models/post.model';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-detailed-page',
  templateUrl: './detailed-page.component.html',
  styleUrls: ['./detailed-page.component.scss'],
})
export class DetailedPageComponent implements OnInit {
  @Input() public selectedPost?: PostModel;

  constructor(
    private postService: PostService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.selectedPost = this.postService.selectedPost;
  }

  onBack() {
    this.router.navigate(['/', 'posts']);
  }
}
