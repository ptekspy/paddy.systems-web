import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { twMerge } from "tailwind-merge";

type CallToActionProps = {
  title: string;
  description: string;
  href: string;
  buttonLabel: string;
  tone?: "black" | "white";
  align?: "left" | "center";
  className?: string;
};

export function CallToAction({
  title,
  description,
  href,
  buttonLabel,
  tone = "black",
  align = "center",
  className,
}: CallToActionProps) {
  const isBlack = tone === "black";
  const alignment = align === "center" ? "text-center" : "text-left";

  return (
    <Card
      tone={tone}
      padding="xl"
      className={twMerge(alignment, className)}
    >
      <Typography
        as="h2"
        variant="h3"
        color={isBlack ? "white" : "black"}
        weight="semibold"
      >
        {title}
      </Typography>
      <Typography
        as="p"
        variant="p"
        color={isBlack ? "white" : "black"}
        className={`mt-3 ${isBlack ? "text-zinc-300" : "text-zinc-600"}`}
      >
        {description}
      </Typography>
      <Button
        as="a"
        href={href}
        variant="contained"
        color={isBlack ? "white" : "black"}
        className="mt-6"
      >
        {buttonLabel}
      </Button>
    </Card>
  );
}
