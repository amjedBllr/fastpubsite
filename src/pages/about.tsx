import { motion } from "framer-motion";
import { Layout } from "@/components/layout";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n";

export default function About() {
  const { t, dir } = useI18n();
  const a = t.about;

  return (
    <Layout>
      <section className="pt-20 pb-32 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-primary/10 rounded-full blur-[120px] -z-10" />

        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className={cn("font-display leading-[0.85] mb-12 text-foreground", a.headingSize)}
          >
            {a.heroLine1}<br /><span className="text-primary">{a.heroLine2}</span>
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-20">
            <motion.div
              initial={{ opacity: 0, x: dir === "rtl" ? 50 : -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="aspect-[4/5] bg-card rounded-2xl overflow-hidden border border-border shadow-2xl">
                <img src="https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&q=80" alt="Studio" className="w-full h-full object-cover mix-blend-luminosity opacity-80 hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className={cn(
                "absolute -bottom-10 w-64 aspect-square bg-accent p-6 rounded-xl rotate-12 hidden md:block shadow-2xl border border-primary/20",
                dir === "rtl" ? "-left-10" : "-right-10"
              )}>
                <img src="https://images.unsplash.com/photo-1588693959661-0ebdc1d4a0fc?w=400&q=80" alt="Process" className="w-full h-full object-cover rounded-lg mix-blend-overlay" />
              </div>
            </motion.div>

            <div className="flex flex-col justify-center">
              <motion.h3
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                className="font-display text-4xl mb-6"
              >
                {a.mission}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                className="font-sans text-xl text-muted-foreground leading-relaxed mb-8"
              >
                {a.missionP1}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
                className="font-sans text-xl text-muted-foreground leading-relaxed"
              >
                {a.missionP2}
              </motion.p>

              <div className="mt-16 grid grid-cols-2 gap-8">
                <div>
                  <div className="font-display text-6xl text-primary mb-2">{a.stat1Val}</div>
                  <div className="font-sans text-sm tracking-widest uppercase text-muted-foreground font-bold">{a.stat1Label}</div>
                </div>
                <div>
                  <div className="font-display text-6xl text-primary mb-2">{a.stat2Val}</div>
                  <div className="font-sans text-sm tracking-widest uppercase text-muted-foreground font-bold">{a.stat2Label}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-secondary px-6 relative border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-display text-white">{a.processTitle}</h2>
            <p className="font-sans text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">{a.processSubtitle}</p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

            {a.steps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={cn(
                  "relative flex flex-col md:flex-row items-center mb-16 last:mb-0",
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                )}
              >
                <div className="hidden md:flex w-1/2 justify-center" />

                <div className="absolute left-1/2 top-0 md:top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-card border-4 border-primary rounded-full flex items-center justify-center z-10">
                  <div className="w-3 h-3 bg-primary rounded-full" />
                </div>

                <div className={cn("w-full md:w-1/2 pt-12 md:pt-0", index % 2 === 0 ? "md:pl-16 text-left" : "md:pr-16 md:text-right")}>
                  <div className="font-display text-primary text-2xl mb-2">{a.phaseLabel} {item.step}</div>
                  <h3 className="font-display text-4xl text-white mb-4">{item.title}</h3>
                  <p className="font-sans text-muted-foreground text-lg">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
