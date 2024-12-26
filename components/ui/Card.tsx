"use client";
import React from "react";
import { PinContainer } from "../ui/3d-pin";


export function Card({ title, href, imageUrl, description }: any) {
    return (
        <div className="h-[40rem] w-full flex items-center justify-center">
            <PinContainer title={title} href={href}>
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                        {title}
                    </h3>
                    <div className="text-base !m-0 !p-0 font-normal">
                        <span className="text-slate-500">{description}</span>
                    </div>
                    <div className="flex flex-1 w-full rounded-lg mt-4">
                        <img
                            src={imageUrl}
                            alt="Card Image"
                            className="rounded-lg w-full h-full object-cover"
                        />
                    </div>
                </div>
            </PinContainer>
        </div>
    );
}
