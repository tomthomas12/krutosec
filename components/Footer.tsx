import Link from "next/link";
import { Linkedin, Twitter, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-panelLine bg-panel text-mist">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-footer.svg" alt="Krutosec" width={180} height={60} className="h-10 w-auto" />
            </Link>
            <p className="mt-3 max-w-[220px] text-sm text-mist/80">
              Secure. Educate. Empower. Offensive security and secure development for teams that can&apos;t afford to guess.
            </p>
          </div>

          <div>
            <h4 className="trace-eyebrow text-teal-light">Company</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link href="/about" className="hover:text-sand">About</Link></li>
              <li><Link href="/blog" className="hover:text-sand">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-sand">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-sand">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="trace-eyebrow text-teal-light">Services</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link href="/services" className="hover:text-sand">Penetration Testing</Link></li>
              <li><Link href="/services" className="hover:text-sand">Secure Development</Link></li>
              <li><Link href="/packages" className="hover:text-sand">Pentest Packages</Link></li>
              <li><Link href="/services" className="hover:text-sand">LLM / AI Security</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="trace-eyebrow text-teal-light">Legal</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link href="/contact" className="hover:text-sand">Privacy Policy</Link></li>
              <li><Link href="/contact" className="hover:text-sand">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="trace-divider my-10" />

        <div className="flex flex-col items-center justify-between gap-4 text-xs text-mist/70 md:flex-row">
          <p>© {new Date().getFullYear()} Krutosec. All rights reserved.</p>
          <div className="flex gap-4">
            <Linkedin size={16} className="transition-colors hover:text-teal-light" />
            <Twitter size={16} className="transition-colors hover:text-teal-light" />
            <Github size={16} className="transition-colors hover:text-teal-light" />
          </div>
        </div>
      </div>
    </footer>
  );
}
