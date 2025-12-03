import { PropsWithChildren, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Reveal({
  children,
  delay = 0,
}: PropsWithChildren<{ delay?: number }>) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
