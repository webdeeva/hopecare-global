import { Mic } from "lucide-react";

export function PodcastCard({ title, date, duration, audioUrl }: { title: string; date: string; duration: string; audioUrl: string }) {
  return (
    <div className="border border-navy/10 rounded-lg p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-teal-light p-3 rounded-full text-teal-deep">
          <Mic className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-sm text-ink-soft">{date} • {duration}</p>
        </div>
      </div>
      <audio controls className="w-full">
        <source src={audioUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
