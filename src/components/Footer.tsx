import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { site, whatsappLink } from "@/lib/site";
import BookingCards from "./BookingCards";

export default async function Footer() {
  const t = await getTranslations("footer");

  return (
    <footer className="bg-primary-dark text-cream">
      <div className="section-padding !pb-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <div>
              <div className="font-serif text-2xl md:text-3xl tracking-[0.12em] uppercase mb-4">
                Bhumi Lovina
              </div>
              <p className="font-light text-cream/60 max-w-md mb-8 leading-relaxed">
                {t("tagline")}
              </p>
              <address className="not-italic text-sm text-cream/70 leading-relaxed space-y-3">
                <div>{site.location.fullAddress}</div>
                <div>
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="hover:text-secondary-light transition-colors"
                  >
                    {site.contact.email}
                  </a>
                </div>
                <div>
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-secondary-light transition-colors"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.883 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp {site.contact.whatsappDisplay}
                  </a>
                </div>
                <div>
                  <a
                    href={`https://instagram.com/${site.contact.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-secondary-light transition-colors"
                  >
                    @{site.contact.instagram}
                  </a>
                </div>
              </address>
            </div>

            <div>
              <span className="section-label !text-cream/40">{t("reserve")}</span>
              <BookingCards bookLabel={t("bookNow")} variant="dark" />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-cream/10 pt-10">
            <div className="flex flex-col gap-3">
              <span className="font-sans tracking-widest uppercase text-[10px] text-cream/40">
                {t("explore")}
              </span>
              <Link href="#villa" className="font-light text-sm text-cream/70 hover:text-secondary-light transition-colors">
                {t("villa")}
              </Link>
              <Link href="#amenities" className="font-light text-sm text-cream/70 hover:text-secondary-light transition-colors">
                {t("amenities")}
              </Link>
              <Link href="#gallery" className="font-light text-sm text-cream/70 hover:text-secondary-light transition-colors">
                {t("gallery")}
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-sans tracking-widest uppercase text-[10px] text-cream/40">
                &nbsp;
              </span>
              <Link href="#location" className="font-light text-sm text-cream/70 hover:text-secondary-light transition-colors">
                {t("location")}
              </Link>
              <Link href="#reviews" className="font-light text-sm text-cream/70 hover:text-secondary-light transition-colors">
                {t("reviews")}
              </Link>
              <Link href="#faq" className="font-light text-sm text-cream/70 hover:text-secondary-light transition-colors">
                {t("faq")}
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-sans tracking-widest uppercase text-[10px] text-cream/40">
                {t("partners")}
              </span>
              <a href={site.ota.traveloka} target="_blank" rel="noopener noreferrer" className="font-light text-sm text-cream/70 hover:text-secondary-light transition-colors">
                Traveloka
              </a>
              <a href={site.ota.booking} target="_blank" rel="noopener noreferrer" className="font-light text-sm text-cream/70 hover:text-secondary-light transition-colors">
                Booking.com
              </a>
              <a href={site.ota.tiket} target="_blank" rel="noopener noreferrer" className="font-light text-sm text-cream/70 hover:text-secondary-light transition-colors">
                tiket.com
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-sans tracking-widest uppercase text-[10px] text-cream/40">
                {t("contact")}
              </span>
              <Link href="#contact" className="font-light text-sm text-cream/70 hover:text-secondary-light transition-colors">
                {t("getInTouch")}
              </Link>
              <a href={site.location.mapsShareUrl} target="_blank" rel="noopener noreferrer" className="font-light text-sm text-cream/70 hover:text-secondary-light transition-colors">
                {t("openMap")}
              </a>
            </div>
          </div>

          <div className="border-t border-cream/10 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-sans tracking-widest uppercase text-[10px] text-cream/40">
              {t("copyright", { year: new Date().getFullYear() })}
            </p>
            <p className="font-sans tracking-widest uppercase text-[10px] text-cream/40">
              {t("crafted")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
