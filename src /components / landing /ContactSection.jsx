import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

const budgets = [
  { label: 'Under $3,000', value: 'under_3k' },
  { label: '$3,000 – $7,000', value: '3k_7k' },
  { label: '$7,000 – $15,000', value: '7k_15k' },
  { label: '$15,000+', value: '15k_plus' },
];

export default function ContactSection() {
  const [budget, setBudget] = useState('');
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await new Promise(r => setTimeout(r, 1200));
    setSending(false);
    toast.success("Inquiry sent! We'll be in touch soon.");
    setBudget('');
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
            Let's start<br />your project
          </h2>
          <p className="text-muted-foreground mt-3 text-sm">
            Fill out the form to get started, or book a call.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Budget label */}
          <div>
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-3">
              What's your Budget?
            </p>
            <div className="flex flex-wrap gap-2">
              {budgets.map((b) => (
                <button
                  key={b.value}
                  type="button"
                  onClick={() => setBudget(b.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                    budget === b.value
                      ? 'bg-foreground text-background border-foreground'
                      : 'bg-transparent text-foreground border-border hover:border-foreground/40'
                  }`}
                >
                  {b.label}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            disabled={sending}
            className="flex items-center gap-3 bg-foreground text-background pl-6 pr-2 py-2 rounded-full text-sm font-semibold hover:opacity-85 transition-opacity disabled:opacity-50"
          >
            {sending ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Inquiry
                <span className="w-9 h-9 bg-background/15 rounded-full flex items-center justify-center">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
