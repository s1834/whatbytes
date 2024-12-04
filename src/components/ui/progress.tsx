"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
    color?: "blue" | "orange" | "red" | "green";
  }
>(({ className, value = 0, color = "blue", ...props }, ref) => {
  const colorClass = {
    blue: "bg-blue-500",
    orange: "bg-orange-500",
    red: "bg-red-500",
    green: "bg-green-500",
  }[color];

  const lighterColorClass = {
    blue: "bg-blue-100",
    orange: "bg-orange-100",
    red: "bg-red-100",
    green: "bg-green-100",
  }[color];

  const textColorClass = {
    blue: "text-blue-500",
    orange: "text-orange-500",
    red: "text-red-500",
    green: "text-green-500",
  }[color];

  const completedWidth = `${value}%`;

  return (
    <div className="flex items-center">
      <ProgressPrimitive.Root
        ref={ref}
        className={cn(
          "relative h-2 w-full overflow-hidden rounded-full bg-gray-200",
          className
        )}
        {...props}
      >
        <div className={cn("absolute inset-0", lighterColorClass)} />
        <div
          className={cn("absolute inset-0", colorClass)}
          style={{ width: completedWidth }}
        />
      </ProgressPrimitive.Root>

      <span className={`ml-2 text-sm font-semibold ${textColorClass}`}>
        {`${value}%`}
      </span>
    </div>
  );
});

Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
