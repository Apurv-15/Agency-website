import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AgencyServicesPage from "./components/AgencyServicesPage";
import AiInfrastructureLanding from "./components/AiInfrastructureLanding";
import CloudVideoScrubSection from "./components/CloudVideoScrubSection";
import AboutMeily from "./components/AboutMeily";
import PerspectiveTextReveal from "./components/PerspectiveTextReveal";
import ClientReviews from "./components/ClientReviews";
import FooterCTA from "./components/FooterCTA";
import TransitionReveal from "./components/TransitionReveal";
import ProjectsBento from "./components/ProjectsBento";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    // Initialize Lenis Smooth Scrolling with Official GSAP Ticker Synchronization
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    // Update ScrollTrigger on Lenis scroll
    lenis.on("scroll", ScrollTrigger.update);

    // Sync Lenis frame updates directly to GSAP's central animation ticker
    const updateLenis = (time: number) => {
      try {
        lenis.raf(time * 1000);
      } catch (err) {
        // Safe guard against RAF calls after unmount
      }
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    // Dynamic background color changer using IntersectionObserver
    const container = document.getElementById("color-changer");
    const sections = container?.querySelectorAll("[data-bg]");

    let observer: IntersectionObserver | null = null;

    if (container && sections && sections.length > 0) {
      const observerOptions = {
        root: null,
        threshold: 0.25,
      };

      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targetColor = entry.target.getAttribute("data-bg");
            if (targetColor) {
              container.style.backgroundColor = targetColor;
            }
          }
        });
      }, observerOptions);

      sections.forEach((section) => observer?.observe(section));
    }

    return () => {
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <main
      id="color-changer"
      className="min-h-screen text-text-primary selection:bg-neutral-800 selection:text-white font-geist transition-colors duration-700 ease-in-out bg-[#FAF9F6]"
      style={{ transition: "background-color 0.8s cubic-bezier(0.4, 0, 0.2, 1)" }}
    >
      {/* Section 1: Temporarily hidden - Black Agency Office → iMac Zoom Landing Hero */}
      {/* 
      <section data-bg="#050505" className="w-full">
        <AiInfrastructureLanding />
      </section>
      */}

      {/* Section 1 (Now Primary Hero): Cloud Video Scrub Section */}
      <section data-bg="#FAF9F6" className="w-full">
        <CloudVideoScrubSection />
      </section>

      {/* Section 3: Master Agency Services Bento (Dedicated Naturally Scrollable Section) */}
      <section data-bg="#FAF9F6" className="w-full" id="services">
        <AgencyServicesPage />
      </section>

      {/* Section 4: Selected Work (6-Card Bento Showcase) */}
      <section data-bg="#FAF9F6" className="w-full" id="projects">
        <ProjectsBento />
      </section>

      {/* Section 4: Video Transition Reveal (Clean White) */}
      <section data-bg="#FFFFFF" className="w-full">
        <TransitionReveal />
      </section>

      {/* Section 5: Meet Apurv / About (Deep Dark Slate) */}
      <section data-bg="#0B0C0E" className="w-full" id="about">
        <div id="about-meily">
          <AboutMeily />
        </div>
      </section>

      {/* Section 6: Perspective 3D Text Reveal ("Building products that customers love...") */}
      <section data-bg="#000000" className="w-full min-h-screen flex items-center justify-center">
        <PerspectiveTextReveal
          text="Building products that customers love isn’t magic, it requires:"
          perspective={1100}
          initialRotateX={28}
          scrubSpeed={1}
        />
      </section>

      {/* Section 7: Client Reviews (Obsidian Dark) */}
      <section data-bg="#0F1115" className="w-full">
        <ClientReviews />
      </section>

      {/* Section 8: Contact & Footer CTA (Clean White) */}
      <section data-bg="#FFFFFF" className="w-full" id="contact">
        <FooterCTA />
      </section>
    </main>
  );
}

