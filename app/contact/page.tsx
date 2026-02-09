import type { Metadata } from "next";
import { Button } from "@/components/actions/button";
import { Input } from "@/components/forms/input";
import { Label } from "@/components/forms/label";
import { Select } from "@/components/forms/select";
import { Textarea } from "@/components/forms/textarea";
import { Typography } from "@/components/typography/typography";
import { Card } from "@/components/layout/card";
import { BulletList } from "@/components/lists/bullet-list";
import { SectionHeading } from "@/components/layout/section-heading";
import { Flex } from "@/components/layout/flex";

export const metadata: Metadata = {
  title: "Contact — paddy.systems",
  description:
    "Request a change-readiness assessment. Share a short description of the change you’re considering.",
  openGraph: {
    title: "Contact — paddy.systems",
    description:
      "Request a change-readiness assessment. Share a short description of the change you’re considering.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <Flex direction="column" className="gap-12">
      <Flex as="section" direction="column" gap="md">
        <Typography
          as="p"
          variant="caption"
          color="black"
          weight="semibold"
          className="tracking-[0.28em] text-zinc-500"
        >
          Contact
        </Typography>
        <Typography as="h1" variant="h2" color="black" weight="semibold">
          Request an assessment
        </Typography>
        <Typography as="p" variant="body" color="black" className="max-w-2xl text-zinc-600">
          Share a short description of the change you’re considering. You’ll get
          a response within two business days.
        </Typography>
      </Flex>

      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <Card
          tone="black"
          padding="lg"
          as="form"
          action="mailto:hello@paddy.systems"
          method="post"
          encType="text/plain"
        >
          <div className="grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                required
                placeholder="Your name"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Work email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@company.com"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="reason">Reason for contact</Label>
              <Select id="reason" name="reason" required>
                <option value="" disabled>
                  Select a reason
                </option>
                <option value="assessment">Book a review</option>
                <option value="white-labelling">White-labelling readiness</option>
                <option value="migration">Migration planning</option>
                <option value="performance">Performance under load</option>
                <option value="reliability">Reliability / observability</option>
                <option value="other">Other</option>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="details">Change summary</Label>
              <Textarea
                id="details"
                name="details"
                required
                rows={5}
                placeholder="What are you planning to change? What deadline or risk worries you?"
              />
            </div>
            <Button type="submit" variant="contained" color="white">
              Send request
            </Button>
          </div>
        </Card>

        <Flex direction="column" gap="lg">
          <Card tone="black" padding="md">
            <SectionHeading title="What to expect" tone="white" />
            <BulletList tone="white" className="mt-4">
              <li>Initial response within two business days.</li>
              <li>Clarifying call if the change is complex.</li>
              <li>Assessment delivered in 1–2 weeks.</li>
            </BulletList>
          </Card>
          <Card tone="black" padding="md">
            <SectionHeading title="Prefer email?" tone="white" />
            <Typography as="p" variant="small" color="white" className="mt-2 text-zinc-300">
              Send a note directly to
              <a
                href="mailto:hello@paddy.systems"
                className="ml-1 font-semibold text-white"
              >
                <Typography as="span" variant="small" color="white" weight="semibold">
                  hello@paddy.systems
                </Typography>
              </a>
              .
            </Typography>
          </Card>
        </Flex>
      </section>
    </Flex>
  );
}
