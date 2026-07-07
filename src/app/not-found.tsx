import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <span className="font-sans tracking-[0.4em] uppercase text-xs text-secondary mb-6 block">
        404
      </span>
      <h1 className="font-serif text-4xl md:text-6xl font-light mb-6 text-balance">
        The path ends here.
      </h1>
      <p className="text-on-surface-variant font-light max-w-md mb-10 text-pretty">
        The page you were looking for has moved, or perhaps never was.
      </p>
      <Link
        href="/"
        className="bg-primary text-on-primary px-10 py-4 rounded-md font-sans tracking-widest uppercase text-xs hover:bg-primary-container transition-all"
      >
        Return to the Estate
      </Link>
    </section>
  );
}
