import { useState } from "react";
import { X, Gift } from "lucide-react";

const AnnouncementBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-[4.5rem] md:top-[5rem] left-0 right-0 z-40 bg-accent text-accent-foreground shadow-lg border-y border-accent/30">
      <div className="container mx-auto px-4 py-2.5">
        <div className="flex items-center justify-center gap-2.5 text-xs md:text-sm font-semibold">
          <Gift className="w-4 h-4 md:w-4.5 md:h-4.5 flex-shrink-0 animate-bounce" strokeWidth={2.5} />
          <span className="text-center">
            <span className="font-extrabold uppercase tracking-wide">Limited Time Offer:</span> Get your first 30 days FREE!
          </span>
          <button
            onClick={handleDismiss}
            className="ml-auto p-1 hover:bg-accent-foreground/20 rounded-full transition-colors"
            aria-label="Dismiss banner"
          >
            <X className="w-4 h-4 md:w-4.5 md:h-4.5" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBanner;

