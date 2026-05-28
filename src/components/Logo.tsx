import Image from "next/image";

type LogoProps = {
  /** Approximate render height in px (width scales by 775/696 ≈ 1.11). */
  size?: number;
  className?: string;
  priority?: boolean;
  /** Use the original PNG (with atmospheric halo) instead of the trimmed mark. */
  full?: boolean;
};

/**
 * HopeCare Global Inc — official brand logo.
 *
 * /public/logo-clean.png is the source PNG trimmed of its atmospheric halo
 * for clean placement on any surface. /public/logo.png is the original.
 */
export function Logo({
  size = 56,
  className = "",
  priority = false,
  full = false,
}: LogoProps) {
  const src = full ? "/logo.png" : "/logo-clean.png";
  // Source aspect 775/696 ≈ 1.11 — slightly wider than tall.
  const width = Math.round(size * (775 / 696));
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
