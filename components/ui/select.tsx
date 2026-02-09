import * as React from "react";
import { twMerge } from "tailwind-merge";

export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, ...props }, ref) => (
    <select
      ref={ref}
      className={twMerge(
        "w-full rounded-2xl border border-white/10 bg-zinc-900 px-4 py-3 text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
        className
      )}
      {...props}
    />
  )
);

Select.displayName = "Select";
