import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

interface AvatarCustomProps {
  className?: string;
}
const AvatarCustom: React.FC<AvatarCustomProps> = ({ className }) => {
  return (
    <Avatar className={className}>
      <AvatarImage src={urlEndpoint + "/general/avatar.jpg"} className="" />
      <AvatarFallback className="bg-gray-600">AN</AvatarFallback>
    </Avatar>
  );
};

export default AvatarCustom;
