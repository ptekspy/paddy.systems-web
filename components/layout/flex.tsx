import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const flexVariants = cva("", {
  variants: {
    display: {
      flex: "flex",
      inline: "inline-flex",
      hidden: "hidden",
    },
    direction: {
      row: "flex-row",
      column: "flex-col",
      rowReverse: "flex-row-reverse",
      columnReverse: "flex-col-reverse",
    },
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
      baseline: "items-baseline",
    },
    justify: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly",
    },
    wrap: {
      nowrap: "flex-nowrap",
      wrap: "flex-wrap",
      wrapReverse: "flex-wrap-reverse",
    },
    gap: {
      none: "gap-0",
      xs: "gap-1",
      sm: "gap-2",
      base: "gap-3",
      md: "gap-4",
      lg: "gap-6",
      xl: "gap-8",
      xxl: "gap-20",
    },
  },
  defaultVariants: {
    display: "flex",
    direction: "row",
    align: "stretch",
    justify: "start",
    wrap: "nowrap",
    gap: "none",
  },
});

type ResponsiveValue<T> =
  | T
  | {
      base?: T;
      sm?: T;
      md?: T;
      lg?: T;
      xl?: T;
      "2xl"?: T;
    };

type FlexVariantProps = VariantProps<typeof flexVariants>;

export type FlexProps<T extends React.ElementType = "div"> = {
  as?: T;
  display?: ResponsiveValue<NonNullable<FlexVariantProps["display"]>>;
  direction?: ResponsiveValue<NonNullable<FlexVariantProps["direction"]>>;
  align?: ResponsiveValue<NonNullable<FlexVariantProps["align"]>>;
  justify?: ResponsiveValue<NonNullable<FlexVariantProps["justify"]>>;
  wrap?: ResponsiveValue<NonNullable<FlexVariantProps["wrap"]>>;
  gap?: ResponsiveValue<NonNullable<FlexVariantProps["gap"]>>;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "color">;

const BREAKPOINTS = ["base", "sm", "md", "lg", "xl", "2xl"] as const;

const flexClassMap = {
  display: {
    flex: "flex",
    inline: "inline-flex",
    hidden: "hidden",
  },
  direction: {
    row: "flex-row",
    column: "flex-col",
    rowReverse: "flex-row-reverse",
    columnReverse: "flex-col-reverse",
  },
  align: {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
    baseline: "items-baseline",
  },
  justify: {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
    around: "justify-around",
    evenly: "justify-evenly",
  },
  wrap: {
    nowrap: "flex-nowrap",
    wrap: "flex-wrap",
    wrapReverse: "flex-wrap-reverse",
  },
  gap: {
    none: "gap-0",
    xs: "gap-1",
    sm: "gap-2",
    base: "gap-3",
    md: "gap-4",
    lg: "gap-6",
    xl: "gap-8",
    xxl: "gap-20",
  },
} as const;

const flexDefaults = {
  display: "flex",
  direction: "row",
  align: "stretch",
  justify: "start",
  wrap: "nowrap",
  gap: "none",
} satisfies Required<FlexVariantProps>;

const isResponsiveObject = <T,>(
  value: ResponsiveValue<T>
): value is Exclude<ResponsiveValue<T>, T> => {
  return typeof value === "object" && value !== null;
};

function resolveResponsive<T extends keyof FlexVariantProps>(
  key: T,
  value: ResponsiveValue<NonNullable<FlexVariantProps[T]>> | undefined,
  defaultValue: NonNullable<FlexVariantProps[T]>
) {
  const map = flexClassMap[key] as Record<string, string>;

  if (!value) {
    return [map[defaultValue]];
  }

  if (!isResponsiveObject(value)) {
    return [map[value]];
  }

  const classes: string[] = [];
  const baseValue = value.base ?? defaultValue;
  classes.push(map[baseValue]);

  return BREAKPOINTS.filter((breakpoint) => breakpoint !== "base").flatMap(
    (breakpoint) => {
      const bpValue = value[breakpoint];
      if (!bpValue) {
        return [];
      }

      return [`${breakpoint}:${map[bpValue]}`];
    }
  );
}

export function Flex<T extends React.ElementType = "div">({
  as,
  display,
  direction,
  align,
  justify,
  wrap,
  gap,
  className,
  ...props
}: FlexProps<T>) {
  const Component = as ?? "div";

  const responsiveClasses = [
    ...resolveResponsive("display", display, flexDefaults.display),
    ...resolveResponsive("direction", direction, flexDefaults.direction),
    ...resolveResponsive("align", align, flexDefaults.align),
    ...resolveResponsive("justify", justify, flexDefaults.justify),
    ...resolveResponsive("wrap", wrap, flexDefaults.wrap),
    ...resolveResponsive("gap", gap, flexDefaults.gap),
  ];

  return (
    <Component
      className={twMerge(responsiveClasses.join(" "), className)}
      {...props}
    />
  );
}

export { flexVariants };
