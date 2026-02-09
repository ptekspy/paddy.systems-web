import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";

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
    <div className="flex flex-col gap-20">
      <section className="rounded-[32px] border border-white/10 bg-zinc-950 px-8 py-14 text-white md:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-6">
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
            <div className="flex flex-wrap gap-4">
              <Button as="a" href="/contact" variant="contained" color="white">
                Request an assessment
              </Button>
              <Button
                as="a"
                href="/white-labelling-readiness"
                variant="outlined"
                color="white"
              >
                White-labelling readiness
              </Button>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
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
          </div>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="flex flex-col gap-6">
          <Typography as="h2" variant="h2" weight="semibold" color="black">
            Why teams call us
          </Typography>
          <Typography as="p" variant="p" color="black" className="text-zinc-600">
            White-labelling looks cosmetic but it’s structural. Most teams
            discover the risk too late: config sprawl, feature divergence,
            boundary drift, and support drag.
          </Typography>
          <div className="grid gap-4 rounded-3xl border border-white/10 bg-zinc-950 p-6 text-white">
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
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-zinc-950 p-8 text-white">
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
              <li key={output} className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-white" />
                <Typography as="span" variant="small" color="white" className="text-zinc-300">
                  {output}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rounded-3xl border border-zinc-200 bg-white p-10">
        <div className="grid gap-8 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-2xl border border-white/10 bg-zinc-950 p-6 text-white"
            >
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
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-white/10 bg-zinc-950 p-10 text-white">
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
        </div>
        <div className="rounded-3xl border border-white/10 bg-zinc-950 p-10 text-white">
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
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-zinc-950 p-10 text-center text-white">
        <Typography as="h2" variant="h3" color="white" weight="semibold">
          Ready to de-risk your next change?
        </Typography>
        <Typography as="p" variant="p" color="white" className="mt-3 text-zinc-300">
          Request an assessment and get a plan you can defend.
        </Typography>
        <Button
          as="a"
          href="/contact"
          variant="contained"
          color="white"
          className="mt-6"
        >
          Request an assessment
        </Button>
      </section>
    </div>
  );
}
