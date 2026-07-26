"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ShieldCheck } from "lucide-react";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/packages", label: "PT Packages" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-sand/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Image src="/logo.png" alt="Krutosec" width={36} height={36} className="rounded-sm" priority />
          <span className="font-display text-lg font-medium tracking-tight text-ink">
            Krutosec
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-mono text-[13px] uppercase tracking-wider text-ink/70 transition-colors hover:text-teal"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden items-center gap-2 rounded-sm bg-teal px-4 py-2 font-mono text-[13px] uppercase tracking-wider text-sand transition-colors hover:bg-teal-dark md:flex"
        >
          <ShieldCheck size={15} />
          Get Assessed
        </Link>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="text-ink md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-ink/10 bg-sand px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-mono text-sm uppercase tracking-wider text-ink/80"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 inline-block rounded-sm bg-teal px-4 py-2.5 text-center font-mono text-sm uppercase tracking-wider text-sand"
              onClick={() => setOpen(false)}
            >
              Get Assessed
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
