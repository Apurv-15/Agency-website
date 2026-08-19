/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";
import Lenis from "lenis";
import Hero from "./components/Hero";
import ShowcaseGrid from "./components/ShowcaseGrid";
import AboutMeily from "./components/AboutMeily";
import DesignProcess from "./components/DesignProcess";
import ClientReviews from "./components/ClientReviews";
import FooterCTA from "./components/FooterCTA";

export default function App() {
  useEffect(() => {
    // Initialize Lenis Smooth Scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    let animationFrameId: number;

    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return (
    <main className="min-h-screen bg-black text-white selection:bg-neutral-800 selection:text-white">
      {/* Page 1: Landing Hero */}
      <Hero />

      {/* Page 2: Showcase Grid / Gallery with Asymmetric Masonry Layout */}
      <ShowcaseGrid />

      {/* Page 3: Meet Meily / About & Experience */}
      <div id="about-meily">
        <AboutMeily />
      </div>

      {/* Page 4: Design Process Section */}
      <DesignProcess />

      {/* Page 5: Client Reviews & Stats Section */}
      <ClientReviews />

      {/* Page 6: Contact & Footer CTA with Silk Smoke Wave Background */}
      <FooterCTA />
    </main>
  );
}




