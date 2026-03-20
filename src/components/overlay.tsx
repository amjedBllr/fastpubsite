import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

interface OverlayProps {
  open: boolean;
  onClose: () => void;
  title: string;
  desc: string;
  useCase: string;
  cta: string;
}

export function Overlay({ open, onClose, title, desc, useCase, cta }: OverlayProps) {
  const { t, dir } = useI18n();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="overlay-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[200] bg-background/80 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            key="overlay-panel"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[210] flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="pointer-events-auto w-full max-w-xl bg-card border border-border rounded-2xl shadow-2xl overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top accent bar */}
              <div className="h-1.5 w-full bg-primary" />

              <div className="p-8 md:p-12">
                {/* Close */}
                <button
                  onClick={onClose}
                  className={cn(
                    "absolute top-6 text-muted-foreground hover:text-foreground transition-colors",
                    dir === "rtl" ? "left-6" : "right-6"
                  )}
                  aria-label={t.overlay.close}
                >
                  <X size={22} />
                </button>

                {/* Title */}
                <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4 leading-tight">
                  {title}
                </h2>

                {/* Divider */}
                <div className="w-16 h-0.5 bg-primary mb-8" />

                {/* Description */}
                <p className="font-sans text-muted-foreground text-lg leading-relaxed mb-8">
                  {desc}
                </p>

                {/* Use Case */}
                <div className="bg-secondary border border-border rounded-xl p-6 mb-10">
                  <p className="font-sans font-bold text-xs uppercase tracking-widest text-primary mb-2">
                    {t.overlay.useCase}
                  </p>
                  <p className="font-sans text-foreground/90 leading-relaxed">
                    {useCase}
                  </p>
                </div>

                {/* CTA */}
                <Link
                  href="/order"
                  onClick={onClose}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-display text-xl tracking-wider hover:bg-primary/90 hover:-translate-y-0.5 active:translate-y-0 transition-all rounded-sm"
                >
                  {cta}
                  <ArrowRight size={18} className={cn(dir === "rtl" && "rotate-180")} />
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
