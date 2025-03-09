import { ICurrentUser } from "@/types/user";

export const UserLogin: ICurrentUser = {
  id: 1,
  name: "John Doe",
  username: "john.doe",
  email: "test@test.com",
  avatar: "https://via.placeholder.com/150",
  banner: "https://via.placeholder.com/1920x400",
  about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  phone: "+1 (123) 456 7890",
  address: "1134 Ridder Park Drive, San Jose, CA 95131",
  website: "https://pixinvent.com",
  dob: "1995-01-01",
  company: "Pixinvent Pvt Ltd",

  //   role: "admin",
  //   permissions: ["admin"],
  createdAt: "2025-01-01",
  updatedAt: "2025-01-01",
  deleteAt: null,
  isPremium: false,
  status: "active",
  lstBookmarks: [],
  lstFollowers: 1000,
  lstFollowing: 1000,
  //   settings: {
  //     theme: "light",
  //     layout: "default",
  //     direction: "ltr",
  //     sidebar: {
  //       show: true,
  //       collapsed: false,
  //     },
  //     navbar: {
  //       show: true,
  //       type: "floating",
  //     },
  //     footer: {
  //       show: true,
  //     },
  //   },
};
