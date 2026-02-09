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

export default function V2Home() {
  return (
    <div className="flex flex-col gap-20">
      <section className="rounded-[32px] border border-zinc-900 bg-zinc-950 px-8 py-14 text-zinc-50 md:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-6">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-400">
              Paddy Systems · Change-readiness
            </p>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              A calm, defensible plan for high-stakes product change.
            </h1>
            <p className="text-lg text-zinc-300">
              We translate “We want to do X, but don’t know how” into a clear,
              sequenced assessment that exposes risks before they ship.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/contact"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-100"
              >
                Request an assessment
              </a>
              <a
                href="/white-labelling-readiness"
                className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/70"
              >
                White-labelling readiness
              </a>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-400">
              Snapshot
            </p>
            <div className="mt-6 grid gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="grid gap-1">
                  <p className="text-sm text-zinc-400">{stat.label}</p>
                  <p className="text-2xl font-semibold text-white">
                    {stat.value}
                  </p>
                  <p className="text-sm text-zinc-400">{stat.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold text-zinc-900">
            Why teams call us
          </h2>
          <p className="text-zinc-600">
            White-labelling looks cosmetic but it’s structural. Most teams
            discover the risk too late: config sprawl, feature divergence,
            boundary drift, and support drag.
          </p>
          <div className="grid gap-4 rounded-3xl border border-zinc-200 bg-white p-6">
            <p className="text-sm font-semibold text-zinc-900">Common signals</p>
            <ul className="space-y-3 text-sm text-zinc-600">
              <li>“We can’t agree on tenant boundaries.”</li>
              <li>“Support is already struggling with divergence.”</li>
              <li>“Leadership wants a plan we can defend.”</li>
            </ul>
          </div>
        </div>
        <div className="rounded-3xl border border-zinc-200 bg-white p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Outputs
          </p>
          <ul className="mt-6 space-y-4 text-sm text-zinc-700">
            {outputs.map((output) => (
              <li key={output} className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-zinc-900" />
                {output}
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
              className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Step {index + 1}
              </p>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900">
                {step.title}
              </h3>
              <p className="mt-3 text-sm text-zinc-600">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-zinc-200 bg-zinc-900 p-10 text-white">
          <h2 className="text-2xl font-semibold">
            White-labelling readiness assessment
          </h2>
          <p className="mt-4 text-zinc-200">
            Know what will break before it breaks. Identify risk hotspots and
            sequencing decisions that keep your programme safe.
          </p>
          <a
            href="/white-labelling-readiness"
            className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100"
          >
            Explore the assessment
          </a>
        </div>
        <div className="rounded-3xl border border-zinc-200 bg-white p-10">
          <h2 className="text-2xl font-semibold text-zinc-900">FAQ</h2>
          <div className="mt-6 space-y-5 text-sm text-zinc-600">
            <div>
              <p className="font-semibold text-zinc-900">
                Is this consulting?
              </p>
              <p className="mt-2">
                It’s a productised assessment with defined outputs and a clear
                timeline.
              </p>
            </div>
            <div>
              <p className="font-semibold text-zinc-900">Who is it for?</p>
              <p className="mt-2">
                Engineering leaders planning a high-risk platform shift.
              </p>
            </div>
            <div>
              <p className="font-semibold text-zinc-900">Timeline?</p>
              <p className="mt-2">Typically 1–2 weeks end to end.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-zinc-200 bg-white p-10 text-center">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Ready to de-risk your next change?
        </h2>
        <p className="mt-3 text-zinc-600">
          Request an assessment and get a plan you can defend.
        </p>
        <a
          href="/contact"
          className="mt-6 inline-flex rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
        >
          Request an assessment
        </a>
      </section>
    </div>
  );
}
