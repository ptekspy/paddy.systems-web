import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { CallToAction } from "@/components/cta";
import { Card } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";

export const metadata: Metadata = {
  title: "White-labelling readiness — paddy.systems",
  description:
    "Know what will break before it breaks. Identify architectural and operational risks of white-labelling before you commit.",
  openGraph: {
    title: "White-labelling readiness — paddy.systems",
    description:
      "Know what will break before it breaks. Identify architectural and operational risks of white-labelling before you commit.",
    type: "website",
  },
};

export default function WhiteLabellingReadinessPage() {
  return (
    <div className="flex flex-col gap-16">
      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col gap-6">
          <Typography
            as="p"
            variant="caption"
            color="black"
            weight="semibold"
            className="tracking-[0.28em] text-zinc-500"
          >
            Assessment
          </Typography>
          <Typography as="h1" variant="h1" color="black" weight="semibold">
            White-labelling readiness assessment
          </Typography>
          <Typography as="p" variant="body" color="black" className="text-zinc-600">
            Know what will break before it breaks. Identify the architectural
            and operational risks of white-labelling before you commit.
          </Typography>
          <div className="flex flex-wrap items-center gap-4">
            <Button as="a" href="/contact" variant="contained" color="black">
              Request an assessment
            </Button>
            <Button as="a" href="/contact" variant="outlined" color="black">
              Send me a sample report →
            </Button>
          </div>
        </div>
        <Card tone="black" padding="lg">
          <Typography
            as="p"
            variant="caption"
            color="white"
            weight="semibold"
            className="tracking-[0.28em] text-zinc-400"
          >
            The trap
          </Typography>
          <div className="mt-6 space-y-4">
            <Typography as="p" variant="small" color="white" className="text-zinc-300">
              Teams assume white-labelling is configurable UX. The reality is a
              change to your data model, auth boundaries, and support surface.
            </Typography>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <Typography as="span" variant="small" color="white" className="text-zinc-300">
                  Configuration sprawl
                </Typography>
              </li>
              <li>
                <Typography as="span" variant="small" color="white" className="text-zinc-300">
                  Feature divergence
                </Typography>
              </li>
              <li>
                <Typography as="span" variant="small" color="white" className="text-zinc-300">
                  Auth and tenant boundary drift
                </Typography>
              </li>
              <li>
                <Typography as="span" variant="small" color="white" className="text-zinc-300">
                  Debugging and support complexity
                </Typography>
              </li>
            </ul>
          </div>
        </Card>
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        <Card tone="black" padding="md" className="rounded-2xl">
          <Typography as="h2" variant="h4" color="white" weight="semibold">
            Assessment outputs
          </Typography>
          <ul className="mt-4 space-y-3">
            <li>
              <Typography as="span" variant="small" color="white" className="text-zinc-300">
                Tenant boundary decisions and trade-offs.
              </Typography>
            </li>
            <li>
              <Typography as="span" variant="small" color="white" className="text-zinc-300">
                Risk hotspots with mitigation strategies.
              </Typography>
            </li>
            <li>
              <Typography as="span" variant="small" color="white" className="text-zinc-300">
                Sequencing plan and proof milestones.
              </Typography>
            </li>
            <li>
              <Typography as="span" variant="small" color="white" className="text-zinc-300">
                “Don’t do this” list for anti-patterns.
              </Typography>
            </li>
          </ul>
        </Card>
        <Card tone="black" padding="md" className="rounded-2xl">
          <Typography as="h2" variant="h4" color="white" weight="semibold">
            Example sections
          </Typography>
          <ul className="mt-4 space-y-3">
            <li>
              <Typography as="span" variant="small" color="white" className="text-zinc-300">
                Sample risk statements and impact grading.
              </Typography>
            </li>
            <li>
              <Typography as="span" variant="small" color="white" className="text-zinc-300">
                Plan headings and phase sequencing.
              </Typography>
            </li>
            <li>
              <Typography as="span" variant="small" color="white" className="text-zinc-300">
                Decision matrix for tenant separation.
              </Typography>
            </li>
          </ul>
        </Card>
      </section>

      <CallToAction
        title="Request the assessment"
        description="Get a clear picture of what will break, what will slow you down, and what to do first."
        href="/contact"
        buttonLabel="Request an assessment"
        tone="black"
      />
    </div>
  );
}
