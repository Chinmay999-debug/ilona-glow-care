import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/919876543210?text=Hi%20Ilona%20Clinic%2C%20I%27d%20like%20to%20book%20a%20consultation.";

export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Ilona Clinic on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[color:var(--whatsapp)] text-white pl-4 pr-5 py-3 text-sm font-semibold shadow-[0_12px_30px_-8px_oklch(0.62_0.17_145/0.6)] hover:opacity-95 transition-opacity"
    >
      <span className="relative grid place-items-center size-7 rounded-full bg-white/15">
        <span className="absolute inset-0 rounded-full bg-white/30 animate-ping opacity-60" />
        <MessageCircle className="size-4 relative" />
      </span>
      <span className="hidden sm:inline">Chat with us</span>
    </a>
  );
}