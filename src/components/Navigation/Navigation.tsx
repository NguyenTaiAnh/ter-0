"use client";
import { TTabs } from "@/types/tabs";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { cn } from "@/lib/utils";
import { PostUpload } from "../Post/PostUpload";
import { PostInfo } from "../Post/PostInfo";
import { Loader } from "lucide-react";
import { getLocalStorage } from "@/ultils";
import { IPost } from "@/types/post.type";

interface NavigationProps {
  tabs: TTabs[];
  posts?: IPost[];
  isLoading?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ tabs, posts, isLoading }) => {
  const [state, setState] = React.useState(tabs[0].tag);
  const currentUser = getLocalStorage("currentUser");
  return (
    <Tabs className="rounded-0" defaultValue={tabs[0].tag}>
      <TabsList className="bg-black z-[50] sticky top-0 justify-start w-full flex-nowrap no-scrollbar box-border h-[54px] overflow-x-scroll rounded-none p-0 border-b border-b-gray-border">
        {tabs.map((tab) => (
          <TabsTrigger
            onClick={() => setState(tab.tag)}
            key={tab.id}
            value={tab.tag}
            className="cursor-pointer focus-visible:ring-0 focus-visible:border-none focus-visible:shadow-none focus-visible:bg-black data-[state=active]:outline-none hover:bg-accent-foreground h-full py-0 data-[state=active]:bg-black text-[15px] px-4 relative text-white font-bold rounded-none w-fit "
          >
            <p className={cn(state == tab.tag && "active-tab", "py-4")}>
              {tab.title}
            </p>
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent key={tab.id} value={tab.tag} className="w-full">
          {tab.id == 1 && <div className="border-b-[1px] border-gray-border"><PostUpload currentUser={currentUser} /></div>}
          {!posts && isLoading && (
            <Loader className="animate-spin flex flex-row justify-center w-full" />
          )}
          {posts &&
            posts.length > 0 &&
            posts.map((i:IPost) => <PostInfo post={i} key={i.postId} currentUser={currentUser}/>)}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default Navigation;
