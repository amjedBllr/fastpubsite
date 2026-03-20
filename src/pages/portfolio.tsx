import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/layout";
import { Overlay } from "@/components/overlay";
import { clsx } from "clsx";
import { useI18n } from "@/lib/i18n";

const PROJECT_IMGS = [
  "photo-1614036417651-1d7eb0aa70e5",
  "photo-1559564101-7fa3458cd114",
  "photo-1520004434532-668416a08753",
  "photo-1608248593802-802ca16e6d1c",
  "photo-1505330622279-bf7d7fc918f4",
  "photo-1618005182384-a83a8bd57fbe",
  "photo-1611162458324-aae1eb4129a4",
  "photo-1493225457124-a1a2a5956025",
];

const PROJECT_SPANS = [
  "md:col-span-2 md:row-span-2",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-2",
  "md:col-span-1 md:row-span-1",
  "md:col-span-2 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-2",
];

const PROJECT_DESCS = [
  "Holographic die-cut vinyl stickers for a boutique nightlife brand. CMYK-matched against brand guidelines with precision cut paths.",
  "Custom kraft-paper packaging for a specialty coffee roaster. Matte laminate finish with spot UV logo.",
  "Waterproof outdoor stickers for a skate brand. Glossy finish with white ink base for vibrant color on dark decks.",
  "Minimalist tube packaging for a premium skincare line. Tactile soft-touch laminate with embossed logo.",
  "All-in brand identity package: lanyards, badges, programs, and event signage for a 2-day tech festival.",
  "Holographic mylar stickers for a limited-edition product drop. UV-reactive ink with custom cut paths.",
  "Amber bottle roll-labels for craft beer brand. Waterproof matte finish, screen-printed registration.",
  "Full brand identity for an indie music label: press kits, vinyl sleeve artwork, and promotional stickers.",
];

const PROJECT_CATEGORIES_IDX = [0, 1, 0, 1, 2, 0, 1, 2];

export default function Portfolio() {
  const { t } = useI18n();
  const p = t.portfolioPage;
  const cats = p.categories;

  const [activeCat, setActiveCat] = useState(cats[0]);
  const [overlayIdx, setOverlayIdx] = useState<number | null>(null);

  const catKeys = ["All", "Stickers", "Packaging", "Brand Identity"];

  const projects = PROJECT_IMGS.map((img, i) => ({
    id: i + 1,
    img,
    span: PROJECT_SPANS[i],
    catKey: catKeys[PROJECT_CATEGORIES_IDX[i] + 1],
    catLabel: cats[PROJECT_CATEGORIES_IDX[i] + 1],
    desc: PROJECT_DESCS[i],
  }));

  const filtered = activeCat === cats[0]
    ? projects
    : projects.filter((p) => p.catLabel === activeCat);

  const activeProject = overlayIdx !== null ? projects[overlayIdx] : null;

  return (
    <Layout>
      <section className="pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
            <h1 className="text-6xl md:text-8xl font-display mb-6 uppercase">
              {p.hero} <span className="text-primary">{p.heroHighlight}</span>
            </h1>
            <p className="font-sans text-muted-foreground text-xl max-w-2xl">{p.subtitle}</p>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="flex flex-wrap gap-4 mb-16">
            {cats.map((cat, i) => (
              <button
                key={i}
                onClick={() => setActiveCat(cat)}
                className={clsx(
                  "px-6 py-2 rounded-full font-sans font-bold text-sm tracking-widest uppercase transition-all duration-300",
                  activeCat === cat
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-card text-foreground border border-border hover:border-primary"
                )}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[300px]">
            <AnimatePresence>
              {filtered.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={item.id}
                  onClick={() => setOverlayIdx(item.id - 1)}
                  className={clsx(
                    "relative group rounded-xl overflow-hidden bg-card border border-border cursor-pointer",
                    item.span
                  )}
                >
                  <img
                    src={`https://images.unsplash.com/${item.img}?w=800&q=80`}
                    alt={`Project ${item.id}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  />

                  {/* Peel corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-transparent via-transparent to-background/50 origin-top-right transform translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 rounded-bl-3xl z-20 pointer-events-none drop-shadow-xl" />

                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 z-10">
                    <p className="font-sans text-primary font-bold text-sm tracking-widest uppercase mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">{item.catLabel}</p>
                    <p className="font-display text-4xl text-white transform translate-y-4 group-hover:translate-y-0 transition-transform delay-75">Project {item.id}</p>
                    <p className="font-sans text-xs text-muted-foreground mt-2 translate-y-4 group-hover:translate-y-0 transition-transform delay-100">{p.viewProject} →</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project overlay */}
      {activeProject && (
        <Overlay
          open={overlayIdx !== null}
          onClose={() => setOverlayIdx(null)}
          title={`Project ${activeProject.id} — ${activeProject.catLabel}`}
          desc={activeProject.desc}
          useCase={activeProject.catLabel}
          cta={t.overlay.orderNow}
        />
      )}
    </Layout>
  );
}
