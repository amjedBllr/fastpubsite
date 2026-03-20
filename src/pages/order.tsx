import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle2, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useCreateOrder, insertOrderSchema, type OrderInput } from "@/hooks/use-orders";
import { Layout } from "@/components/layout";
import { useI18n } from "@/lib/i18n";
import { clsx } from "clsx";

export default function Order() {
  const { toast } = useToast();
  const createOrder = useCreateOrder();
  const { t } = useI18n();
  const o = t.order;

  const form = useForm<OrderInput>({
    resolver: zodResolver(insertOrderSchema),
    defaultValues: {
      customerType: "individual",
      fullName: "",
      phone: "",
      email: "",
      orderType: "product",
      quantity: 100,
      size: "",
      surface: "",
      description: "",
      deadline: "",
      notes: "",
    }
  });

  const onSubmit = (data: OrderInput) => {
    createOrder.mutate(data, {
      onSuccess: () => {
        toast({ title: o.successTitle, description: o.note });
        form.reset();
      },
      onError: (error) => {
        toast({ title: "Error", description: error.message, variant: "destructive" });
      }
    });
  };

  if (createOrder.isSuccess) {
    return (
      <Layout>
        <div className="min-h-[80vh] flex flex-col items-center justify-center px-6">
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center bg-card border border-border p-16 rounded-2xl max-w-xl w-full shadow-2xl">
            <CheckCircle2 size={80} className="text-primary mx-auto mb-8" />
            <h2 className="font-display text-5xl mb-4">{o.successTitle}</h2>
            <p className="font-sans text-muted-foreground text-lg mb-8">{o.successMsg}</p>
            <button onClick={() => createOrder.reset()} className="px-8 py-3 bg-secondary text-foreground font-display text-xl tracking-wider rounded hover:bg-border transition-colors">
              {o.submitAnother}
            </button>
          </motion.div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="pt-20 pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
            <h1 className="text-5xl md:text-7xl font-display uppercase mb-4">
              {o.hero} <span className="text-primary">{o.heroHighlight}</span>
            </h1>
            <p className="font-sans text-muted-foreground text-lg">{o.subtitle}</p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-12 bg-card border border-border p-8 md:p-12 rounded-2xl shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

            {/* Step 1 */}
            <div className="space-y-6">
              <h3 className="font-display text-3xl border-b border-border pb-4">{o.step1}</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block font-sans text-sm font-bold uppercase tracking-wider mb-3">{o.iAm}</label>
                  <div className="flex gap-4">
                    <label className={clsx(
                      "flex-1 border p-4 rounded-xl cursor-pointer text-center font-display text-2xl transition-all",
                      form.watch("customerType") === "individual" ? "border-primary bg-primary/10 text-primary" : "border-border hover:border-muted-foreground bg-background"
                    )}>
                      <input type="radio" value="individual" className="hidden" {...form.register("customerType")} />
                      {o.individual}
                    </label>
                    <label className={clsx(
                      "flex-1 border p-4 rounded-xl cursor-pointer text-center font-display text-2xl transition-all",
                      form.watch("customerType") === "company" ? "border-primary bg-primary/10 text-primary" : "border-border hover:border-muted-foreground bg-background"
                    )}>
                      <input type="radio" value="company" className="hidden" {...form.register("customerType")} />
                      {o.company}
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block font-sans text-sm font-bold uppercase tracking-wider mb-2">{o.fullName}</label>
                  <input {...form.register("fullName")} className="w-full bg-background border border-border rounded-lg px-4 py-3 font-sans focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder={o.fullNamePlaceholder} />
                  {form.formState.errors.fullName && <p className="text-destructive text-sm mt-1">{form.formState.errors.fullName.message}</p>}
                </div>

                <div>
                  <label className="block font-sans text-sm font-bold uppercase tracking-wider mb-2">{o.phone}</label>
                  <input {...form.register("phone")} className="w-full bg-background border border-border rounded-lg px-4 py-3 font-sans focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder={o.phonePlaceholder} />
                  {form.formState.errors.phone && <p className="text-destructive text-sm mt-1">{form.formState.errors.phone.message}</p>}
                </div>

                <div className="md:col-span-2">
                  <label className="block font-sans text-sm font-bold uppercase tracking-wider mb-2">{o.email}</label>
                  <input type="email" {...form.register("email")} className="w-full bg-background border border-border rounded-lg px-4 py-3 font-sans focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder={o.emailPlaceholder} />
                  {form.formState.errors.email && <p className="text-destructive text-sm mt-1">{form.formState.errors.email.message}</p>}
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="space-y-6">
              <h3 className="font-display text-3xl border-b border-border pb-4">{o.step2}</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block font-sans text-sm font-bold uppercase tracking-wider mb-2">{o.whatToPrint}</label>
                  <select {...form.register("orderType")} className="w-full bg-background border border-border rounded-lg px-4 py-4 font-sans text-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none cursor-pointer">
                    {o.orderTypes.map((type) => (
                      <option key={type.value} value={type.value}>{type.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-sans text-sm font-bold uppercase tracking-wider mb-2">{o.quantity}</label>
                  <input type="number" {...form.register("quantity")} className="w-full bg-background border border-border rounded-lg px-4 py-3 font-sans focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                  {form.formState.errors.quantity && <p className="text-destructive text-sm mt-1">{form.formState.errors.quantity.message}</p>}
                </div>

                <div>
                  <label className="block font-sans text-sm font-bold uppercase tracking-wider mb-2">{o.size}</label>
                  <input {...form.register("size")} className="w-full bg-background border border-border rounded-lg px-4 py-3 font-sans focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder={o.sizePlaceholder} />
                  {form.formState.errors.size && <p className="text-destructive text-sm mt-1">{form.formState.errors.size.message}</p>}
                </div>

                <div className="md:col-span-2">
                  <label className="block font-sans text-sm font-bold uppercase tracking-wider mb-2">{o.surface}</label>
                  <input {...form.register("surface")} className="w-full bg-background border border-border rounded-lg px-4 py-3 font-sans focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder={o.surfacePlaceholder} />
                  {form.formState.errors.surface && <p className="text-destructive text-sm mt-1">{form.formState.errors.surface.message}</p>}
                </div>

                {form.watch("orderType") === "custom" && (
                  <div className="md:col-span-2">
                    <label className="block font-sans text-sm font-bold uppercase tracking-wider mb-2">{o.description}</label>
                    <textarea {...form.register("description")} rows={4} className="w-full bg-background border border-border rounded-lg px-4 py-3 font-sans focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none" placeholder={o.descriptionPlaceholder} />
                  </div>
                )}
              </div>
            </div>

            {/* Step 3 */}
            <div className="space-y-6">
              <h3 className="font-display text-3xl border-b border-border pb-4">{o.step3}</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block font-sans text-sm font-bold uppercase tracking-wider mb-2">{o.artwork}</label>
                  <div className="border-2 border-dashed border-border hover:border-primary rounded-xl p-10 text-center transition-colors cursor-pointer bg-background">
                    <Upload size={32} className="mx-auto mb-4 text-muted-foreground" />
                    <p className="font-sans font-bold mb-1">{o.artworkCta}</p>
                    <p className="font-sans text-sm text-muted-foreground">{o.artworkNote}</p>
                  </div>
                </div>

                <div>
                  <label className="block font-sans text-sm font-bold uppercase tracking-wider mb-2">{o.deadline}</label>
                  <input type="date" {...form.register("deadline")} className="w-full bg-background border border-border rounded-lg px-4 py-3 font-sans focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all [color-scheme:dark]" />
                  {form.formState.errors.deadline && <p className="text-destructive text-sm mt-1">{form.formState.errors.deadline.message}</p>}
                </div>

                <div className="md:col-span-2">
                  <label className="block font-sans text-sm font-bold uppercase tracking-wider mb-2">{o.notes}</label>
                  <textarea {...form.register("notes")} rows={3} className="w-full bg-background border border-border rounded-lg px-4 py-3 font-sans focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none" placeholder={o.notesPlaceholder} />
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-6">
              <p className="text-muted-foreground font-sans text-sm">{o.submitNote}</p>
              <button
                type="submit"
                disabled={createOrder.isPending}
                className="w-full sm:w-auto px-12 py-4 bg-primary text-primary-foreground font-display text-2xl tracking-wider rounded-sm hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(242,74,29,0.4)] transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {createOrder.isPending ? (
                  <><Loader2 className="animate-spin" /> {o.submitting}</>
                ) : o.submit}
              </button>
            </div>
          </motion.form>
        </div>
      </section>
    </Layout>
  );
}
