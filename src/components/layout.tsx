import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram, Mail, MapPin, ChevronDown } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useI18n, type Lang } from "@/lib/i18n";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function FastPubLogo() {
  return (
    <img
      src={`${import.meta.env.BASE_URL}logo.png`}
      alt="Fast Pub"
      className="h-10 w-auto object-contain md:h-12"
    />
  );
}

/* ── Language selector ── */
const LANG_LABELS: Record<Lang, string> = { en: "EN", fr: "FR", ar: "ع" };
const LANG_OPTIONS: { code: Lang; label: string }[] = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "ar", label: "العربية" },
];

function LangSelector({ mobile = false }: { mobile?: boolean }) {
  const { lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          "flex items-center gap-1 font-sans font-semibold text-sm tracking-wide uppercase transition-all hover:text-primary",
          mobile
            ? "text-foreground/80 text-base py-2 px-1"
            : "text-foreground/80 py-2"
        )}
        aria-label="Select language"
      >
        {LANG_LABELS[lang]}
        <ChevronDown
          size={12}
          className={cn("transition-transform duration-200", open && "rotate-180")}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className={cn(
              "absolute z-[100] mt-1 py-1 bg-card border border-border rounded-md shadow-xl min-w-[120px]",
              mobile ? "left-0" : "right-0"
            )}
          >
            {LANG_OPTIONS.map((opt) => (
              <button
                key={opt.code}
                onClick={() => { setLang(opt.code); setOpen(false); }}
                className={cn(
                  "w-full text-left px-4 py-2 font-sans text-sm transition-colors hover:text-primary hover:bg-secondary",
                  lang === opt.code ? "text-primary font-bold" : "text-foreground/80"
                )}
              >
                {opt.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Main Layout ── */
export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const { t, dir } = useI18n();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/portfolio", label: t.nav.portfolio },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div
      className="min-h-screen flex flex-col selection:bg-primary selection:text-white"
      dir={dir}
    >
      {/* ── HEADER ── */}
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border-border/50 py-4"
            : "bg-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group relative z-50">
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <FastPubLogo />
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-sans font-semibold text-sm tracking-wide uppercase transition-all hover:text-primary relative py-2",
                  location === link.href ? "text-primary" : "text-foreground/80"
                )}
              >
                {link.label}
                {location === link.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}

            {/* Language selector */}
            <LangSelector />

            {/* CTA — no shadow, softer presence */}
            <Link
              href="/order"
              className="ml-2 px-5 py-2 bg-primary text-primary-foreground font-bold tracking-wider uppercase rounded-sm hover:bg-primary/90 hover:scale-[1.03] active:scale-95 transition-all text-sm"
            >
              {t.nav.startOrder}
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden z-50 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* ── MOBILE MENU — drop-down from top like unfolding paper ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)", opacity: 0.6 }}
            animate={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }}
            exit={{ clipPath: "inset(0 0 100% 0)", opacity: 0.6 }}
            transition={{ duration: 0.38, ease: [0.32, 0, 0.16, 1] }}
            className="fixed inset-0 z-40 bg-background/97 backdrop-blur-2xl pt-28 px-6 flex flex-col"
            style={{ transformOrigin: "top" }}
          >
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: 0.06 + i * 0.05, duration: 0.25 }}
                >
                  <Link
                    href={link.href}
                    className="font-sans text-3xl sm:text-4xl font-extrabold tracking-[0.16em] uppercase hover:text-primary transition-colors block"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.3, duration: 0.25 }}
                className="flex justify-center pt-2"
              >
                <LangSelector mobile />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.34, duration: 0.25 }}
                className="pt-4 border-t border-border"
              >
                <Link
                  href="/order"
                  className="inline-block w-full py-4 bg-primary text-primary-foreground font-sans text-lg sm:text-xl font-extrabold tracking-[0.16em] uppercase rounded-sm active:scale-95 transition-transform"
                >
                  {t.nav.startOrder}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── MAIN ── */}
      <main className="flex-grow pt-24">{children}</main>

      {/* ── FOOTER ── */}
      <footer className="bg-card border-t border-border mt-32 relative overflow-hidden">
        <div className="absolute -bottom-20 -right-10 text-[20rem] font-display text-background opacity-50 select-none pointer-events-none leading-none">
          FP
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24">
            <div className="md:col-span-2">
              <h2 className="font-display text-4xl md:text-6xl mb-6">
                {dir === "rtl" ? (
                  <>لنصنع<br /><span className="text-primary">تأثيراً.</span></>
                ) : (
                  <>Let's Create<br /><span className="text-primary">Impact.</span></>
                )}
              </h2>
              <p className="text-muted-foreground font-sans max-w-sm text-base md:text-lg">
                {t.footer.tagline}
              </p>
            </div>

            <div>
              <h4 className="font-sans font-bold uppercase tracking-wider text-sm text-foreground mb-6">
                {t.footer.explore}
              </h4>
              <ul className="flex flex-col gap-4 font-sans text-muted-foreground">
                <li><Link href="/portfolio" className="hover:text-primary transition-colors">{t.footer.links.ourWork}</Link></li>
                <li><Link href="/about" className="hover:text-primary transition-colors">{t.footer.links.about}</Link></li>
                <li><Link href="/contact" className="hover:text-primary transition-colors">{t.footer.links.contact}</Link></li>
                <li><Link href="/order" className="hover:text-primary transition-colors text-primary">{t.footer.links.startOrder}</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-sans font-bold uppercase tracking-wider text-sm text-foreground mb-6">
                {t.footer.connect}
              </h4>
              <ul className="flex flex-col gap-4 font-sans text-muted-foreground">
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-primary shrink-0" />
                  <a href="mailto:hello@fastpub.com" className="hover:text-primary transition-colors">hello@fastpub.com</a>
                </li>
                <li className="flex items-center gap-3">
                  <Instagram size={18} className="text-primary shrink-0" />
                  <a href="https://instagram.com/fastpub" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">@fastpub</a>
                </li>
                <li className="flex flex-col gap-1 mt-2">
                  <span className="flex items-center gap-3">
                    <MapPin size={18} className="text-primary shrink-0" />
                    <span>Creative District</span>
                  </span>
                  <span className="ps-7 text-sm">124 Print Ave, NY 10012</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground font-sans">
            <p>© {new Date().getFullYear()} Fast Pub. {t.footer.copyright}</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">{t.footer.privacy}</a>
              <a href="#" className="hover:text-primary transition-colors">{t.footer.terms}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
