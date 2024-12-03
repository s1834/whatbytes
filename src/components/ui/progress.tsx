"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";

// Add a color prop to handle different colors for the progress bars
const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
    color?: "blue" | "orange" | "red" | "green"; // New color prop
  }
>(({ className, value, color = "blue", ...props }, ref) => {
  // Determine the progress bar color based on the color prop
  const colorClass = {
    blue: "bg-blue-500", // Dark blue for completed portion
    orange: "bg-orange-500", // Dark orange for completed portion
    red: "bg-red-500", // Dark red for completed portion
    green: "bg-green-500", // Dark green for completed portion
  }[color];

  const lighterColorClass = {
    blue: "bg-blue-200", // Light blue for remaining portion
    orange: "bg-orange-200", // Light orange for remaining portion
    red: "bg-red-200", // Light red for remaining portion
    green: "bg-green-200", // Light green for remaining portion
  }[color];

  // Determine the text color for the percentage
  const textColorClass = {
    blue: "text-blue-500",
    orange: "text-orange-500",
    red: "text-red-500",
    green: "text-green-500",
  }[color];

  // Calculate the width of the completed part
  const completedWidth = `${value || 0}%`;
  const remainingWidth = `${100 - (value || 0)}%`;

  return (
    <div className="flex items-center">
      {/* Progress bar */}
      <ProgressPrimitive.Root
        ref={ref}
        className={cn(
          "relative h-2 w-full overflow-hidden rounded-full",
          className
        )}
        {...props}
      >
        {/* Filled (completed) part of the progress bar */}
        <div
          className={`h-full ${colorClass}`}
          style={{ width: completedWidth }}
        />
        {/* Remaining (unfilled) part of the progress bar */}
        <div
          className={`h-full ${lighterColorClass}`}
          style={{ width: remainingWidth }}
        />
      </ProgressPrimitive.Root>

      {/* Percentage text next to the progress bar */}
      <span className={`ml-2 text-sm font-semibold ${textColorClass}`}>
        {`${value || 0}%`} {/* Displaying the progress value */}
      </span>
    </div>
  );
});

Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
