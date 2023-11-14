import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PostModel } from '../../models/post.model';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-detailed-page',
  templateUrl: './detailed-page.component.html',
  styleUrls: ['./detailed-page.component.scss'],
})
export class DetailedPageComponent implements OnInit {
  public selectedPost?: PostModel;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.getPost();
  }

  getPost() {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.postService.getPost(id).subscribe((post) => (this.selectedPost = post));
  }

  onBack() {
    this.location.back();
  }
}
