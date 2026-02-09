import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Button } from "@/components/ui/button";
import { Flex } from "@/components/ui/flex";
import { Typography } from "@/components/ui/typography";
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
  metadataBase: new URL("https://paddy.systems"),
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-zinc-900`}
      >
        <div className="min-h-screen">
          <header className="sticky top-0 z-20 border-b border-zinc-200/70 bg-white/80 backdrop-blur">
            <Flex
              align="center"
              justify="between"
              className="mx-auto w-full max-w-6xl px-6 py-4"
            >
              <a href="/" className="tracking-tight text-zinc-900">
                <Typography as="span" variant="h6" weight="semibold">
                  paddy.systems
                </Typography>
              </a>
              <Flex
                as="nav"
                display={{ base: "hidden", md: "flex" }}
                align="center"
                gap="lg"
                className="text-sm font-medium text-zinc-600"
              >
                <a href="/white-labelling-readiness" className="hover:text-zinc-900">
                  <Typography as="span" variant="small" weight="medium">
                    Product
                  </Typography>
                </a>
                <a href="/writing" className="hover:text-zinc-900">
                  <Typography as="span" variant="small" weight="medium">
                    Writing
                  </Typography>
                </a>
                <a href="/contact" className="hover:text-zinc-900">
                  <Typography as="span" variant="small" weight="medium">
                    Contact
                  </Typography>
                </a>
              </Flex>
              <Flex align="center" gap="base">
                <Button
                  as="a"
                  href="/contact"
                  variant="outlined"
                  color="black"
                  size="sm"
                >
                  Request an assessment
                </Button>
              </Flex>
            </Flex>
          </header>
          <main className="mx-auto w-full max-w-6xl px-6 py-16">
            {children}
          </main>
          <footer className="border-t border-zinc-200/70 bg-white">
            <Flex
              direction={{ base: "column", md: "row" }}
              align={{ base: "stretch", md: "center" }}
              justify={{ base: "start", md: "between" }}
              gap="lg"
              className="mx-auto w-full max-w-6xl px-6 py-10 text-sm text-zinc-600"
            >
              <div>
                <Typography as="p" variant="small" weight="semibold" color="black">
                  paddy.systems
                </Typography>
                <Typography as="p" variant="small">
                  Change-readiness assessments for high-risk product change.
                </Typography>
              </div>
              <Flex wrap="wrap" gap="md">
                <a href="/white-labelling-readiness" className="hover:text-zinc-900">
                  <Typography as="span" variant="small">
                    White-labelling readiness
                  </Typography>
                </a>
                <a href="/writing" className="hover:text-zinc-900">
                  <Typography as="span" variant="small">
                    Writing
                  </Typography>
                </a>
                <a href="/contact" className="hover:text-zinc-900">
                  <Typography as="span" variant="small">
                    Contact
                  </Typography>
                </a>
                <a href="/privacy" className="hover:text-zinc-900">
                  <Typography as="span" variant="small">
                    Privacy
                  </Typography>
                </a>
              </Flex>
            </Flex>
          </footer>
        </div>
      </body>
    </html>
  );
}
