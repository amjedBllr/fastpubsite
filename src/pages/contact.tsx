import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, MessageSquare } from "lucide-react";
import { Layout } from "@/components/layout";
import { useI18n } from "@/lib/i18n";

export default function Contact() {
  const { t } = useI18n();
  const c = t.contact;

  return (
    <Layout>
      <section className="pt-20 pb-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px] -z-10" />

        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-[8rem] font-display uppercase leading-none mb-12 text-foreground"
          >
            {c.hero} <span className="text-primary">{c.heroHighlight}</span>
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mt-20">
            <motion.div
              initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-card border border-border p-10 rounded-2xl hover:border-primary transition-colors group">
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-colors text-primary">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h3 className="font-display text-3xl">{c.callTitle}</h3>
                    <p className="font-sans text-muted-foreground uppercase tracking-widest text-xs font-bold mt-1">{c.callHours}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <a href="tel:+1234567890" className="block font-sans text-2xl hover:text-primary transition-colors">+1 (234) 567-890</a>
                  <a href="tel:+1234567891" className="block font-sans text-2xl hover:text-primary transition-colors">+1 (234) 567-891</a>
                </div>
              </div>

              <div className="bg-card border border-border p-10 rounded-2xl hover:border-primary transition-colors group">
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-colors text-primary">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h3 className="font-display text-3xl">{c.emailTitle}</h3>
                    <p className="font-sans text-muted-foreground uppercase tracking-widest text-xs font-bold mt-1">{c.emailReply}</p>
                  </div>
                </div>
                <a href="mailto:hello@fastpub.com" className="block font-sans text-2xl hover:text-primary transition-colors">hello@fastpub.com</a>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <a href="#" className="bg-[#25D366]/10 border border-[#25D366]/30 p-8 rounded-2xl flex flex-col items-center justify-center gap-4 hover:bg-[#25D366]/20 transition-colors group">
                  <MessageSquare size={40} className="text-[#25D366] group-hover:scale-110 transition-transform" />
                  <span className="font-display text-2xl text-[#25D366]">WhatsApp</span>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="bg-[#E1306C]/10 border border-[#E1306C]/30 p-8 rounded-2xl flex flex-col items-center justify-center gap-4 hover:bg-[#E1306C]/20 transition-colors group">
                  <Instagram size={40} className="text-[#E1306C] group-hover:scale-110 transition-transform" />
                  <span className="font-display text-2xl text-[#E1306C]">Instagram</span>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
              className="bg-card border border-border rounded-2xl overflow-hidden relative min-h-[500px]"
            >
              <div className="absolute inset-0 bg-secondary/80 mix-blend-color z-10 pointer-events-none" />
              <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80" alt="Map Location" className="w-full h-full object-cover grayscale" />

              <div className="absolute bottom-10 left-10 right-10 bg-background/90 backdrop-blur-md border border-border p-8 rounded-xl z-20 shadow-2xl">
                <div className="flex items-start gap-4">
                  <MapPin className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-display text-3xl mb-2">{c.hqTitle}</h4>
                    <p className="font-sans text-muted-foreground whitespace-pre-line">{c.hqAddress}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
