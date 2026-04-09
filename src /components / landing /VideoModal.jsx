import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactPlayer from 'react-player';
import { X } from 'lucide-react';

export default function VideoModal({ project, onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
        className="fixed inset-0 z-[100] bg-black/95"
        onClick={onClose}
      />

      {/* Close button */}
      <motion.button
        key="close"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.2, delay: 0.25 }}
        onClick={onClose}
        className="fixed top-5 right-5 z-[110] w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
      >
        <X className="w-5 h-5 text-white" />
      </motion.button>

      {/* Expanding card → full player */}
      <div className="fixed inset-0 z-[105] flex flex-col items-center justify-center p-4 md:p-12 pointer-events-none">
        <motion.div
          key="modal"
          layoutId={`project-card-${project.name}`}
          className="w-full max-w-5xl pointer-events-auto"
          transition={{ type: 'spring', stiffness: 280, damping: 30 }}
        >
          <motion.div
            className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl"
          >
            <ReactPlayer
              url={project.videoUrl}
              playing
              controls
              width="100%"
              height="100%"
              style={{ position: 'absolute', top: 0, left: 0 }}
            />
          </motion.div>
        </motion.div>

        {/* Title fades in below */}
        <motion.div
          key="title"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.3, delay: 0.25 }}
          className="w-full max-w-5xl mt-4 px-1 flex items-center gap-3 pointer-events-auto"
        >
          <h3 className="text-lg font-semibold text-white">{project.name}</h3>
          <span className="text-sm text-white/50">{project.type}</span>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
