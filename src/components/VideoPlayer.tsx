import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, X } from 'lucide-react';

interface VideoPlayerProps {
  src: string;
  title?: string;
  onClose?: () => void;
  isYoutube?: boolean;
  imageUrl?: string;
  showSaludo?: boolean;
  section?: string;
}

export default function VideoPlayer({ src, onClose, imageUrl, showSaludo, section }: VideoPlayerProps) {
  const [hasStarted, setHasStarted] = useState(false);
  const [isSaludoVisible, setIsSaludoVisible] = useState(!!showSaludo);

  useEffect(() => {
    setIsSaludoVisible(!!showSaludo);
  }, [showSaludo]);

  const getYoutubeEmbedUrl = (url: string) => {
    const videoId = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/);
    // Standard YouTube parameters: autoplay=1 (starts after click), controls=1 for standard UI
    return videoId ? `https://www.youtube.com/embed/${videoId[1]}?autoplay=1&controls=1&modestbranding=1&rel=0` : url;
  };

  const getSaludoImageUrl = () => {
    if (section === 'NAGE-WAZA') {
      return '/assets/rei.png';
    }
    // Default or Katame-Waza
    return '/assets/rei_abajo.jpg';
  };

  return (
    <div className="relative w-full h-full bg-black overflow-hidden group rounded-2xl md:rounded-[2.5rem]">
      {onClose && (
        <button 
          onClick={onClose}
          className="absolute z-30 top-4 right-4 md:top-6 md:right-6 p-3 bg-black/50 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      )}
      
      <AnimatePresence>
        {isSaludoVisible ? (
          <motion.div
            key="saludo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-20 flex flex-col md:flex-row justify-center items-center bg-white overflow-hidden"
          >
            <div className="md:w-2/5 h-1/2 md:h-2/3">
              <img 
                src={getSaludoImageUrl()} 
                alt="Judokas Saluting" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/3 p-6 md:p-10 flex flex-col justify-center overflow-y-auto">
              <div className="space-y-4 md:space-y-5 text-brand-dark text-sm md:text-base lg:text-lg font-sans leading-relaxed">
                <p>El saludo (Rei) en el Judo no es solo una cortesía; es la base de nuestra práctica. Al saludarnos, reconocemos que en el Judo los dos aprendemos.</p>
                <p>Es un camino de mejora mutua, donde el respeto define nuestro aprendizaje.</p>
                <button 
                  onClick={() => {
                    setIsSaludoVisible(false);
                    setHasStarted(true);
                  }}
                  className="mt-8 flex items-center gap-3 bg-brand-red hover:bg-brand-dark text-white px-8 py-3.5 rounded-full shadow-lg shadow-brand-red/20 transition-all duration-300 font-bold tracking-widest uppercase text-[12px]"
                >
                  <Play className="w-5 h-5 fill-current" />
                  Iniciar Video
                </button>
              </div>
            </div>
          </motion.div>
        ) : !hasStarted ? (
          <motion.div
            key="thumbnail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-20 flex items-center justify-center bg-black cursor-pointer group"
            onClick={() => setHasStarted(true)}
          >
            {imageUrl && (
              <img 
                src={imageUrl} 
                alt="Video Thumbnail" 
                className="absolute inset-0 w-full h-full object-contain p-4 opacity-80"
              />
            )}
            {/* Play Button Overlay */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10 w-24 h-24 bg-white/10 rounded-full flex items-center justify-center transition-all bg-brand-red/90 text-white"
            >
              <Play className="w-10 h-10 fill-current translate-x-1" />
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="video"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 w-full h-full"
          >
            <iframe
              className="absolute inset-0 w-full h-full border-0"
              src={getYoutubeEmbedUrl(src)}
              title="Video Content"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
