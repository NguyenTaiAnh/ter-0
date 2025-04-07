import { EditorImageType } from "./editor-image.type";

export interface IRequestPost {
  content: string;
  user_id: string;
  hashtags?: string;
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
  updatedAt?: any;
  createdAt: any;
  shape:EditorImageType|string
}

export interface IRequestComment {
  user_id: string;
  content: string;
  like_count?: number;
  media_url?: string;
  media_type?:string;
  createdAt: any;
  updatedAt: any;
  shape?:EditorImageType 
}

export interface IRequestLike {
  user_id: string;
  createdAt: string;
}

export interface IPost{
  postId?:string,
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
  updatedAt: any;
  createdAt: any;
  shape:EditorImageType 
}