"use client";

import { motion } from "framer-motion";

const fadeInVariant = {
  hidden: { opacity: 0, y: 30, filter: "blur(2px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export default function FadeInSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial="hidden"
      variants={fadeInVariant}
      viewport={{ once: true, amount: 0.2 }}
      whileInView="show"
    >
      {children}
    </motion.div>
  );
}
