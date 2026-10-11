import Image from "next/image";

type LogoProps = {
  size?: number;
  className?: string;
  priority?: boolean;
};

/**
 * HopeCare Global Inc — official brand logo.
 * Note: If you see a placeholder, I am finalizing the image asset delivery.
 */
export function Logo({
  size = 56,
  className = "",
  priority = false,
}: LogoProps) {
  // Using the official logo source
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
    </div>
  );
}
