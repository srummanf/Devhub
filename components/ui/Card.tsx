"use client";
import React from "react";
import { PinContainer } from "../ui/3d-pin";

interface CardProps {
  title: string;
  href: string;
  imageUrl: string;
  description?: string;
  tag?: string;
}

export function Card({ title, href, imageUrl, description, tag }: CardProps) {
  return (
    <PinContainer title={title} href={href}>
      <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
        <div className="flex flex-end items-center justify-between">
          <h3 className="max-w-xs font-bold  text-base text-slate-100">
            {title}
          </h3>
          {tag && (
            <div className="border text-white text-xs px-3 py-1 mb-1 font-medium rounded-md w-fit  inline-flex animate-background-shine cursor-pointer items-center justify-center  border-gray-800 bg-[linear-gradient(110deg,#000,45%,#4D4B4B,55%,#000)] bg-[length:250%_100%] ">
              {tag}
            </div>
          )}
        </div>
        <div className="text-base !m-0 !p-0 font-normal">
          <span className="text-slate-500 ">{description}</span>
        </div>
        {/* <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" /> */}
        <div className="flex flex-1 w-full h-[12rem] mt-4  rounded-lg overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </PinContainer>
  );
}

export default Card;
