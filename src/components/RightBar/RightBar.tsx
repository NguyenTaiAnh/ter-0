import React from "react";
import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { PopularTags } from "./PopularTags";
import { Recommendations } from "./Recommendations";
import Link from "next/link";

interface RightBarProps {}
const RightBar: React.FC<RightBarProps> = () => {
  return (
    <div className="hidden sticky top-0 h-max md:flex md:flex-col mx-8 md:gap-4 pt-4 bg-black flex-1 md:max-w-rightbar-md xl:max-w-rightbar-xl">
      <div className="mb-3 mt-1 relative">
        <Input
          placeholder="Search"
          className=" pl-9 w-full h-[44px] border-[1px] rounded-4xl focus-visible:border-gray-border focus-visible:ring-0 border-gray-border"
        />
        <Search className="absolute left-0 top-[9%] m-2.5 h-4 w-4 text-muted-foreground" />
      </div>
      <PopularTags />
      <Recommendations />
      <div className="text-textGray text-sm flex gap-x-4 flex-wrap">
        <Link href="/">Terms of Service</Link>
        <Link href="/">Privacy Policy</Link>
        <Link href="/">Cookie Policy</Link>
        <Link href="/">Accessibility</Link>
        <Link href="/">Ads Info</Link>
        <span>© 2025 L Corp.</span>
      </div>
    </div>
  );
};

export default RightBar;
