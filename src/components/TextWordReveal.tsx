import React from "react";
import { motion, type HTMLMotionProps } from "motion/react";

interface TextWordRevealProps extends HTMLMotionProps<"span"> {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  blur?: boolean;
}

export const TextWordReveal: React.FC<TextWordRevealProps> = ({
  text,
  className = "",
  wordClassName = "",
  delay = 0.1,
  stagger = 0.04,
  blur = true,
  ...props
}) => {
  const words = text.split(" ");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 16,
      filter: blur ? "blur(8px)" : "blur(0px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.span
      className={`inline-block flex-wrap ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      {...props}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          variants={wordVariants}
          className={`inline-block mr-[0.25em] will-change-transform ${wordClassName}`}
          style={{ willChange: "transform, opacity, filter" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default TextWordReveal;
