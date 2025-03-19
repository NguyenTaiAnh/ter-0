export interface IRequestPost {
  content: string;
  userId: string;
  hashtags: string;
  in_reply_to_post_id?: string | null;
  language?: string;
  like_count: number;
  media_url: string;
  mentions?: string | null;
  parentId?: string | null;
  quote_count?: number;
  quoted_post_id?: string | null;
  reply_count: number;
  retweet_count: number;
  update_at: string;
  created_at:string
}
