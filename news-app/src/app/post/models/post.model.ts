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

export interface CommentModel {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface UserModel {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
  };
}
