import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950 text-zinc-100`}
      >
        <div className="min-h-screen">
          <header className="sticky top-0 z-20 border-b border-white/10 bg-zinc-950/80 backdrop-blur">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
              <a href="/" className="text-base font-semibold tracking-tight text-white">
                paddy.systems
              </a>
              <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-400 md:flex">
                <a href="/white-labelling-readiness" className="hover:text-white">
                  Product
                </a>
                <a href="/writing" className="hover:text-white">
                  Writing
                </a>
                <a href="/contact" className="hover:text-white">
                  Contact
                </a>
              </nav>
              <div className="flex items-center gap-3">
                <a
                  href="/contact"
                  className="rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white transition hover:border-white"
                >
                  Request an assessment
                </a>
              </div>
            </div>
          </header>
          <main className="mx-auto w-full max-w-6xl px-6 py-16">
            {children}
          </main>
          <footer className="border-t border-white/10 bg-zinc-950">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-zinc-400 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="font-medium text-white">paddy.systems</p>
                <p>Change-readiness assessments for high-risk product change.</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="/white-labelling-readiness" className="hover:text-white">
                  White-labelling readiness
                </a>
                <a href="/writing" className="hover:text-white">
                  Writing
                </a>
                <a href="/contact" className="hover:text-white">
                  Contact
                </a>
                <a href="/privacy" className="hover:text-white">
                  Privacy
                </a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
