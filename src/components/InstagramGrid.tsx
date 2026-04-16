import Image from "next/image";
import { site } from "@/lib/site";
import { INSTAGRAM_POSTS } from "@/lib/images";

const posts = INSTAGRAM_POSTS.map((src, i) => ({
  src,
  alt: `Moment from Bhumi Lovina Residence — post ${i + 1}`,
}));

export default function InstagramGrid() {
  return (
    <section className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="px-6 md:px-12 mb-12 md:mb-16 text-center">
        <span className="font-sans tracking-[0.4em] uppercase text-xs text-secondary mb-4 block">
          #BhumiLovina
        </span>
        <h2 className="font-serif text-3xl md:text-5xl font-light mb-4">
          Moments from the Sanctuary
        </h2>
        <a
          href={`https://instagram.com/${site.contact.instagram}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 font-sans tracking-widest uppercase text-xs text-secondary border-b border-secondary/30 pb-2 hover:border-secondary transition-all"
        >
          Follow our journey
        </a>
      </div>
      <div className="flex gap-4 overflow-x-auto no-scrollbar px-6 md:px-12">
        {posts.map((p, i) => (
          <div
            key={p.src}
            className="flex-shrink-0 w-60 md:w-72 aspect-square rounded-lg overflow-hidden bg-surface-container"
          >
            <Image
              src={p.src}
              alt={p.alt}
              width={400}
              height={400}
              loading="lazy"
              sizes="(max-width: 768px) 60vw, 288px"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              unoptimized={i === -1}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
