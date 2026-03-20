import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/layout";
import { Overlay } from "@/components/overlay";
import { clsx } from "clsx";
import { useI18n } from "@/lib/i18n";

const PROJECT_IMGS = [
  "https://plus.unsplash.com/premium_photo-1773309436260-d5140da5bb83?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
  "https://plus.unsplash.com/premium_photo-1773781519718-f90318d39044?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1773781519810-63a858473fbc?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1772440428276-79f044085e53?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1772891753024-5d78af4ff483?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1754772566253-9209f107e7b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
  "https://plus.unsplash.com/premium_photo-1773309596018-0b61f9ee0c35?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1773309079167-d479563cb025?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    desc: p.projectDescs[i],
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
            <h1 className="text-5xl md:text-7xl font-display mb-6 uppercase">
              {p.hero} <span className="text-primary">{p.heroHighlight}</span>
            </h1>
            <p className="font-sans text-muted-foreground text-lg max-w-2xl">{p.subtitle}</p>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="flex flex-wrap gap-3 md:gap-4 mb-16">
            {cats.map((cat, i) => (
              <button
                key={i}
                onClick={() => setActiveCat(cat)}
                className={clsx(
                  "inline-flex items-center justify-center min-h-11 px-6 py-2 rounded-full font-sans font-bold text-sm tracking-widest uppercase transition-all duration-300",
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
                    src={item.img}
                    alt={`Project ${item.id}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  />

                  {/* Peel corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-transparent via-transparent to-background/50 origin-top-right transform translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 rounded-bl-3xl z-20 pointer-events-none drop-shadow-xl" />

                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 z-10">
                    <p className="font-sans text-primary font-bold text-sm tracking-widest uppercase mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">{item.catLabel}</p>
                    <p className="font-display text-3xl md:text-4xl text-white transform translate-y-4 group-hover:translate-y-0 transition-transform delay-75">Project {item.id}</p>
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
