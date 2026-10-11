import Image from "next/image";

type LogoProps = {
  /** Approximate render height in px (width scales by 775/696 ≈ 1.11). */
  size?: number;
  className?: string;
  priority?: boolean;
};

/**
 * HopeCare Global Inc — official brand logo.
 * Reverted to use the previous known-good asset while I resolve the upload.
 */
export function Logo({
  size = 56,
  className = "",
  priority = false,
}: LogoProps) {
  const src = "/logo-clean.png";
  const width = Math.round(size * 1.11);
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
      <span className="text-[0.65rem] font-bold text-navy tracking-widest mt-0.5 uppercase">
        GLOBAL INC.
      </span>
    </div>
  );
}
