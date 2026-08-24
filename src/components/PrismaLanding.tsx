import React, { useEffect } from "react";

export default function PrismaLanding() {
  useEffect(() => {
    // 1. VIDEO PLAYBACK FALLBACK
    const video = document.getElementById("bgVideo") as HTMLVideoElement | null;
    if (video) {
      const startVideo = () => {
        const promise = video.play();
        if (promise !== undefined) {
          promise.catch(() => {});
        }
      };

      video.addEventListener("canplay", startVideo);
      window.addEventListener("load", startVideo);
      document.addEventListener("visibilitychange", () => {
        if (!document.hidden) startVideo();
      });
      startVideo();
    }

    // 2. SCROLL REVEALS INTERSECTION OBSERVER
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!prefersReducedMotion && "IntersectionObserver" in window) {
      const revealElements = document.querySelectorAll(".reveal");

      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-revealed");
              obs.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.14,
          rootMargin: "0px 0px -8% 0px",
        }
      );

      revealElements.forEach((el) => observer.observe(el));

      return () => {
        observer.disconnect();
      };
    } else {
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-revealed"));
    }
  }, []);

  return (
    <div className="prisma-scope relative min-h-screen bg-[#0d0b09] text-[#f3efe6] overflow-x-hidden select-none">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter+Tight:wght@500;600&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap');

        .prisma-scope {
          --bg-dark: #0d0b09;
          --text-cream: #f3efe6;
          --text-soft: rgba(243, 239, 230, 0.7);
          --text-dim: rgba(243, 239, 230, 0.46);
          --hairline: rgba(243, 239, 230, 0.16);
          --hairline-subtle: rgba(243, 239, 230, 0.08);
          --glass-fill: rgba(243, 239, 230, 0.05);
          --glass-hover: rgba(243, 239, 230, 0.12);
          --font-display: 'Inter Tight', -apple-system, BlinkMacSystemFont, sans-serif;
          --font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          --font-mono: 'JetBrains Mono', monospace;
          font-family: var(--font-body);
        }

        .bg-video-wrapper {
          position: sticky;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          z-index: 0;
          pointer-events: none;
          margin-bottom: -100vh;
        }

        .bg-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
          background-color: var(--bg-dark);
        }

        .scrim {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          pointer-events: none;
          background: 
            linear-gradient(to bottom, 
              rgba(13, 11, 9, 0.72) 0%, 
              rgba(13, 11, 9, 0.22) 18%, 
              rgba(13, 11, 9, 0.04) 45%, 
              rgba(13, 11, 9, 0.08) 65%, 
              rgba(13, 11, 9, 0.45) 85%, 
              rgba(13, 11, 9, 0.82) 100%),
            radial-gradient(circle at center, transparent 40%, rgba(13, 11, 9, 0.55) 100%);
        }

        .vignette {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 2;
          pointer-events: none;
          box-shadow: inset 0 0 220px 70px rgba(13, 11, 9, 0.75);
        }

        .page-container {
          position: relative;
          z-index: 10;
          width: 100%;
        }

        .nav-bar {
          position: sticky;
          top: 0;
          left: 0;
          width: 100%;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 50;
          padding: 0 40px;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          background: rgba(13, 11, 9, 0.4);
          border-bottom: 1px solid rgba(243, 239, 230, 0.06);
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 36px;
          list-style: none;
        }

        .nav-link {
          font-family: var(--font-body);
          font-size: 13.5px;
          font-weight: 500;
          letter-spacing: -0.01em;
          color: var(--text-soft);
          transition: color 0.25s ease, transform 0.25s ease;
          cursor: pointer;
        }

        .nav-link:hover {
          color: var(--text-cream);
        }

        .hero-section {
          width: 100%;
          height: 100vh;
          min-height: 700px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 0 clamp(24px, 5vw, 72px) clamp(36px, 6vh, 64px);
          position: relative;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: flex-end;
          gap: clamp(32px, 5vw, 80px);
          width: 100%;
          max-width: 1560px;
          margin: 0 auto;
        }

        .hero-title {
          font-family: var(--font-display);
          font-size: clamp(72px, 12.8vw, 196px);
          font-weight: 500;
          line-height: 0.86;
          letter-spacing: -0.045em;
          color: var(--text-cream);
          text-transform: none;
          display: inline-flex;
          align-items: flex-start;
        }

        .asterisk {
          font-size: 0.42em;
          line-height: 1;
          margin-left: 0.04em;
          margin-top: -0.08em;
          color: var(--text-cream);
          font-weight: 400;
        }

        .hero-right {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          max-width: 420px;
          padding-bottom: clamp(6px, 1.2vh, 18px);
        }

        .hero-sub {
          font-family: var(--font-body);
          font-size: clamp(14px, 1.05vw, 16px);
          font-weight: 400;
          line-height: 1.55;
          color: var(--text-soft);
          letter-spacing: -0.01em;
          margin-bottom: 28px;
        }

        .cta-pill {
          display: inline-flex;
          align-items: center;
          gap: 16px;
          padding: 7px 8px 7px 22px;
          background: var(--glass-fill);
          border: 1px solid var(--hairline);
          border-radius: 9999px;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          color: var(--text-cream);
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 500;
          letter-spacing: -0.01em;
          cursor: pointer;
          transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), 
                      background 0.3s ease, 
                      border-color 0.3s ease;
          text-decoration: none;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.25);
        }

        .cta-pill:hover {
          transform: translateY(-2px);
          background: var(--glass-hover);
          border-color: rgba(243, 239, 230, 0.32);
        }

        .cta-circle {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: var(--text-cream);
          color: var(--bg-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);
          flex-shrink: 0;
        }

        .cta-circle svg {
          width: 14px;
          height: 14px;
          stroke-width: 2.2;
          transition: transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .cta-pill:hover .cta-circle {
          transform: rotate(45deg);
        }

        .section-pillars {
          width: 100%;
          max-width: 1560px;
          margin: 0 auto;
          padding: clamp(100px, 14vh, 160px) clamp(24px, 5vw, 72px) clamp(80px, 10vh, 120px);
        }

        .eyebrow {
          font-family: var(--font-mono);
          font-size: 11.5px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--text-dim);
          margin-bottom: 20px;
          display: block;
        }

        .section-title {
          font-family: var(--font-display);
          font-size: clamp(32px, 4.5vw, 56px);
          font-weight: 500;
          line-height: 1.08;
          letter-spacing: -0.035em;
          color: var(--text-cream);
          max-width: 720px;
          margin-bottom: 18px;
        }

        .section-lead {
          font-family: var(--font-body);
          font-size: clamp(15px, 1.2vw, 18px);
          font-weight: 400;
          line-height: 1.55;
          color: var(--text-soft);
          letter-spacing: -0.015em;
          max-width: 580px;
          margin-bottom: clamp(48px, 7vh, 72px);
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(18px, 2.2vw, 32px);
        }

        .card {
          background: rgba(243, 239, 230, 0.03);
          border: 1px solid var(--hairline);
          border-radius: 20px;
          padding: clamp(28px, 3.5vw, 44px);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 280px;
          transition: background 0.3s ease, border-color 0.3s ease, transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .card:hover {
          background: rgba(243, 239, 230, 0.06);
          border-color: rgba(243, 239, 230, 0.28);
          transform: translateY(-3px);
        }

        .card-step {
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.08em;
          color: var(--text-dim);
          margin-bottom: 32px;
        }

        .card-heading {
          font-family: var(--font-display);
          font-size: clamp(20px, 1.8vw, 26px);
          font-weight: 500;
          line-height: 1.2;
          letter-spacing: -0.025em;
          color: var(--text-cream);
          margin-bottom: 12px;
        }

        .card-copy {
          font-family: var(--font-body);
          font-size: 14.5px;
          font-weight: 400;
          line-height: 1.55;
          color: var(--text-soft);
          letter-spacing: -0.01em;
        }

        .quote-band {
          width: 100%;
          border-top: 1px solid var(--hairline);
          border-bottom: 1px solid var(--hairline);
          background: rgba(13, 11, 9, 0.35);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          padding: clamp(80px, 12vh, 140px) clamp(24px, 5vw, 72px);
          text-align: center;
        }

        .quote-container {
          max-width: 1080px;
          margin: 0 auto;
        }

        .quote-text {
          font-family: var(--font-display);
          font-size: clamp(26px, 3.8vw, 52px);
          font-weight: 500;
          line-height: 1.2;
          letter-spacing: -0.035em;
          color: var(--text-cream);
        }

        .closing-section {
          width: 100%;
          max-width: 1560px;
          margin: 0 auto;
          padding: clamp(100px, 14vh, 160px) clamp(24px, 5vw, 72px) clamp(48px, 6vh, 64px);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .closing-heading {
          font-family: var(--font-display);
          font-size: clamp(40px, 6.2vw, 84px);
          font-weight: 500;
          line-height: 1.05;
          letter-spacing: -0.04em;
          color: var(--text-cream);
          margin-bottom: 36px;
        }

        .footer-row {
          width: 100%;
          margin-top: clamp(80px, 12vh, 130px);
          padding-top: 28px;
          border-top: 1px solid var(--hairline-subtle);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }

        .footer-wordmark {
          font-family: var(--font-display);
          font-size: 19px;
          font-weight: 500;
          letter-spacing: -0.03em;
          color: var(--text-cream);
        }

        .footer-copy {
          font-family: var(--font-mono);
          font-size: 11.5px;
          color: var(--text-dim);
          letter-spacing: 0.02em;
        }

        .footer-links {
          display: flex;
          align-items: center;
          gap: 28px;
          list-style: none;
        }

        .footer-link {
          font-family: var(--font-body);
          font-size: 13px;
          color: var(--text-dim);
          transition: color 0.2s ease;
        }

        .footer-link:hover {
          color: var(--text-cream);
        }

        @keyframes blurFadeUp {
          0% {
            opacity: 0;
            filter: blur(18px);
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            filter: blur(0px);
            transform: translateY(0px);
          }
        }

        .rise {
          opacity: 0;
          animation: blurFadeUp 1s cubic-bezier(0.2, 0.7, 0.2, 1) forwards;
          will-change: transform, opacity, filter;
        }

        .delay-nav-1 { animation-delay: 0ms; }
        .delay-nav-2 { animation-delay: 70ms; }
        .delay-nav-3 { animation-delay: 140ms; }
        .delay-nav-4 { animation-delay: 210ms; }
        .delay-nav-5 { animation-delay: 280ms; }

        .delay-h1  { animation-delay: 400ms; }
        .delay-sub { animation-delay: 560ms; }
        .delay-cta { animation-delay: 700ms; }

        .reveal {
          opacity: 0;
          transform: translateY(26px);
          transition: opacity 0.85s cubic-bezier(0.2, 0.7, 0.2, 1),
                      transform 0.85s cubic-bezier(0.2, 0.7, 0.2, 1);
          will-change: transform, opacity;
        }

        .reveal.is-revealed {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 900px) {
          .nav-links {
            display: none;
          }

          .hero-section {
            height: auto;
            min-height: 100vh;
            padding-top: 100px;
            padding-bottom: 56px;
          }

          .hero-grid {
            grid-template-columns: 1fr;
            align-items: flex-start;
            gap: 36px;
          }

          .hero-title {
            font-size: clamp(64px, 17vw, 110px);
          }

          .hero-right {
            max-width: 100%;
            padding-bottom: 0;
          }

          .cards-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .card {
            min-height: auto;
          }

          .footer-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation: none !important;
            transition: none !important;
          }
          .rise, .reveal {
            opacity: 1 !important;
            filter: none !important;
            transform: none !important;
          }
          .cta-pill:hover,
          .cta-pill:hover .cta-circle,
          .card:hover {
            transform: none !important;
          }
        }
      `}</style>

      {/* STICKY FULL-VIEWPORT BACKGROUND VIDEO & OVERLAYS */}
      <div className="bg-video-wrapper">
        <video
          className="bg-video"
          id="bgVideo"
          src="https://zxdefgavgwfxastwmmjm.supabase.co/storage/v1/object/public/assets/prisma.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="scrim" />
        <div className="vignette" />
      </div>

      {/* MAIN PAGE CONTENT SCROLLING ABOVE IT */}
      <div className="page-container">
        {/* TOP NAVIGATION */}
        <header className="nav-bar">
          <nav aria-label="Main Navigation">
            <ul className="nav-links">
              <li className="rise delay-nav-1"><a href="#story" className="nav-link">Our story</a></li>
              <li className="rise delay-nav-2"><a href="#collective" className="nav-link">Collective</a></li>
              <li className="rise delay-nav-3"><a href="#workshops" className="nav-link">Workshops</a></li>
              <li className="rise delay-nav-4"><a href="#programs" className="nav-link">Programs</a></li>
              <li className="rise delay-nav-5"><a href="#inquiries" className="nav-link">Inquiries</a></li>
            </ul>
          </nav>
        </header>

        {/* SCREEN 1: 100VH CINEMATIC HERO */}
        <section className="hero-section" id="hero">
          <div className="hero-grid">
            {/* Bottom-Left Enormous Wordmark */}
            <div className="hero-left">
              <h1 className="hero-title rise delay-h1">
                Greffon<span className="asterisk">*</span>
              </h1>
            </div>

            {/* Bottom-Right Sub-line & Glass CTA */}
            <div className="hero-right">
              <p className="hero-sub rise delay-sub">
                Greffon is a worldwide network of visual artists, filmmakers and storytellers — bound not by place or scene, but by a shared belief in the power of an unusual perspective.
              </p>

              <a href="#join" className="cta-pill rise delay-cta" aria-label="Join the lab">
                <span>Join the lab</span>
                <span className="cta-circle" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
