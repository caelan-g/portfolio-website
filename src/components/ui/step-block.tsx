import { motion } from "framer-motion";

export function StepBlock({
  className,
  delay = 0,
  skipIntroAnimation,
  children,
}: {
  className?: string;
  delay?: number;
  skipIntroAnimation?: boolean;
  children: React.ReactNode;
}) {
  delay = delay + 0.2;
  if (skipIntroAnimation) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
