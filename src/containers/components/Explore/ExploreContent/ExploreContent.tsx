import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import React from "react";

function ExploreContent() {
  return (
    <section className="px-4 ">
      <p className="text-[20px] font-bold my-4 ">Recommended for your</p>
      <div className="flex flex-col gap-4 py-4 bg-modal-bg  rounded-4xl">
        { Array.from([1,2,3,4,5,6]).map((i) => <div key={i} className="flex  flex-grow px-4  hover:bg-black border-b-border rounded-4xl py-2 justify-between items-center">
            <div className="flex items-center gap-4">
              <Avatar className="">
                <AvatarFallback className="bg-black">D{i}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-[15px] font-bold text-text-default">David {i}</p>
                <p className="text-[13px] text-icon-default">@David {i}</p>
              </div>
            </div>
            <Button>Follow</Button>
          </div>)}
      </div>
    </section>
  );
}

export default ExploreContent;
