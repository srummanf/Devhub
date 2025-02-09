"use client";
import React from "react";
import { PinContainer } from "../ui/3d-pin";

interface CardProps {
  title: string;
  href: string;
  imageUrl: string;
  description?: string;
}

export function Card({ title, href, imageUrl, description }: CardProps) {
  return (
    <PinContainer title={title} href={href}>
      <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
        <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
          {title}
        </h3>
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

      {/* ------------- Old Card ------------- */}
      {/* <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]  rounded-lg shadow-lg">
        <a href={href} target="_blank" rel="noopener noreferrer" className="block">
          <div className="flex flex-1 w-full h-[12rem] rounded-lg overflow-hidden">
            <img
              src={imageUrl}
              alt={title}
              className="object-cover w-full h-full"
            />
          </div>
        </a>
        <h3 className="mt-5 max-w-xs !m-0 font-bold text-base text-slate-100">
          {title}
        </h3>
        {description && (
          <div className="text-base font-normal text-slate-500">
            {description}
          </div>
        )}
      </div> */}
    </PinContainer>
  );
}

export default Card;
