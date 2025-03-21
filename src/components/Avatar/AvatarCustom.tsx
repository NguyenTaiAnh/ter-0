import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

interface AvatarCustomProps {
  className?: string;
  path:string;
  username:string
}
const AvatarCustom: React.FC<AvatarCustomProps> = ({ className, path, username }) => {
  return (
    <Avatar className={className}>
      <AvatarImage src={urlEndpoint + path} className="" />
      <AvatarFallback className="bg-gray-600">{username}</AvatarFallback>
    </Avatar>
  );
};

export default AvatarCustom;
