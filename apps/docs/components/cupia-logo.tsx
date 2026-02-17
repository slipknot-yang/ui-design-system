import { cn } from "@workspace/ui/lib/utils";

interface CupiaLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

/**
 * CUPIA icon logo - circular badge with "C" on brand blue background.
 * Used in sidebar header and other compact icon placements.
 */
export function CupiaLogo({ className, size = "md" }: CupiaLogoProps) {
  const sizes = {
    sm: "h-6 w-6",
    md: "h-8 w-8",
    lg: "h-10 w-10",
  };

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-md bg-[#1B6DB5] text-white font-bold",
        sizes[size],
        className,
      )}
    >
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full p-1"
      >
        <text
          x="16"
          y="22"
          textAnchor="middle"
          fill="currentColor"
          fontSize="16"
          fontWeight="700"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          C
        </text>
      </svg>
    </div>
  );
}

/**
 * Full CUPIA wordmark logo matching the official branding:
 * Blue "CUP" + "A" with orange dot on the lowercase "i".
 */
export function CupiaLogoFull({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-6", className)}
      aria-label="CUPIA"
    >
      {/* C */}
      <text
        x="0"
        y="22"
        fill="#1B6DB5"
        fontSize="24"
        fontWeight="700"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        C
      </text>
      {/* U */}
      <text
        x="17"
        y="22"
        fill="#1B6DB5"
        fontSize="24"
        fontWeight="700"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        U
      </text>
      {/* P */}
      <text
        x="37"
        y="22"
        fill="#1B6DB5"
        fontSize="24"
        fontWeight="700"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        P
      </text>
      {/* i (stem only, no dot) */}
      <rect x="55" y="10" width="4" height="12" rx="1" fill="#1B6DB5" />
      {/* i orange dot */}
      <circle cx="57" cy="5" r="3" fill="#E87A2B" />
      {/* A */}
      <text
        x="63"
        y="22"
        fill="#1B6DB5"
        fontSize="24"
        fontWeight="700"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        A
      </text>
    </svg>
  );
}
