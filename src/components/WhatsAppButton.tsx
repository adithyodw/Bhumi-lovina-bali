import { whatsappLink, waMessage, site } from "@/lib/site";

/**
 * Sticky floating WhatsApp action. Visible on all devices.
 * On mobile it sits above the bottom nav; on desktop it floats bottom-right.
 */
export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink(waMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat on WhatsApp ${site.contact.whatsappDisplay}`}
      className="fixed z-[60] right-4 md:right-8 bottom-24 md:bottom-8 flex items-center gap-3 rounded-full bg-primary text-on-primary shadow-botanical pl-4 pr-5 py-3 md:pl-5 md:pr-6 md:py-4 hover:bg-primary-container transition-all duration-300 group"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-5 h-5 md:w-6 md:h-6 fill-current"
        aria-hidden
      >
        <path d="M17.5 14.4c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.2s-.8.9-1 1.1c-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.2-.7-1.7-.9-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5 4.5.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3 0-.1-.3-.3-.7-.5Zm-5.5 7.6h0c-1.7 0-3.4-.5-4.9-1.3l-.4-.2-3.6.9.9-3.5-.2-.4A9.4 9.4 0 0 1 2.6 12c0-5.2 4.2-9.5 9.4-9.5 2.5 0 4.9 1 6.7 2.8a9.4 9.4 0 0 1 2.7 6.7c0 5.2-4.2 9.4-9.4 9.4Zm8-17.5A11.2 11.2 0 0 0 12 1C5.9 1 1 5.9 1 12c0 2 .5 3.9 1.5 5.6L1 23l5.6-1.5A11 11 0 0 0 12 23c6.1 0 11-4.9 11-11 0-2.9-1.1-5.7-3-7.5Z" />
      </svg>
      <span className="font-sans tracking-widest uppercase text-[10px] md:text-xs">
        WhatsApp
      </span>
    </a>
  );
}
