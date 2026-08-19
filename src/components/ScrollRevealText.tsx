import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealTextProps {
  children: ReactNode;
  className?: string;
}

export default function ScrollRevealText({ children, className = "" }: ScrollRevealTextProps) {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const targets = textRef.current.querySelectorAll(".text-reveal-target");
    
    targets.forEach((target) => {
      gsap.to(target, {
        backgroundPositionX: "0%",
        ease: "none",
        scrollTrigger: {
          trigger: target,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
          // markers: true, // For debugging if needed
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={textRef} className={className}>
      {children}
    </div>
  );
}
