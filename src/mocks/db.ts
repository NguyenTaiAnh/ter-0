import { ACCOUNT_STATUS } from "@/types/status.type";
import { serverTimestamp } from "firebase/firestore";
// import { ICurrentUser } from "@/types/user";

// export const UserLogin: ICurrentUser = {
//   id: 1,
//   name: "John Doe",
//   username: "john.doe",
//   email: "test@test.com",
//   avatar: "https://via.placeholder.com/150",
//   banner: "https://via.placeholder.com/1920x400",
//   about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   phone: "+1 (123) 456 7890",
//   address: "1134 Ridder Park Drive, San Jose, CA 95131",
//   website: "https://pixinvent.com",
//   dob: "1995-01-01",
//   company: "Pixinvent Pvt Ltd",

//   //   role: "admin",
//   //   permissions: ["admin"],
//   createdAt: "2025-01-01",
//   updatedAt: "2025-01-01",
//   deleteAt: null,
//   isPremium: false,
//   status: "active",
//   lstBookmarks: [],
//   lstFollowers: 1000,
//   lstFollowing: 1000,
//   //   settings: {
//   //     theme: "light",
//   //     layout: "default",
//   //     direction: "ltr",
//   //     sidebar: {
//   //       show: true,
//   //       collapsed: false,
//   //     },
//   //     navbar: {
//   //       show: true,
//   //       type: "floating",
//   //     },
//   //     footer: {
//   //       show: true,
//   //     },
//   //   },
// };
const updatedAt = serverTimestamp();
const createdAt = serverTimestamp();

const defaultValueUser = {
  account_status: ACCOUNT_STATUS.ACTIVE,
  // createdAt: new Date().toString(),
  display_name: "",
  followers: 0,
  following: 0,
  is_premium: false,
  is_verified: true,
  // updated_at: new Date().toString(),
  bio: "",
  avatar_url: "/general/avatar_default.jpg",
  banner_url: "/general/default-banner.png",
  name: "",
  last_login: new Date().toString(),
  location: "",
  phone: null,
  privacy_settings: "",
  website_url: "",
  updatedAt: updatedAt,
  createdAt: createdAt,
};
const defaultValuePost = {
  hashtags: "",
  in_reply_to_post_id: null,
  language: "",
  like_count: 0,
  mentions: null,
  parentId: null,
  quote_count: 0,
  quoted_post_id: null,
  reply_count: 0,
  retweet_count: 0,
  updatedAt: updatedAt,
  createdAt: createdAt,
};

export { createdAt, updatedAt, defaultValueUser, defaultValuePost };
