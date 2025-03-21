export interface ICurrentUser {
  id: string | number;
  name: string;
  username: string;
  email: string;
  avatar: string;
  banner: string;
  about?: string;
  phone?: string;
  address?: string;
  website?: string;
  dob?: string;
  company?: string;
  createdAt: string;
  updatedAt: string;
  deleteAt: string | null;
  isPremium: boolean;
  status: string;
  lstBookmarks: any[];
  lstFollowers: number;
  lstFollowing: number;
}

export interface IUser {
  email: string;
  avatar_url?: string;
  banner_url?: string;
  is_premium: boolean;
  is_verified: boolean;
  last_login?: string;
  location?: string;
  password: string;
  phone?: number | null;
  privacy_settings?: any;
  updatedAt: any;
  username: string;
  website_url?: string;
  account_status: string;
  bio?: string;
  createdAt: any;
  display_name: string;
  followers: number;
  following: number;
  name:string;
  birthDay?:string;
  userId?:string
}
