import { Link } from "wouter";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout";

export default function NotFound() {
  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          className="text-center"
        >
          <h1 className="text-[12rem] font-display text-primary leading-none text-stroke opacity-50 select-none">404</h1>
          <h2 className="text-5xl font-display mt-[-4rem] relative z-10 mb-6 uppercase">Page Not Found</h2>
          <p className="text-muted-foreground font-sans mb-10 max-w-md mx-auto text-lg">
            Looks like this page got stuck in the printer. Let's get you back to the main layout.
          </p>
          <Link href="/" className="px-8 py-4 bg-primary text-primary-foreground font-display text-xl tracking-wider uppercase rounded-sm hover:scale-105 transition-transform inline-block">
            Return Home
          </Link>
        </motion.div>
      </div>
    </Layout>
  );
}
