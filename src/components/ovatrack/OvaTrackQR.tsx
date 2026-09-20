import Image from "next/image";

export function OvaTrackQR() {
  return (
    <div className="flex flex-col items-center py-10 bg-white rounded-3xl border border-gray-100 shadow-sm">
      <h3 className="text-xl font-bold text-[#17365C] mb-4">Scan to Download OvaTrack</h3>
      <div className="relative w-48 h-48">
        <Image 
          src="/ovatrack/qr-code.png" 
          alt="OvaTrack QR Code" 
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
