"use client";
import { TTabs } from "@/types/tabs";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { cn } from "@/lib/utils";
import { PostUpload } from "../Post/PostUpload";
import { PostInfo } from "../Post/PostInfo";

interface NavigationProps {
  tabs: TTabs[];
}
const Navigation: React.FC<NavigationProps> = ({ tabs }) => {
  console.log({ tabs });
  const [state, setState] = React.useState("for-you");
  return (
    <Tabs className="rounded-0" defaultValue="for-you">
      <TabsList className="bg-black z-[9999] sticky top-0 justify-start w-full flex-nowrap no-scrollbar box-border h-[54px] overflow-x-scroll rounded-none p-0 border-b border-b-gray-border">
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
          {tab.id == 1 && <PostUpload />}
          <PostInfo />
          <PostInfo />
          <PostInfo />
          <PostInfo />
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default Navigation;
