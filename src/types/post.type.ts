export interface IRequestPost {
  content: string;
  user_id: string;
  hashtags: string;
  in_reply_to_post_id?: string | null;
  language?: string;
  like_count: number;
  media_url: string;
  media_type?:string;
  mentions?: string | null;
  parentId?: string | null;
  quote_count?: number;
  quoted_post_id?: string | null;
  reply_count: number;
  retweet_count: number;
  updateAt: any;
  createdAt: any;
}

export interface IRequestComment {
  user_id: string;
  content: string;
  createdAt: string;
  updateAt: string;
}

export interface IRequestLike {
  user_id: string;
  createdAt: string;
}
