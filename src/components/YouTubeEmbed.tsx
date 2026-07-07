"use client";

import { useState } from "react";

type Props = {
  id: string;
  title?: string;
};

/**
 * Lazy-load the YouTube iframe. The poster image is fetched from YouTube's
 * static hosting; the iframe is only mounted after the user clicks play,
 * saving ~500kb and preventing third-party scripts from blocking the LCP.
 */
export default function YouTubeEmbed({ id, title = "Video" }: Props) {
  const [active, setActive] = useState(false);
  const poster = `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-primary shadow-botanical">
      {active ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          className="absolute inset-0 w-full h-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          aria-label={`Play ${title}`}
          className="group absolute inset-0 w-full h-full"
        >
          <img
            src={poster}
            alt=""
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <span className="absolute inset-0 bg-primary/30 group-hover:bg-primary/40 transition-colors" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex items-center justify-center w-20 h-20 rounded-full bg-surface/90 backdrop-blur-sm shadow-botanical group-hover:scale-105 transition-transform">
              <svg
                viewBox="0 0 24 24"
                aria-hidden
                className="w-8 h-8 ml-1 text-primary"
              >
                <path fill="currentColor" d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
