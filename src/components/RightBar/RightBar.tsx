import React from "react";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import { Input } from "../ui/input";

interface RightBarProps {}
const RightBar: React.FC<RightBarProps> = () => {
  return (
    <section className="hidden sticky top-0 h-screen md:flex md:flex-col mx-8 bg-black flex-1 md:max-w-rightbar-md xl:max-w-rightbar-xl">
      <div className="mb-3 mt-1 relative">
      <Input placeholder='Search' className=' pl-9 w-full h-[44px] border-[1px] rounded-4xl focus-visible:border-gray-border focus-visible:ring-0 border-gray-border' />
      <Search className="absolute left-0 top-[9%] m-2.5 h-4 w-4 text-muted-foreground"/>

      </div>

      <div className="flex flex-col border-gray-border border-2 gap-4 rounded-3xl px-4 py-3 mb-4">
        <h1 className="text-[20px] font-bold">Subscribe to Premium</h1>
        <p>
          Subscribe to unlock new features and if eligible, receive a share of
          revenue.
        </p>
        <Button className="w-[120px] px-4 bg-btn-subscribe rounded-2xl text-white font-bold text-[15px]">Subscribe</Button>
      </div>

      <div className="border-gray-border border-2 rounded-3xl">
        <h1 className="py-3 px-4 text-[20px] font-bold">What’s happening</h1>
        <div className="flex flex-row justify-between py-3 px-4 items-center">
          <div>
            <p className="text-[13px] text-icon-default">Technology · Trending</p>
            <p className="font-bold text-[15px]">#Google</p>
            <p className="text-[13px] text-icon-default">1,352 posts</p>
          </div>
          <div>...</div>
        </div>
        <div className="flex flex-row justify-between py-3 px-4 items-center">
          <div>
            <p className="text-[13px] text-icon-default">Technology · Trending</p>
            <p className="font-bold text-[15px]">#Google</p>
            <p className="text-[13px] text-icon-default">1,352 posts</p>
          </div>
          <div>...</div>
        </div>
        <div className="flex flex-row justify-between py-3 px-4 items-center">
          <div>
            <p className="text-[13px] text-icon-default">Technology · Trending</p>
            <p className="font-bold text-[15px]">#Google</p>
            <p className="text-[13px] text-icon-default">1,352 posts</p>
          </div>
          <div>...</div>
        </div>
        <div className="flex flex-row justify-between py-3 px-4 items-center">
          <div>
            <p className="text-[13px] text-icon-default">Technology · Trending</p>
            <p className="font-bold text-[15px]">#Google</p>
            <p className="text-[13px] text-icon-default">1,352 posts</p>
          </div>
          <div>...</div>
        </div>
      </div>
    </section>
  );
};

export default RightBar;
