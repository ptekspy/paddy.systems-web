import type { Metadata } from "next";
import { Flex } from "@/components/ui/flex";
import { Typography } from "@/components/ui/typography";

export const metadata: Metadata = {
  title: "Privacy — paddy.systems",
  description:
    "Privacy policy for paddy.systems and how contact form data is handled.",
  openGraph: {
    title: "Privacy — paddy.systems",
    description:
      "Privacy policy for paddy.systems and how contact form data is handled.",
    type: "website",
  },
};

export default function PrivacyPage() {
  return (
    <Flex direction="column" gap="lg" className="mx-auto max-w-3xl">
      <Typography as="h1" variant="h2" color="black" weight="semibold">
        Privacy
      </Typography>
      <Typography as="p" variant="p" color="black" className="text-zinc-600">
        This site does not use analytics or tracking cookies by default. If you
        submit the contact form, the information you provide is used solely to
        respond to your request.
      </Typography>
      <Typography as="p" variant="p" color="black" className="text-zinc-600">
        For privacy questions, reach out via
        <a
          href="mailto:hello@paddy.systems"
          className="ml-1 font-semibold text-zinc-900"
        >
          <Typography as="span" variant="p" color="black" weight="semibold">
            hello@paddy.systems
          </Typography>
        </a>
        .
      </Typography>
    </Flex>
  );
}
