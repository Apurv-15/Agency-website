import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface PerspectiveTextRevealProps {
  text?: string;
  className?: string;
  containerClassName?: string;
  startTrigger?: string;
  endTrigger?: string;
  scrubSpeed?: number | boolean;
  perspective?: number;
  initialRotateX?: number;
}

/**
 * PerspectiveTextReveal Component
 * Recreates the iconic 3D perspective smooth character/word scroll illumination effect
 * matching design.md editorial dark aesthetic (Geist/Neue Montreal typography, 3D pitch, silky opacity transition).
 */
export default function PerspectiveTextReveal({
  text = "Building products that customers love isn’t magic, it requires:",
  className = "",
  containerClassName = "",
  startTrigger = "top 75%",
  endTrigger = "bottom 35%",
  scrubSpeed = 1,
  perspective = 1100,
  initialRotateX = 28,
}: PerspectiveTextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!headingRef.current || !containerRef.current) return;

    const chars = headingRef.current.querySelectorAll(".char-span");
    if (!chars.length) return;

    // Reset initial state
    gsap.set(chars, {
      opacity: 0.2,
      color: "rgba(242, 239, 232, 0.2)",
    });

    gsap.set(headingRef.current, {
      rotateX: initialRotateX,
      translateY: -10,
      translateZ: 30,
      transformPerspective: perspective,
      transformOrigin: "center center",
      backfaceVisibility: "hidden",
    });

    // Timeline linked to ScrollTrigger with smooth scrub
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: startTrigger,
        end: endTrigger,
        scrub: scrubSpeed,
        // markers: false,
      },
    });

    // Smooth staggered opacity illumination
    tl.to(chars, {
      opacity: 1,
      color: "#f2efe8",
      stagger: {
        each: 0.03,
        from: "start",
        ease: "power2.out",
      },
      duration: 1,
    });

    // Subtle leveling of 3D tilt as user progresses
    tl.to(
      headingRef.current,
      {
        rotateX: Math.max(0, initialRotateX - 18),
        translateY: 0,
        translateZ: 0,
        ease: "power1.out",
        duration: 1,
      },
      0
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === containerRef.current) {
          trigger.kill();
        }
      });
    };
  }, [initialRotateX, perspective, scrubSpeed, startTrigger, endTrigger]);

  // Break text into words, and words into characters to ensure proper wrapping
  const words = text.split(" ");

  return (
    <section
      id="perspective-intro"
      ref={containerRef}
      className={`relative w-full min-h-screen sm:min-h-[115vh] bg-black text-white py-36 sm:py-52 md:py-64 px-6 sm:px-10 md:px-16 flex items-center justify-center overflow-hidden [perspective:1100px] select-none ${containerClassName}`}
      style={{
        perspective: `${perspective}px`,
        perspectiveOrigin: "50% 50%",
      }}
    >
      {/* Background ambient dark radial glow */}
      <div className="absolute inset-0 pointer-events-none radial-dot-pattern opacity-10" />
      <div className="absolute w-[500px] h-[300px] bg-neutral-900/40 rounded-full blur-3xl pointer-events-none -top-10 left-1/2 -translate-x-1/2" />

      <h2
        ref={headingRef}
        aria-label={text}
        className={`relative z-10 text-[#f2efe8] leading-[1.08] font-geist font-normal text-3xl sm:text-5xl md:text-[62px] lg:text-[70px] tracking-[-0.035em] text-center max-w-[820px] mx-auto my-0 will-change-transform ${className}`}
        style={{
          fontFamily: "'Geist', 'Neue Montreal', 'Helvetica Neue', sans-serif",
          textWrap: "balance",
          transformStyle: "preserve-3d",
        }}
      >
        {words.map((word, wordIdx) => (
          <span
            key={`word-${wordIdx}`}
            className="inline-block whitespace-nowrap mr-[0.28em] last:mr-0"
            aria-hidden="true"
          >
            {word.split("").map((char, charIdx) => (
              <span
                key={`char-${wordIdx}-${charIdx}`}
                className="char-span inline-block transition-colors duration-200"
                style={{
                  opacity: 0.2,
                  color: "rgba(242, 239, 232, 0.2)",
                  willChange: "opacity, color",
                }}
              >
                {char}
              </span>
            ))}
          </span>
        ))}
      </h2>
    </section>
  );
}
