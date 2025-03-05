import React from "react";

interface RightBarProps {}
const RightBar: React.FC<RightBarProps> = () => {
  return <section className="hidden md:flex mx-8 bg-red-100 flex-1">RightBar</section>;
};

export default RightBar;
