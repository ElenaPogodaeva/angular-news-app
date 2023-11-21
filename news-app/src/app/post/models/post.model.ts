export interface PostModel {
  userId: number;
  id: number;
  title: string;
  body: string;
  isLiked: boolean;
  likes: number;
}

export interface PostResponseModel {
  posts: PostModel[];
  hasMorePosts: boolean;
}
