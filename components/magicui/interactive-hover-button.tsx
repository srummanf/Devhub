import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ children, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative w-full h-16 cursor-pointer overflow-hidden border  p-4 px-8 text-center text-2xl font-bold",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-4">
        <div className="h-4 w-4 rounded-full bg-primary transition-all duration-300 group-hover:scale-[101]"></div>
        <span className="font-pixelify inline-block transition-all duration-300 group-hover:translate-x-16 group-hover:opacity-0">
          {children}
        </span>
      </div>
      <div className="absolute top-0 left-0 z-10 flex h-full w-full translate-x-16 items-center justify-center gap-4 text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
        <span>{children}</span>
        <ArrowRight className="h-6 w-6" />
      </div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";
