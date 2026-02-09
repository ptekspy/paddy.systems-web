export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="flex flex-col gap-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Change-readiness assessments
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">
            Plan complex change without discovering risk in production.
          </h1>
          <p className="text-lg text-zinc-600">
            Readiness assessments that surface hidden constraints, reveal risk,
            and produce a sequenced plan for high-stakes product change.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/contact"
              className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
            >
              Request an assessment
            </a>
            <a
              href="/white-labelling-readiness"
              className="text-sm font-semibold text-zinc-700 hover:text-zinc-900"
            >
              Read the white-labelling playbook →
            </a>
          </div>
        </div>
        <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            What this is
          </p>
          <ul className="mt-6 space-y-4 text-zinc-700">
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-zinc-900" />
              Readiness assessment for high-risk product change.
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-zinc-900" />
              Explicit risk surfacing with named constraints and assumptions.
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-zinc-900" />
              Sequenced plan with guardrails and a go/no-go decision.
            </li>
          </ul>
        </div>
      </section>

      <section className="grid gap-8 md:grid-cols-3">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-zinc-900">Who it’s for</h2>
          <ul className="mt-4 space-y-3 text-sm text-zinc-600">
            <li>Teams about to take a big product bet.</li>
            <li>Orgs moving to white-labelling or multi-tenant architecture.</li>
            <li>Leaders who need a defensible, realistic plan.</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-zinc-900">What you get</h2>
          <ul className="mt-4 space-y-3 text-sm text-zinc-600">
            <li>Readiness report (PDF/HTML).</li>
            <li>Risk register with severity and mitigation.</li>
            <li>Phased sequence and decision log.</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-zinc-900">How it works</h2>
          <ol className="mt-4 space-y-3 text-sm text-zinc-600">
            <li>Capture system reality and constraints.</li>
            <li>Surface risks + dependencies.</li>
            <li>Deliver a plan and go/delay decision.</li>
          </ol>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-zinc-200 bg-white p-8">
          <h2 className="text-2xl font-semibold text-zinc-900">Why this exists</h2>
          <p className="mt-4 text-zinc-600">
            White-labelling looks cosmetic, but it’s structural. Teams discover
            late that they’ve created forks, coupling, and operational drag.
            This assessment makes those risks visible before they become
            expensive.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-zinc-600">
            <span className="rounded-full border border-zinc-200 px-3 py-1">
              Senior engineer with a focus on production change
            </span>
            <span className="rounded-full border border-zinc-200 px-3 py-1">
              Systems planning for complex product shifts
            </span>
          </div>
        </div>
        <div className="rounded-3xl border border-zinc-200 bg-zinc-900 p-8 text-white">
          <h3 className="text-xl font-semibold">Frequently asked</h3>
          <div className="mt-6 space-y-5 text-sm text-zinc-200">
            <div>
              <p className="font-semibold text-white">Is this consulting?</p>
              <p className="mt-2">
                It’s a productised assessment with clear outputs and a defined
                timeline.
              </p>
            </div>
            <div>
              <p className="font-semibold text-white">What size org?</p>
              <p className="mt-2">Mid to large teams planning a major shift.</p>
            </div>
            <div>
              <p className="font-semibold text-white">Timeline?</p>
              <p className="mt-2">Typically 1–2 weeks for assessment delivery.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-zinc-200 bg-white p-10 text-center">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Ready to de-risk a major change?
        </h2>
        <p className="mt-3 text-zinc-600">
          Request an assessment and get a clear, sequenced plan.
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
