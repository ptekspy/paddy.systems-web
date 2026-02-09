import type { Metadata } from "next";
import { Button } from "@/components/actions/button";
import { CallToAction } from "@/components/marketing/call-to-action";
import { Card } from "@/components/layout/card";
import { BulletList } from "@/components/lists/bullet-list";
import { Flex } from "@/components/layout/flex";
import { SectionHeading } from "@/components/layout/section-heading";
import { Typography } from "@/components/typography/typography";

export const metadata: Metadata = {
  title: "paddy.systems — Change-readiness assessments",
  description:
    "Plan complex change without discovering risk in production. Readiness assessments that surface hidden constraints and produce a sequenced plan.",
  openGraph: {
    title: "paddy.systems — Change-readiness assessments",
    description:
      "Readiness assessments that surface hidden constraints and produce a sequenced plan.",
    type: "website",
  },
};

const stats = [
  {
    label: "Assessment timeline",
    value: "1–2 weeks",
    detail: "From discovery to delivery",
  },
  {
    label: "Key artefacts",
    value: "4",
    detail: "Report, risks, sequence, decisions",
  },
  {
    label: "Primary focus",
    value: "Readiness",
    detail: "De-risking structural change",
  },
];

const steps = [
  {
    title: "Map reality",
    body: "Capture system boundaries, constraints, and current plans.",
  },
  {
    title: "Surface risk",
    body: "Name failure modes, dependencies, and decision gaps.",
  },
  {
    title: "Sequence change",
    body: "Deliver a phased plan with go / delay decision points.",
  },
];

const outputs = [
  "Readiness report with clear risk grading",
  "Tenant boundary and data separation decisions",
  "Sequencing plan with proof milestones",
  "Decision log for leadership alignment",
];

export default function Home() {
  return (
    <Flex direction="column" gap="xxl">
      <Card tone="black" padding="xl" className="rounded-[32px] px-8 py-14 md:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Flex direction="column" gap="lg">
            <Typography
              as="p"
              variant="caption"
              color="white"
              weight="semibold"
              className="tracking-[0.28em] text-zinc-400"
            >
              Paddy Systems · Change-readiness
            </Typography>
            <Typography as="h1" variant="h1" color="white" weight="semibold">
              A calm, defensible plan for high-stakes product change.
            </Typography>
            <Typography as="p" variant="body" color="white" className="text-zinc-300">
              We translate “We want to do X, but don’t know how” into a clear,
              sequenced assessment that exposes risks before they ship.
            </Typography>
            <Flex wrap="wrap" gap="md">
              <Button as="a" href="/contact" variant="contained" color="white">
                Book a review
              </Button>
              <Button
                as="a"
                href="/white-labelling-readiness"
                variant="outlined"
                color="white"
              >
                White-labelling readiness
              </Button>
            </Flex>
          </Flex>
          <Card tone="black" padding="lg" className="bg-white/5">
            <Typography
              as="p"
              variant="caption"
              color="white"
              weight="semibold"
              className="tracking-[0.28em] text-zinc-400"
            >
              Snapshot
            </Typography>
            <div className="mt-6 grid gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="grid gap-1">
                  <Typography as="p" variant="small" color="white" className="text-zinc-300">
                    {stat.label}
                  </Typography>
                  <Typography as="p" variant="h4" color="white" weight="semibold">
                    {stat.value}
                  </Typography>
                  <Typography as="p" variant="small" color="white" className="text-zinc-300">
                    {stat.detail}
                  </Typography>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Card>

      <Card tone="white" padding="md" className="md:p-8">
        <Flex direction="column" gap="base">
          <Typography as="h2" variant="h5" color="black" weight="semibold">
            What this helps you decide
          </Typography>
          <ul className="space-y-2">
            <li>
              <Typography as="span" variant="small" color="black" className="text-zinc-600">
                Whether the change is viable on your timeline.
              </Typography>
            </li>
            <li>
              <Typography as="span" variant="small" color="black" className="text-zinc-600">
                Which risks must be addressed before you commit.
              </Typography>
            </li>
            <li>
              <Typography as="span" variant="small" color="black" className="text-zinc-600">
                What to do first to keep the programme safe.
              </Typography>
            </li>
          </ul>
        </Flex>
      </Card>

      <section className="grid gap-8 lg:grid-cols-2">
        <Card tone="black" padding="lg">
          <SectionHeading title="What you get" tone="white" />
          <BulletList tone="white" className="mt-6">
            <li>Summary of risks.</li>
            <li>Suggested sequence and priorities.</li>
            <li>Follow-up notes delivered within 24–48h.</li>
          </BulletList>
        </Card>
        <Card tone="black" padding="lg">
          <SectionHeading title="Typical topics" tone="white" />
          <BulletList tone="white" className="mt-6">
            <li>Migrations and platform re-architecture.</li>
            <li>White-labelling and tenancy boundaries.</li>
            <li>Performance under load.</li>
            <li>Reliability and observability gaps.</li>
          </BulletList>
        </Card>
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <Flex direction="column" gap="lg">
          <Typography as="h2" variant="h2" weight="semibold" color="black">
            Why teams call us
          </Typography>
          <Typography as="p" variant="p" color="black" className="text-zinc-600">
            White-labelling looks cosmetic but it’s structural. Most teams
            discover the risk too late: config sprawl, feature divergence,
            boundary drift, and support drag.
          </Typography>
          <Card tone="black" padding="md" className="grid gap-4">
            <Typography as="p" variant="small" color="white" weight="semibold">
              Common signals
            </Typography>
            <ul className="space-y-3 text-sm text-zinc-300">
              <li>
                <Typography as="span" variant="small" color="white" className="text-zinc-300">
                  “We can’t agree on tenant boundaries.”
                </Typography>
              </li>
              <li>
                <Typography as="span" variant="small" color="white" className="text-zinc-300">
                  “Support is already struggling with divergence.”
                </Typography>
              </li>
              <li>
                <Typography as="span" variant="small" color="white" className="text-zinc-300">
                  “Leadership wants a plan we can defend.”
                </Typography>
              </li>
            </ul>
          </Card>
        </Flex>
        <Card tone="black" padding="lg">
          <Typography
            as="p"
            variant="caption"
            color="white"
            weight="semibold"
            className="tracking-[0.2em] text-zinc-400"
          >
            Outputs
          </Typography>
          <ul className="mt-6 space-y-4 text-sm text-zinc-300">
            {outputs.map((output) => (
              <Flex as="li" key={output} gap="base">
                <span className="mt-1 h-2 w-2 rounded-full bg-white" />
                <Typography as="span" variant="small" color="white" className="text-zinc-300">
                  {output}
                </Typography>
              </Flex>
            ))}
          </ul>
        </Card>
      </section>


      <div className="grid gap-8 lg:grid-cols-3">
        {steps.map((step, index) => (
          <Card key={step.title} tone="black" padding="md" className="rounded-2xl">
            <Typography
              as="p"
              variant="caption"
              color="white"
              weight="semibold"
              className="tracking-[0.2em] text-zinc-400"
            >
              Step {index + 1}
            </Typography>
            <Typography as="h3" variant="h5" color="white" weight="semibold" className="mt-4">
              {step.title}
            </Typography>
            <Typography as="p" variant="small" color="white" className="mt-3 text-zinc-300">
              {step.body}
            </Typography>
          </Card>
        ))}
      </div>

      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <Card tone="black" padding="xl">
          <Typography as="h2" variant="h3" color="white" weight="semibold">
            White-labelling readiness assessment
          </Typography>
          <Typography as="p" variant="p" color="white" className="mt-4 text-zinc-300">
            Know what will break before it breaks. Identify risk hotspots and
            sequencing decisions that keep your programme safe.
          </Typography>
          <Button
            as="a"
            href="/white-labelling-readiness"
            variant="contained"
            color="white"
            className="mt-6"
          >
            Explore the assessment
          </Button>
        </Card>
        <Card tone="black" padding="xl">
          <Typography as="h2" variant="h3" color="white" weight="semibold">
            FAQ
          </Typography>
          <div className="mt-6 space-y-5">
            <div>
              <Typography as="p" variant="small" color="white" weight="semibold">
                Is this consulting?
              </Typography>
              <Typography as="p" variant="small" color="white" className="mt-2 text-zinc-300">
                It’s a productised assessment with defined outputs and a clear
                timeline.
              </Typography>
            </div>
            <div>
              <Typography as="p" variant="small" color="white" weight="semibold">
                Who is it for?
              </Typography>
              <Typography as="p" variant="small" color="white" className="mt-2 text-zinc-300">
                Engineering leaders planning a high-risk platform shift.
              </Typography>
            </div>
            <div>
              <Typography as="p" variant="small" color="white" weight="semibold">
                Timeline?
              </Typography>
              <Typography as="p" variant="small" color="white" className="mt-2 text-zinc-300">
                Typically 1–2 weeks end to end.
              </Typography>
            </div>
          </div>
        </Card>
      </section>

      <CallToAction
        title="Ready to de-risk your next change?"
        description="Request an assessment and get a plan you can defend."
        href="/contact"
        buttonLabel="Book a review"
        tone="black"
      />
    </Flex>
  );
}
