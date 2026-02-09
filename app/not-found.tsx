import { Button } from "@/components/ui/button";
import { Flex } from "@/components/ui/flex";
import { Typography } from "@/components/ui/typography";

export default function NotFound() {
  return (
    <Flex direction="column" gap="lg" className="mx-auto max-w-2xl py-16">
      <Typography as="h1" variant="h2" color="black" weight="semibold">
        Page not found
      </Typography>
      <Typography as="p" variant="p" color="black" className="text-zinc-600">
        The page you’re looking for doesn’t exist or has moved.
      </Typography>
      <Button as="a" href="/" variant="contained" color="black">
        Back to home
      </Button>
    </Flex>
  );
}
