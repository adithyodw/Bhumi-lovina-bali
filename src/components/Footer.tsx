import Link from "next/link";
import { site, whatsappLink } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-primary text-surface pt-24 pb-32 md:pb-12 px-6 md:px-12 mt-24">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="font-serif text-2xl md:text-3xl tracking-[0.2em] uppercase mb-6">
            Bhumi Lovina
          </div>
          <p className="font-serif font-light tracking-wide text-surface/60 max-w-sm mb-10 leading-relaxed">
            An enclave of tranquility in the quiet north of Bali, dedicated to
            the art of slowing down.
          </p>
          <address className="not-italic text-sm text-surface/70 leading-relaxed space-y-1">
            <div>{site.location.address}</div>
            <div>
              {site.location.region}, {site.location.country}
            </div>
            <div className="pt-3">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary-fixed-dim transition-colors"
              >
                WhatsApp {site.contact.whatsappDisplay}
              </a>
            </div>
            <div>
              <a
                href={`https://instagram.com/${site.contact.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary-fixed-dim transition-colors"
              >
                @{site.contact.instagram}
              </a>
            </div>
          </address>
        </div>

        <div className="flex flex-col gap-4">
          <span className="font-sans tracking-widest uppercase text-[10px] text-surface/40 mb-2">
            Explore
          </span>
          <Link href="/villas" className="font-serif font-light text-surface/70 hover:text-secondary-fixed-dim transition-colors">
            Villas
          </Link>
          <Link href="/experiences" className="font-serif font-light text-surface/70 hover:text-secondary-fixed-dim transition-colors">
            Experiences
          </Link>
          <Link href="/book" className="font-serif font-light text-surface/70 hover:text-secondary-fixed-dim transition-colors">
            Book Your Stay
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          <span className="font-sans tracking-widest uppercase text-[10px] text-surface/40 mb-2">
            Reserve
          </span>
          <a href={site.ota.traveloka} target="_blank" rel="noopener noreferrer" className="font-serif font-light text-surface/70 hover:text-secondary-fixed-dim transition-colors">
            Traveloka
          </a>
          <a href={site.ota.booking} target="_blank" rel="noopener noreferrer" className="font-serif font-light text-surface/70 hover:text-secondary-fixed-dim transition-colors">
            Booking.com
          </a>
          <a href={site.ota.tiket} target="_blank" rel="noopener noreferrer" className="font-serif font-light text-surface/70 hover:text-secondary-fixed-dim transition-colors">
            tiket.com
          </a>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto border-t border-surface/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-sans tracking-widest uppercase text-[10px] text-surface/40">
          © {new Date().getFullYear()} Bhumi Lovina Residence. All rights reserved.
        </p>
        <p className="font-sans tracking-widest uppercase text-[10px] text-surface/40">
          Crafted in Bali
        </p>
      </div>
    </footer>
  );
}
