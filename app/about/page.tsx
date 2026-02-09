import type { Metadata } from "next";
import { Flex } from "@/components/ui/flex";
import { Typography } from "@/components/ui/typography";

export const metadata: Metadata = {
  title: "About — paddy.systems",
  description:
    "About paddy.systems and the change-readiness assessment approach.",
  openGraph: {
    title: "About — paddy.systems",
    description:
      "About paddy.systems and the change-readiness assessment approach.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <Flex direction="column" gap="lg" className="mx-auto max-w-3xl">
      <Typography as="h1" variant="h2" color="black" weight="semibold">
        About
      </Typography>
      <Typography as="p" variant="p" color="black" className="text-zinc-600">
        paddy.systems helps engineering leaders plan complex, high-risk product
        change. The goal is simple: reduce uncertainty, surface hidden risks,
        and deliver a sequenced plan you can defend.
      </Typography>
      <Typography as="p" variant="p" color="black" className="text-zinc-600">
        The work is grounded in production systems experience and focuses on
        turning ambiguous initiatives into clear decisions.
      </Typography>
    </Flex>
  );
}
