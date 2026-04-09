import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import VideoModal from './VideoModal';

export default function ProjectCard({ project, index }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="group cursor-pointer"
        onClick={() => setOpen(true)}
      >
        {/* Shared layout element that morphs into the modal player */}
        <motion.div
          layoutId={`project-card-${project.name}`}
          className="relative aspect-video rounded-2xl overflow-hidden bg-foreground"
          transition={{ type: 'spring', stiffness: 280, damping: 30 }}
        >
          <img
            src={project.thumbnail}
            alt={project.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[13px] border-l-white border-b-[8px] border-b-transparent ml-1" />
            </div>
          </div>
        </motion.div>

        <div className="mt-4 px-1">
          <h3 className="text-base font-semibold text-foreground">{project.name}</h3>
          <p className="text-sm text-muted-foreground mt-0.5">{project.type}</p>
        </div>
      </motion.div>

      <AnimatePresence>
        {open && <VideoModal project={project} onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
