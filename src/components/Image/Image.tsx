"use client";

import React from "react";
import { IKImage } from "imagekitio-next";

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;
interface ImageProps{
    path:string,
    w?:number,
    h?:number
    alt:string,
    className?:string,
    tr?:boolean
}
const Image: React.FC<ImageProps> =({w,h, alt,path,className,tr})=> {
  return (
    <IKImage
      urlEndpoint={urlEndpoint}
      path={path}
      width={w}
      height={h}
      alt={alt}
      {...tr ? {
        transformation:[{ height: `${h}`, width: `${w}` }]
      }:{
        width:w,
        height:h
      }}
      lqip={{active:true, blur:20}}
      className={className}
    />
  );
}

export default Image;
