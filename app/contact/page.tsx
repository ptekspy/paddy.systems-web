import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-12">
      <section className="flex flex-col gap-4">
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
      </section>

      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <form
          className="rounded-3xl border border-white/10 bg-zinc-950 p-8 text-white"
          action="mailto:hello@paddy.systems"
          method="post"
          encType="text/plain"
        >
          <div className="grid gap-6">
            <div className="grid gap-2">
              <label className="text-sm font-semibold text-white" htmlFor="name">
                <Typography as="span" variant="small" color="white" weight="semibold">
                  Name
                </Typography>
              </label>
              <input
                id="name"
                name="name"
                required
                className="rounded-2xl border border-white/10 bg-zinc-900 px-4 py-3 text-sm text-white placeholder:text-zinc-500"
                placeholder="Your name"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-semibold text-white" htmlFor="email">
                <Typography as="span" variant="small" color="white" weight="semibold">
                  Work email
                </Typography>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="rounded-2xl border border-white/10 bg-zinc-900 px-4 py-3 text-sm text-white placeholder:text-zinc-500"
                placeholder="you@company.com"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-semibold text-white" htmlFor="details">
                <Typography as="span" variant="small" color="white" weight="semibold">
                  Change summary
                </Typography>
              </label>
              <textarea
                id="details"
                name="details"
                required
                rows={5}
                className="rounded-2xl border border-white/10 bg-zinc-900 px-4 py-3 text-sm text-white placeholder:text-zinc-500"
                placeholder="What are you planning to change? What deadline or risk worries you?"
              />
            </div>
            <Button type="submit" variant="contained" color="white">
              Send request
            </Button>
          </div>
        </form>

        <div className="flex flex-col gap-6">
          <div className="rounded-3xl border border-white/10 bg-zinc-950 p-6 text-white">
            <Typography as="h2" variant="h5" color="white" weight="semibold">
              What to expect
            </Typography>
            <ul className="mt-4 space-y-3">
              <li>
                <Typography as="span" variant="small" color="white" className="text-zinc-300">
                  Initial response within two business days.
                </Typography>
              </li>
              <li>
                <Typography as="span" variant="small" color="white" className="text-zinc-300">
                  Clarifying call if the change is complex.
                </Typography>
              </li>
              <li>
                <Typography as="span" variant="small" color="white" className="text-zinc-300">
                  Assessment delivered in 1–2 weeks.
                </Typography>
              </li>
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-zinc-950 p-6 text-white">
            <Typography as="h2" variant="h5" color="white" weight="semibold">
              Prefer email?
            </Typography>
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
          </div>
        </div>
      </section>
    </div>
  );
}
