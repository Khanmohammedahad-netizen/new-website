import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}

export default function AnimatedSection({ children, className = '', delay = 0, id }: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
