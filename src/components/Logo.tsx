import Image from "next/image";

type LogoProps = {
  /** Approximate render height in px (width scales by 775/696 ≈ 1.11). */
  size?: number;
  className?: string;
  priority?: boolean;
};

/**
 * HopeCare Global Inc — official brand logo.
 * Updated logo with bold, navy "GLOBAL INC."
 */
export function Logo({
  size = 56,
  className = "",
  priority = false,
}: LogoProps) {
  // New generated logo filename
  const src = "/logo-new.png";
  // Aspect ratio maintained
  const width = Math.round(size * 1.11);
  return (
    <Image
      src={src}
      alt="HopeCare Global Inc"
      width={width}
      height={size}
      priority={priority}
      className={`block select-none ${className}`}
    />
  );
}
