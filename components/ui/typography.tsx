import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "text-4xl md:text-5xl leading-tight",
      h2: "text-3xl md:text-4xl leading-tight",
      h3: "text-2xl md:text-3xl leading-tight",
      h4: "text-xl md:text-2xl leading-snug",
      h5: "text-lg md:text-xl leading-snug",
      h6: "text-base md:text-lg leading-snug",
      p: "text-base leading-relaxed",
      body: "text-lg leading-relaxed",
      small: "text-sm",
      caption: "text-xs uppercase tracking-[0.2em]",
    },
    color: {
      black: "text-zinc-900",
      white: "text-white",
      inherit: "text-inherit",
    },
    weight: {
      regular: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    leading: {
      tight: "leading-tight",
      snug: "leading-snug",
      normal: "leading-normal",
      relaxed: "leading-relaxed",
    },
  },
  defaultVariants: {
    variant: "p",
    color: "black",
    weight: "regular",
    leading: "normal",
  },
});

export type TypographyProps<T extends React.ElementType = "p"> = {
  as?: T;
} & VariantProps<typeof typographyVariants> &
  Omit<React.ComponentPropsWithoutRef<T>, "as" | "color">;

export function Typography<T extends React.ElementType = "p">({
  as,
  variant,
  color,
  weight,
  leading,
  className,
  ...props
}: TypographyProps<T>) {
  const Component = as ?? "p";
  const classes = twMerge(
    typographyVariants({ variant, color, weight, leading }),
    className
  );

  return <Component className={classes} {...props} />;
}

export { typographyVariants };
