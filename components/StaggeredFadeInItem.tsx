"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface StaggeredFadeInItemProps {
  children: ReactNode;
  index?: number;
  delayStep?: number;
}

export default function StaggeredFadeInItem({
  children,
  index = 0,
  delayStep = 0.15,
}: StaggeredFadeInItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      style={{ willChange: "transform, opacity" }}
      transition={{ delay: index * delayStep, duration: 0.5 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  );
}
