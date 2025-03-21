import { Image } from "@/components/Image";
import Link from "next/link";

const PopularTags = () => {
  return (
    <div className="p-4 rounded-2xl border-[1px] border-gray-border flex flex-col gap-4">
      <h1 className="text-xl font-bold text-text-default">
        {"What's"} Happening
      </h1>
      {/* TREND EVENT */}
      <div className="flex gap-4">
        <div className="relative w-20 h-20 rounded-xl overflow-hidden">
          <Image
            path="general/default-banner.png"
            alt="event"
            w={120}
            h={120}
            tr={true}
          />
        </div>
        <div className="flex-1">
          <h2 className="font-bold text-text-default">
            Nadal v Federer Grand Slam
          </h2>
          <span className="text-sm text-textGray">Last Night</span>
        </div>
      </div>
      {/* TOPICS */}
      <div className="">
        <div className="flex items-center justify-between">
          <span className="text-textGray text-sm">Technology • Trending</span>
          <Image path="icons/infoMore.svg" alt="info" w={16} h={16} />
        </div>
        <h2 className="text-text-default font-bold">OpenAI</h2>
        <span className="text-textGray text-sm">20K posts</span>
      </div>
      {/* TOPICS */}
      <div className="">
        <div className="flex items-center justify-between">
          <span className="text-textGray text-sm">Technology • Trending</span>
          <Image path="icons/infoMore.svg" alt="info" w={16} h={16} />
        </div>
        <h2 className="text-text-default font-bold">OpenAI</h2>
        <span className="text-textGray text-sm">20K posts</span>
      </div>
      {/* TOPICS */}
      <div className="">
        <div className="flex items-center justify-between">
          <span className="text-textGray text-sm">Technology • Trending</span>
          <Image path="icons/infoMore.svg" alt="info" w={16} h={16} />
        </div>
        <h2 className="text-text-default font-bold">OpenAI</h2>
        <span className="text-textGray text-sm">20K posts</span>
      </div>
      {/* TOPICS */}
      <div className="">
        <div className="flex items-center justify-between">
          <span className="text-textGray text-sm">Technology • Trending</span>
          <Image path="icons/infoMore.svg" alt="info" w={16} h={16} />
        </div>
        <h2 className="text-text-default font-bold">OpenAI</h2>
        <span className="text-textGray text-sm">20K posts</span>
      </div>
      <Link href="/" className="text-iconBlue">
        Show More
      </Link>
    </div>
  );
};

export default PopularTags;
