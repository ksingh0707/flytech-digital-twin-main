import { motion, useScroll } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 z-[100]"
      style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
    />
  );
};

export default ScrollProgress;
