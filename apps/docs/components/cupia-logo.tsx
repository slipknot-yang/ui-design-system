import { cn } from "@workspace/ui/lib/utils";

interface CupiaLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function CupiaLogo({ className, size = "md" }: CupiaLogoProps) {
  const sizes = {
    sm: "h-6 w-6",
    md: "h-8 w-8",
    lg: "h-10 w-10",
  };

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-md bg-[#004B93] text-white font-bold",
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
          y="21"
          textAnchor="middle"
          fill="currentColor"
          fontSize="11"
          fontWeight="700"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="0.5"
        >
          C
        </text>
      </svg>
    </div>
  );
}

export function CupiaLogoFull({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 84 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-5", className)}
    >
      <text
        x="0"
        y="18"
        fill="currentColor"
        fontSize="20"
        fontWeight="700"
        fontFamily="system-ui, -apple-system, sans-serif"
        letterSpacing="1.5"
      >
        CUPIA
      </text>
    </svg>
  );
}
