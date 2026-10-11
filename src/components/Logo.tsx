import Image from "next/image";

type LogoProps = {
  /** Approximate render height in px (width scales by 775/696 ≈ 1.11). */
  size?: number;
  className?: string;
  priority?: boolean;
};

/**
 * HopeCare Global Inc — official brand logo.
 * Uses the stable original logo.
 */
export function Logo({
  size = 56,
  className = "",
  priority = false,
}: LogoProps) {
  // Restoring usage of the original stable asset
  const src = "/logo-clean.png";
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
