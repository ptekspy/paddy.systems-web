import * as React from "react";
import { twMerge } from "tailwind-merge";
import { Typography } from "@/components/ui/typography";

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, children, ...props }, ref) => (
    <label
      ref={ref}
      className={twMerge("text-sm font-semibold text-white", className)}
      {...props}
    >
      <Typography as="span" variant="small" color="white" weight="semibold">
        {children}
      </Typography>
    </label>
  )
);

Label.displayName = "Label";
