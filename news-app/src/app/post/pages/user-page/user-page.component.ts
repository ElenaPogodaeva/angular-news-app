import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PostModel, UserModel } from '../../models/post.model';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
})
export class UserPageComponent implements OnInit {
  @Input() public user?: UserModel;

  @Input() public posts?: PostModel[];

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.getUser();
    this.getUserPosts();
  }

  getUser() {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.postService.getUser(id).subscribe((user) => (this.user = user));
  }

  getUserPosts() {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.postService.getUserPosts(id).subscribe((posts) => (this.posts = posts));
  }

  onBack() {
    this.location.back();
  }
}
