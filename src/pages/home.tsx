import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Star, Zap, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/layout";
import { Overlay } from "@/components/overlay";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n";
import { useIsMobile } from "@/hooks/use-mobile";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const SERVICE_IMGS = [
  "photo-1572949645841-094f3a9c4c94",
  "photo-1589939705384-5185137a7f0f",
  "photo-1626785774573-4b799315345d",
];

export default function Home() {
  const { t, dir } = useI18n();
  const isMobile = useIsMobile();
  const [overlayIdx, setOverlayIdx] = useState<number | null>(null);

  const activeService = overlayIdx !== null ? t.services.items[overlayIdx] : null;

  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className={cn(
          "absolute top-20 right-[10%] w-[30vw] h-[30vw] bg-primary/20 rounded-full pointer-events-none",
          isMobile ? "blur-[56px]" : "blur-[100px]"
        )} />
        <div className={cn(
          "absolute bottom-10 left-[5%] w-[40vw] h-[40vw] bg-accent/30 rounded-full pointer-events-none",
          isMobile ? "blur-[72px]" : "blur-[120px]"
        )} />

        {/* Mobile-only floating stickers — absolutely positioned in hero background */}
        <div className="lg:hidden absolute inset-0 pointer-events-none overflow-hidden">
          <motion.img
            src={`${import.meta.env.BASE_URL}images/logo-shape.png`}
            alt=""
            aria-hidden="true"
            className="absolute top-18 right-3 w-28 sm:w-36 object-contain drop-shadow-2xl opacity-80"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={
              isMobile
                ? { opacity: 0.8, scale: 1, y: [0, -6, 0], rotate: [0, 2, 0] }
                : { opacity: 0.9, scale: 1, y: [0, -12, 0], rotate: [0, 4, 0] }
            }
            transition={{
              opacity: { duration: 0.8, delay: 0.25 },
              scale: { duration: 0.8, delay: 0.25 },
              y: { repeat: Infinity, duration: isMobile ? 8 : 6, ease: "easeInOut", delay: 0.4 },
              rotate: { repeat: Infinity, duration: isMobile ? 8 : 6, ease: "easeInOut", delay: 0.4 }
            }}
          />
          <motion.img
            src={`${import.meta.env.BASE_URL}images/floating-sticker-1.png`}
            alt=""
            aria-hidden="true"
            className="absolute bottom-8 right-[-1rem] w-36 sm:w-44 object-contain drop-shadow-2xl opacity-75"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={
              isMobile
                ? { opacity: 0.75, scale: 1, y: [0, 8, 0], rotate: [-5, -2, -5] }
                : { opacity: 0.85, scale: 1, y: [0, 14, 0], rotate: [-8, -4, -8] }
            }
            transition={{
              opacity: { duration: 0.8, delay: 0.4 },
              scale: { duration: 0.8, delay: 0.4 },
              y: { repeat: Infinity, duration: isMobile ? 9 : 7, ease: "easeInOut", delay: 1 },
              rotate: { repeat: Infinity, duration: isMobile ? 9 : 7, ease: "easeInOut", delay: 1 }
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Content */}
            <motion.div
              className="lg:col-span-7 flex flex-col justify-center pt-20 lg:pt-0"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full border border-border w-fit mb-8 shadow-lg">
                <Zap size={16} className="text-primary fill-primary" />
                <span className="font-sans text-xs font-bold uppercase tracking-widest text-foreground">{t.hero.badge}</span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className={cn("font-display leading-[0.85] mb-6 text-foreground", t.hero.headingSize)}
              >
                {t.hero.line1}<br />
                <span className="text-primary">{t.hero.line2}</span><br />
                {t.hero.line3}
              </motion.h1>

              <motion.p variants={fadeUp} className="text-base md:text-lg font-sans text-muted-foreground max-w-xl mb-10 leading-relaxed">
                {t.hero.subtitle}
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                <Link
                  href="/order"
                  className="px-7 py-3.5 bg-primary text-primary-foreground font-display text-lg md:text-xl tracking-wide hover:bg-primary/85 hover:-translate-y-0.5 transition-all active:translate-y-0 rounded-sm"
                >
                  {t.hero.cta}
                </Link>
                <Link
                  href="/portfolio"
                  className="px-7 py-3.5 bg-transparent border-2 border-border text-foreground font-display text-lg md:text-xl tracking-wide hover:bg-secondary hover:border-secondary transition-all rounded-sm flex items-center gap-2 group"
                >
                  {t.hero.viewPortfolio}
                  <ArrowRight size={20} className={cn("group-hover:translate-x-1 transition-transform", dir === "rtl" && "rotate-180 group-hover:-translate-x-1 group-hover:translate-x-0")} />
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Visual — desktop only */}
            <motion.div
              className="lg:col-span-5 relative h-[700px] hidden lg:block"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {/* Floating sticker 1 */}
              <motion.img
                src={`${import.meta.env.BASE_URL}images/logo-shape.png`}
                alt="Decorative 3D Shape"
                className="absolute top-[10%] right-0 w-64 h-64 object-contain drop-shadow-2xl z-20"
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              />

              {/* Floating sticker 2 */}
              <motion.img
                src={`${import.meta.env.BASE_URL}images/floating-sticker-1.png`}
                alt="Floating Sticker"
                className="absolute bottom-[20%] left-[10%] w-72 h-72 object-contain drop-shadow-2xl z-30"
                animate={{ y: [0, 20, 0], rotate: [-10, -5, -10] }}
                transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
              />

              {/* Background glow */}
              <div className="absolute top-[40%] left-[30%] w-48 h-64 bg-gradient-to-tr from-primary to-accent rounded-2xl rotate-12 opacity-80 blur-sm -z-10" />

              {/* Mock approval card */}
              <div className="absolute top-[30%] right-[20%] w-48 h-64 bg-card border-2 border-border rounded-xl -rotate-6 shadow-2xl p-4 flex flex-col justify-between z-10">
                <div className="w-10 h-10 rounded-full bg-primary mb-4" />
                <div className="space-y-2">
                  <div className="h-2 w-full bg-muted rounded-full" />
                  <div className="h-2 w-2/3 bg-muted rounded-full" />
                  <div className="h-2 w-4/5 bg-muted rounded-full" />
                </div>
                <div className="mt-8 pt-4 border-t border-border flex justify-between">
                  <span className="font-display text-xs text-muted-foreground">APPROVED</span>
                  <CheckCircle2 size={14} className="text-primary" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MARQUEE — extra top margin to breathe from hero buttons */}
      <div className="w-full bg-primary py-4 overflow-hidden flex whitespace-nowrap border-y border-border mt-20">
        <motion.div
          className="flex font-display text-3xl md:text-4xl text-background gap-8 px-4"
          animate={{ x: dir === "rtl" ? ["0%", "50%"] : ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="flex items-center gap-8">
              {t.marquee} <Star size={24} className="fill-background" />
            </span>
          ))}
        </motion.div>
      </div>

      {/* SERVICES GRID */}
      <section className="py-32 px-6 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-display mb-4">{t.services.heading}<span className="text-primary">.</span></h2>
            <p className="font-sans text-muted-foreground text-base md:text-lg max-w-2xl">{t.services.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.services.items.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ y: -10, rotate: i % 2 === 0 ? 2 : -2 }}
                onClick={() => setOverlayIdx(i)}
                className="bg-card border border-border p-6 rounded-2xl cursor-pointer group"
              >
                <div className="h-64 mb-6 rounded-xl overflow-hidden relative">
                  <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors z-10" />
                  <img
                    src={`https://images.unsplash.com/${SERVICE_IMGS[i]}?w=600&q=80`}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <h3 className="font-display text-[1.8rem] md:text-3xl mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="font-sans text-sm md:text-base text-muted-foreground leading-relaxed mb-6">{service.desc}</p>
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-background transition-all">
                  <ArrowRight size={20} className={cn("-rotate-45 group-hover:rotate-0 transition-transform", dir === "rtl" && "rotate-[225deg] group-hover:rotate-180")} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE OVERLAY */}
      {activeService && (
        <Overlay
          open={overlayIdx !== null}
          onClose={() => setOverlayIdx(null)}
          title={activeService.title}
          desc={activeService.desc}
          useCase={activeService.useCase}
          cta={activeService.cta}
        />
      )}

      {/* PORTFOLIO PREVIEW */}
      <section className="py-32 bg-secondary clip-diagonal relative px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto pt-20 pb-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-4xl md:text-6xl font-display text-white">{t.portfolio.heading}<span className="text-primary">.</span></h2>
            </motion.div>
            <Link href="/portfolio" className="text-white hover:text-primary font-sans font-bold uppercase tracking-widest flex items-center gap-2 transition-colors">
              {t.portfolio.viewAll} <ArrowRight size={20} className={cn(dir === "rtl" && "rotate-180")} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[250px]">
            {[
              { span: "lg:col-span-2 lg:row-span-2", id: "5" },
              { span: "lg:col-span-1 lg:row-span-1", id: "6" },
              { span: "lg:col-span-1 lg:row-span-2", id: "7" },
              { span: "lg:col-span-1 lg:row-span-1", id: "8" },
              { span: "lg:col-span-2 lg:row-span-1", id: "9" },
              { span: "lg:col-span-1 lg:row-span-1", id: "10" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={cn("relative rounded-xl overflow-hidden group bg-card", item.span)}
              >
                <img src={`https://picsum.photos/seed/${item.id}00/800/800`} alt={`${t.portfolio.projectLabel} ${item.id}`} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <p className="font-display text-2xl text-white translate-y-4 group-hover:translate-y-0 transition-transform">{t.portfolio.projectLabel} {item.id}</p>
                  <p className="font-sans text-sm text-primary uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform delay-75">{t.portfolio.categoryLabel}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-4xl md:text-6xl font-display mb-10 sticky top-32 whitespace-pre-line">
                {t.why.heading}<span className="text-primary">.</span>
              </motion.h2>
            </div>

            <div className="space-y-16">
              {t.why.items.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: dir === "rtl" ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className={cn(
                    "relative border-border hover:border-primary transition-colors duration-500 pb-8",
                    dir === "rtl" ? "pr-12 md:pr-20 border-r" : "pl-12 md:pl-20 border-l"
                  )}
                >
                  <span className={cn(
                    "absolute top-0 font-display text-5xl md:text-7xl opacity-30",
                    dir === "rtl" ? "-right-[2px] translate-x-full" : "-left-[2px] -translate-x-full"
                  )}>{feature.num}</span>
                  <h3 className="font-display text-3xl md:text-4xl mb-4 text-foreground">{feature.title}</h3>
                  <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 relative overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{ background: 'radial-gradient(circle at 50% 50%, #4A2660 0%, transparent 70%)' }} />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display text-background mb-8 leading-none whitespace-pre-line"
          >
            {t.cta.heading}<br /><span className="text-foreground">{t.cta.highlight}</span>
          </motion.h2>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <Link href="/order" className="inline-flex items-center gap-4 px-9 py-4 bg-background text-foreground font-display text-xl md:text-2xl tracking-wide uppercase rounded-sm hover:scale-105 active:scale-95 transition-transform shadow-2xl">
              {t.cta.button} <ArrowRight size={24} className={cn(dir === "rtl" && "rotate-180")} />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
