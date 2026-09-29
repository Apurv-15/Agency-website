import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface PerspectiveTextRevealProps {
  text?: string;
  className?: string;
  containerClassName?: string;
}

/**
 * PerspectiveTextReveal Component
 * Pinned viewport scroll reveal: Locks the section in center screen while the user scrolls,
 * smoothly illuminating all words/characters to 100% white before unpinning.
 */
export default function PerspectiveTextReveal({
  text = "Building products that customers love isn’t magic, it requires:",
  className = "",
  containerClassName = "",
}: PerspectiveTextRevealProps) {
  const pinTrackRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!headingRef.current || !pinTrackRef.current || !stageRef.current) return;

    const chars = headingRef.current.querySelectorAll(".char-span");
    if (!chars.length) return;

    // Initial state: dim characters with 3D perspective tilt
    gsap.set(chars, {
      opacity: 0.15,
      color: "rgba(255, 255, 255, 0.15)",
    });

    gsap.set(headingRef.current, {
      rotateX: 24,
      translateY: 10,
      transformPerspective: 1100,
      transformOrigin: "center center",
      backfaceVisibility: "hidden",
    });

    // Pinned ScrollTrigger: Locks stage in viewport for 120vh of scroll distance
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: pinTrackRef.current,
        start: "top top",
        end: "+=120%",
        pin: stageRef.current,
        scrub: 0.8,
        anticipatePin: 1,
      },
    });

    // Animate characters from 0.15 opacity to 1.0 bright white
    tl.to(chars, {
      opacity: 1,
      color: "#FFFFFF",
      stagger: {
        each: 0.04,
        from: "start",
        ease: "power2.out",
      },
      duration: 1.2,
    });

    // Smoothly level 3D perspective as text illuminates
    tl.to(
      headingRef.current,
      {
        rotateX: 0,
        translateY: 0,
        ease: "power1.out",
        duration: 1.2,
      },
      0
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === pinTrackRef.current) {
          trigger.kill();
        }
      });
    };
  }, []);

  const words = text.split(" ");

  return (
    <div
      id="perspective-scroll-track"
      ref={pinTrackRef}
      className={`relative w-full h-[220vh] bg-black ${containerClassName}`}
    >
      {/* Pinned Stage that stays centered in viewport during scroll */}
      <div
        ref={stageRef}
        className="w-full h-screen flex items-center justify-center overflow-hidden px-6 sm:px-10 md:px-16 select-none"
        style={{
          perspective: "1100px",
          perspectiveOrigin: "50% 50%",
        }}
      >
        {/* Subtle dark ambient glow */}
        <div className="absolute w-[600px] h-[350px] bg-neutral-900/30 rounded-full blur-[120px] pointer-events-none" />

        <h2
          ref={headingRef}
          aria-label={text}
          className={`relative z-10 text-white leading-[1.08] font-geist font-normal text-3xl sm:text-5xl md:text-[64px] lg:text-[76px] tracking-[-0.035em] text-center max-w-[860px] mx-auto my-0 will-change-transform ${className}`}
          style={{
            fontFamily: "'Geist', 'Inter', -apple-system, sans-serif",
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
                  className="char-span inline-block transition-colors duration-150"
                  style={{
                    opacity: 0.15,
                    color: "rgba(255, 255, 255, 0.15)",
                    willChange: "opacity, color",
                  }}
                >
                  {char}
                </span>
              ))}
            </span>
          ))}
        </h2>
      </div>
    </div>
  );
}
