import Image from "next/image";

type LogoProps = {
  /** Approximate render height in px (width scales by 775/696 ≈ 1.11). */
  size?: number;
  className?: string;
  priority?: boolean;
};

/**
 * HopeCare Global Inc — official brand logo.
 * Updated to use the version that includes "GLOBAL INC." text natively.
 */
export function Logo({
  size = 56,
  className = "",
  priority = false,
}: LogoProps) {
  const src = "/logo-new.png";
  const width = Math.round(size * 1.5); // Adjust aspect ratio for new logo
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <Image
        src={src}
        alt="HopeCare Global"
        width={width}
        height={size}
        priority={priority}
        className="block select-none"
      />
    </div>
  );
}
