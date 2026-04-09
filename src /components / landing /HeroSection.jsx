import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {

  return (
    <section id="top" className="pt-24 md:pt-28 pb-0 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch min-h-[85vh]">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-16 pb-12 pt-8 lg:pt-0 max-w-none lg:max-w-[52%]">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[2.6rem] md:text-[3.2rem] lg:text-[3.8rem] font-bold leading-[1.08] tracking-tight"
          >
            <span className="text-foreground/30">You built<br />something good.</span>
            <br />
            <span className="text-foreground">Don't let a weak<br />video kill it.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-sm"
          >
            Animated videos that make people understand your product in 5 seconds and actually want to buy it.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-foreground text-background pl-6 pr-2 py-2 rounded-full text-sm font-semibold hover:opacity-85 transition-opacity"
            >
              Get Started
              <span className="w-9 h-9 bg-background/15 rounded-full flex items-center justify-center">
                <ArrowRight className="w-4 h-4" />
              </span>
            </a>
          </motion.div>
        </div>

        {/* Right: Vimeo embed - bleeds off screen on right */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="relative w-full lg:flex-1 lg:min-w-0"
          style={{ minHeight: '320px' }}
        >
          <div className="relative w-full h-full min-h-[320px] lg:min-h-0 bg-black lg:rounded-l-3xl overflow-hidden">
            <iframe
              src="https://player.vimeo.com/video/1177669396?autoplay=1&muted=1&loop=1&background=1&quality=1080p"
              style={{ position: 'absolute', top: '50%', left: '50%', width: '177.78%', height: '177.78%', transform: 'translate(-50%, -50%)' }}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              title="LeonMotion Showreel"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
