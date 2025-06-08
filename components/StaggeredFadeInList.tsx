"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type StaggeredFadeInListProps = {
  children: ReactNode[];
  delayStep?: number; // delay increment per item
};

export default function StaggeredFadeInList({
  children,
  delayStep = 0.15,
}: StaggeredFadeInListProps) {
  return (
    <>
      {children.map((child, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          style={{ willChange: "transform, opacity" }}
          transition={{ delay: i * delayStep, type: "spring", stiffness: 80 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          {child}
        </motion.div>
      ))}
    </>
  );
}
