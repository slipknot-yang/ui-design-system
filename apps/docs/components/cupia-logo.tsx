import Image from "next/image";
import { cn } from "@workspace/ui/lib/utils";
import cupiaEmblem from "@/public/cupia-emblem.png";
import cupiaLogo from "@/public/cupia-logo.png";
import cupiaLogoWhite from "@/public/cupia-logo-white.png";
import cupiaLogoVertical from "@/public/cupia-logo-vertical.png";

interface CupiaLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

/**
 * CUPIA emblem logo (circular seal) for compact placements like sidebar icon mode.
 */
export function CupiaLogo({ className, size = "md" }: CupiaLogoProps) {
  const sizes = {
    sm: 24,
    md: 32,
    lg: 40,
  };

  const px = sizes[size];

  return (
    <Image
      src={cupiaEmblem}
      alt="CUPIA"
      width={px}
      height={px}
      className={cn("shrink-0 object-contain", className)}
      priority
    />
  );
}

/**
 * Full CUPIA wordmark + subtitle for sidebar header (expanded state).
 * Switches to white version in dark mode.
 */
export function CupiaLogoFull({ className }: { className?: string }) {
  return (
    <>
      <Image
        src={cupiaLogo}
        alt="CUPIA"
        width={100}
        height={30}
        className={cn("h-6 w-auto object-contain dark:hidden", className)}
        priority
      />
      <Image
        src={cupiaLogoWhite}
        alt="CUPIA"
        width={100}
        height={30}
        className={cn("h-6 w-auto object-contain hidden dark:block", className)}
        priority
      />
    </>
  );
}

/**
 * Large CUPIA vertical logo for homepage hero section.
 * CUPIA wordmark with "Customs Uni-Pass International Agency" subtitle.
 */
export function CupiaLogoHero({ className }: { className?: string }) {
  return (
    <Image
      src={cupiaLogoVertical}
      alt="CUPIA - Customs Uni-Pass International Agency"
      width={400}
      height={200}
      className={cn("object-contain", className)}
      priority
    />
  );
}
