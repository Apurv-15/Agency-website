import React, { useEffect } from "react";

export default function AiInfrastructureLanding() {
  useEffect(() => {
    const stage = document.getElementById("stage");
    const burger = document.getElementById("burger");
    const menu = document.getElementById("menu");
    const menuLinks = document.querySelectorAll(".menu-link");
    const video = document.querySelector(".plate-video") as HTMLVideoElement | null;

    if (video) {
      const playVideo = () => {
        const promise = video.play();
        if (promise !== undefined) {
          promise.catch(() => {});
        }
      };
      video.addEventListener("canplay", playVideo);
      window.addEventListener("load", playVideo);
      document.addEventListener("visibilitychange", () => {
        if (!document.hidden) playVideo();
      });
      playVideo();
    }

    function toggleMenu(forceClose?: boolean) {
      if (!stage || !burger || !menu) return;
      const willOpen = forceClose ? false : !stage.classList.contains("is-open");

      stage.classList.toggle("is-open", willOpen);
      burger.setAttribute("aria-expanded", willOpen ? "true" : "false");
      menu.setAttribute("aria-hidden", willOpen ? "false" : "true");
      burger.setAttribute("aria-label", willOpen ? "Close navigation menu" : "Open navigation menu");
    }

    const onBurgerClick = () => toggleMenu();
    if (burger) burger.addEventListener("click", onBurgerClick);

    const onLinkClick = () => toggleMenu(true);
    menuLinks.forEach((link) => link.addEventListener("click", onLinkClick));

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && stage && stage.classList.contains("is-open")) {
        toggleMenu(true);
      }
    };
    window.addEventListener("keydown", onKeyDown);

    const onResize = () => {
      if (window.innerWidth / window.innerHeight > 1.1 && stage && stage.classList.contains("is-open")) {
        toggleMenu(true);
      }
    };
    window.addEventListener("resize", onResize);

    return () => {
      if (burger) burger.removeEventListener("click", onBurgerClick);
      menuLinks.forEach((link) => link.removeEventListener("click", onLinkClick));
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="ai-stage-root w-full h-screen h-[100dvh] overflow-hidden bg-[#050505] text-[#fafafa] font-['Manrope'] select-none">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap');

        .ai-stage-root {
          --ink: #fafafa;
          --muted: #a7a6a6;
          --nav: #b6b5b5;
          --strip: #8b8a8a;
          --pill: #ffffff;
          --pill-ink: #050505;
          --stage-black: #050505;

          --u: calc(100vh / 1058);
          --uw: calc(100vw / 1487);
          --h: clamp(var(--u), calc(var(--u) * 0.65 + var(--uw) * 0.35), calc(var(--u) * 1.16));
          font-family: 'Manrope', system-ui, -apple-system, 'Segoe UI', sans-serif;
          text-rendering: geometricPrecision;
          -webkit-font-smoothing: antialiased;
        }

        @supports (height: 100dvh) {
          .ai-stage-root {
            --u: calc(100dvh / 1058);
          }
        }

        .stage {
          position: relative;
          width: 100%;
          height: 100%;
          height: 100dvh;
          overflow: hidden;
          background: var(--stage-black);
        }

        .plate {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
          pointer-events: none;
        }

        .plate-video {
          position: absolute;
          left: 50%;
          top: calc(1 * var(--u));
          width: calc(1492 * var(--u));
          height: calc(1054 * var(--u));
          transform: translateX(calc(-50% - calc(0.5 * var(--u))));
          object-fit: cover;
          pointer-events: none;
          background-color: var(--stage-black);
        }

        .plate::after {
          content: "";
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
          background-image: 
            linear-gradient(to bottom,
              rgba(5, 5, 5, 0) 78.8%,
              rgba(5, 5, 5, 0.23) 79.6%,
              rgba(5, 5, 5, 0.45) 81.4%,
              rgba(5, 5, 5, 0.75) 83.3%,
              rgba(5, 5, 5, 0.84) 85.2%,
              rgba(5, 5, 5, 0.888) 88%,
              rgba(5, 5, 5, 0.905) 91%,
              rgba(5, 5, 5, 0.96) 95%,
              #050505 100%),
            linear-gradient(to right,
              #050505 calc(50% - calc(746 * var(--u))),
              transparent calc(50% - calc(676 * var(--u))),
              transparent calc(50% + calc(676 * var(--u))),
              #050505 calc(50% + calc(746 * var(--u))));
        }

        .topbar {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: calc(100 * var(--u));
          z-index: 10;
          pointer-events: auto;
        }

        .brand {
          position: absolute;
          left: calc(75 * var(--u));
          top: calc(27 * var(--u));
          width: calc(31.5 * var(--u));
          height: calc(48.5 * var(--u));
          display: block;
          z-index: 12;
          transition: opacity 0.2s ease;
        }
        .brand:hover {
          opacity: 0.85;
        }

        .links {
          position: absolute;
          left: 50%;
          top: calc(51 * var(--u));
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          z-index: 11;
        }

        .links a {
          font-size: calc(19.0 * var(--u));
          font-weight: 400;
          color: var(--nav);
          transition: color 0.25s ease;
          white-space: nowrap;
        }

        .links a:hover {
          color: var(--ink);
        }

        .links a + a {
          margin-left: calc(24.5 * var(--u));
        }
        .links a:nth-child(3) {
          margin-left: calc(23.5 * var(--u));
        }
        .links a:nth-child(4) {
          margin-left: calc(26.0 * var(--u));
        }

        .pill-nav {
          position: absolute;
          right: calc(75.4 * var(--u));
          top: calc(27 * var(--u));
          width: calc(175 * var(--u));
          height: calc(49 * var(--u));
          background: var(--pill);
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--pill-ink);
          font-size: calc(20.6 * var(--u));
          font-weight: 500;
          z-index: 12;
          transition: opacity 0.25s ease, transform 0.25s ease;
        }

        .pill-nav span {
          transform: translateY(calc(1 * var(--u)));
          display: inline-block;
        }

        .pill-nav:hover {
          opacity: 0.92;
          transform: translateY(calc(-1 * var(--u)));
        }

        .burger {
          display: none;
        }

        .hero {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 5;
        }

        .headline {
          position: absolute;
          left: calc(75.5 * var(--u));
          top: calc(230.5 * var(--u));
          font-size: calc(71.6 * var(--h));
          line-height: calc(80.5 * var(--h));
          font-weight: 400;
          letter-spacing: calc(0.3 * var(--h));
          color: var(--ink);
          white-space: nowrap;
        }

        .headline span {
          display: block;
        }

        .sub {
          position: absolute;
          left: calc(75.5 * var(--u));
          top: calc(230.5 * var(--u) + calc(189.0 * var(--h)));
          font-size: calc(20.7 * var(--h));
          line-height: calc(23.5 * var(--h));
          font-weight: 400;
          word-spacing: calc(1.8 * var(--h));
          color: var(--muted);
          white-space: nowrap;
        }

        .sub span {
          display: block;
        }

        .actions {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .pill-cta {
          position: absolute;
          left: calc(74.9 * var(--u));
          top: calc(230.5 * var(--u) + calc(264.5 * var(--h)));
          min-width: calc(185.0 * var(--h));
          padding: 0 calc(24.0 * var(--h));
          height: calc(50.0 * var(--h));
          background: var(--pill);
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--pill-ink);
          font-size: calc(20.0 * var(--h));
          font-weight: 500;
          pointer-events: auto;
          transition: opacity 0.25s ease, transform 0.25s ease;
        }

        .pill-cta span {
          transform: translateY(calc(0.8 * var(--h)));
          display: inline-block;
        }

        .pill-cta:hover {
          opacity: 0.92;
          transform: translateY(calc(-1.5 * var(--h)));
        }

        .ghost {
          position: absolute;
          left: calc(74.9 * var(--u) + calc(240.0 * var(--h)));
          top: calc(230.5 * var(--u) + calc(279.5 * var(--h)));
          font-size: calc(20.6 * var(--h));
          font-weight: 500;
          letter-spacing: calc(0.12 * var(--h));
          color: #ffffff;
          pointer-events: auto;
          white-space: nowrap;
          transition: opacity 0.25s ease, transform 0.25s ease;
        }

        .ghost:hover {
          opacity: 0.8;
          transform: translateX(calc(2 * var(--h)));
        }

        .logos {
          position: absolute;
          width: calc(741 * var(--u));
          left: 50%;
          top: 0;
          height: 100%;
          transform: translateX(calc(-50% + calc(20 * var(--u))));
          pointer-events: none;
          color: var(--strip);
          z-index: 5;
        }

        .lg {
          position: absolute;
          display: flex;
          align-items: center;
          pointer-events: auto;
          color: var(--strip);
          transition: color 0.25s ease;
        }

        .lg:hover {
          color: #d1d0d0;
        }

        .lg svg {
          fill: currentColor;
          stroke: currentColor;
        }

        .lg-text {
          font-family: 'IpsumMark', 'Manrope', sans-serif;
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 1;
          display: inline-block;
          white-space: nowrap;
          color: currentColor;
        }

        .lg1 {
          left: calc(-0.5 * var(--u));
          top: calc(994.7 * var(--u));
        }
        .lg1 svg {
          width: calc(30.5 * var(--u));
          height: calc(31.0 * var(--u));
        }
        .lg1 .lg-text {
          margin-left: calc(6.5 * var(--u));
          font-size: calc(18.1 * var(--u));
          transform: translateY(calc(-0.5 * var(--u)));
        }

        .lg2 {
          left: calc(206.5 * var(--u));
          top: calc(995.7 * var(--u));
        }
        .lg2 svg {
          width: calc(24.5 * var(--u));
          height: calc(30.0 * var(--u));
        }
        .lg2 .lg-text {
          margin-left: calc(6.5 * var(--u));
          font-size: calc(18.5 * var(--u));
          transform: translateY(calc(-0.5 * var(--u)));
        }
        .lg2 .dot {
          display: inline-block;
          width: 0.09em;
          height: 0.09em;
          background: currentColor;
          border-radius: 50%;
          vertical-align: 0.62em;
          margin-left: 0.06em;
        }

        .lg3 {
          left: calc(416.5 * var(--u));
          top: calc(996.7 * var(--u));
        }
        .lg3 svg {
          width: calc(28.5 * var(--u));
          height: calc(28.0 * var(--u));
        }
        .lg3 .lg-text {
          margin-left: calc(6.5 * var(--u));
          font-size: calc(16.15 * var(--u));
          transform: translateY(calc(-0.5 * var(--u)));
        }

        .lg4 {
          left: calc(620.5 * var(--u));
          top: calc(998.7 * var(--u));
        }
        .lg4 svg {
          width: calc(28.5 * var(--u));
          height: calc(25.5 * var(--u));
        }
        .lg4 .lg-text {
          margin-left: calc(8.5 * var(--u));
          font-size: calc(15.3 * var(--u));
          transform: translateY(calc(-0.5 * var(--u)));
        }

        .menu {
          display: none;
        }

        @media (prefers-reduced-motion: no-preference) {
          @keyframes rise {
            from {
              opacity: 0;
              transform: translateY(calc(14 * var(--u)));
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes riseNav {
            from {
              opacity: 0;
              transform: translate(-50%, calc(-50% + calc(14 * var(--u))));
            }
            to {
              opacity: 1;
              transform: translate(-50%, -50%);
            }
          }

          @keyframes fade {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          .brand {
            animation: rise 0.8s cubic-bezier(0.22, 1, 0.36, 1) both;
          }
          .links {
            animation: riseNav 0.8s cubic-bezier(0.22, 1, 0.36, 1) both;
          }
          .pill-nav {
            animation: rise 0.8s cubic-bezier(0.22, 1, 0.36, 1) both;
          }
          .headline {
            animation: rise 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.06s both;
          }
          .sub {
            animation: rise 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.14s both;
          }
          .pill-cta {
            animation: rise 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.22s both;
          }
          .ghost {
            animation: rise 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.22s both;
          }
          .lg {
            animation: fade 1.1s ease 0.34s both;
          }
        }

        @media (max-aspect-ratio: 11/10) {
          .ai-stage-root {
            --m: min(calc(100vw / 430), 1.34px);
            --u: var(--m);
            --h: var(--m);
          }

          .stage {
            height: auto;
            min-height: 100vh;
            min-height: 100dvh;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: calc(28 * var(--m)) calc(24 * var(--m)) calc(36 * var(--m));
            padding-top: max(calc(28 * var(--m)), env(safe-area-inset-top));
            padding-bottom: max(calc(36 * var(--m)), env(safe-area-inset-bottom));
            padding-left: max(calc(24 * var(--m)), env(safe-area-inset-left));
            padding-right: max(calc(24 * var(--m)), env(safe-area-inset-right));
          }

          .plate-video {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            transform: none;
            left: 0;
            top: 0;
            object-fit: cover;
            object-position: 43% center;
          }

          .plate::after {
            background-image: 
              linear-gradient(to right,
                rgba(5, 5, 5, 0.86) 0%,
                rgba(5, 5, 5, 0.66) 42%,
                rgba(5, 5, 5, 0.20) 78%,
                rgba(5, 5, 5, 0.10) 100%),
              linear-gradient(to bottom,
                rgba(5, 5, 5, 0.72) 0%,
                rgba(5, 5, 5, 0.34) 24%,
                rgba(5, 5, 5, 0.34) 56%,
                rgba(5, 5, 5, 0.80) 82%,
                rgba(5, 5, 5, 0.97) 94%,
                #050505 100%);
          }

          .topbar {
            position: relative;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            z-index: 100;
          }

          .brand {
            position: relative;
            left: 0;
            top: 0;
            width: calc(28 * var(--m));
            height: calc(43 * var(--m));
          }

          .links, .pill-nav {
            display: none !important;
          }

          .burger {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: calc(5 * var(--m));
            width: calc(46 * var(--m));
            height: calc(46 * var(--m));
            background: rgba(255, 255, 255, 0.06);
            border: 1px solid rgba(255, 255, 255, 0.14);
            border-radius: 999px;
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            z-index: 110;
          }

          .burger i {
            display: block;
            width: calc(18 * var(--m));
            height: calc(1.6 * var(--m));
            background: var(--ink);
            border-radius: 2px;
            transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), background-color 0.2s;
            transform-origin: center;
          }

          .stage.is-open .burger i:first-child {
            transform: translateY(calc(3.3 * var(--m))) rotate(45deg);
          }
          .stage.is-open .burger i:last-child {
            transform: translateY(calc(-3.3 * var(--m))) rotate(-45deg);
          }

          .menu {
            display: flex;
            position: fixed;
            inset: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(to bottom, rgba(5, 5, 5, 0.96), rgba(5, 5, 5, 0.98));
            backdrop-filter: blur(28px);
            -webkit-backdrop-filter: blur(28px);
            z-index: 90;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.42s cubic-bezier(0.22, 1, 0.36, 1), visibility 0.42s;
            pointer-events: none;
          }

          .stage.is-open .menu {
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
          }

          .menu-inner {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: calc(100 * var(--m)) calc(28 * var(--m)) calc(48 * var(--m));
          }

          .menu-eyebrow {
            font-size: calc(12 * var(--m));
            color: var(--muted);
            text-transform: uppercase;
            letter-spacing: 0.1em;
            opacity: 0;
            transform: translateY(calc(10 * var(--m)));
            transition: opacity 0.35s ease, transform 0.35s ease;
          }

          .menu-list {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: calc(20 * var(--m));
            margin: auto 0;
          }

          .menu-list li {
            opacity: 0;
            transform: translateY(calc(14 * var(--m)));
            transition: opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1), transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
          }

          .menu-list a {
            font-size: clamp(25px, calc(31 * var(--m)), 36px);
            font-weight: 500;
            color: var(--ink);
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          .menu-list a::after {
            content: "→";
            font-size: 0.85em;
            color: var(--muted);
            transition: transform 0.2s ease;
          }

          .menu-list a:hover::after {
            transform: translateX(4px);
          }

          .menu-foot {
            display: flex;
            flex-direction: column;
            gap: calc(14 * var(--m));
            opacity: 0;
            transform: translateY(calc(12 * var(--m)));
            transition: opacity 0.4s ease, transform 0.4s ease;
          }

          .menu-foot .pill-cta {
            position: relative;
            left: 0;
            top: 0;
            width: 100%;
            height: calc(52 * var(--m));
            font-size: calc(17 * var(--m));
          }

          .menu-foot .ghost {
            position: relative;
            left: 0;
            top: 0;
            text-align: center;
            font-size: calc(16 * var(--m));
            padding: calc(8 * var(--m)) 0;
          }

          .stage.is-open .menu-eyebrow {
            opacity: 1;
            transform: translateY(0);
            transition-delay: 0.06s;
          }
          .stage.is-open .menu-list li:nth-child(1) {
            opacity: 1;
            transform: translateY(0);
            transition-delay: 0.10s;
          }
          .stage.is-open .menu-list li:nth-child(2) {
            opacity: 1;
            transform: translateY(0);
            transition-delay: 0.16s;
          }
          .stage.is-open .menu-list li:nth-child(3) {
            opacity: 1;
            transform: translateY(0);
            transition-delay: 0.22s;
          }
          .stage.is-open .menu-list li:nth-child(4) {
            opacity: 1;
            transform: translateY(0);
            transition-delay: 0.28s;
          }
          .stage.is-open .menu-foot {
            opacity: 1;
            transform: translateY(0);
            transition-delay: 0.34s;
          }

          .hero {
            position: relative;
            inset: auto;
            width: 100%;
            height: auto;
            margin: calc(44 * var(--m)) 0;
          }

          .headline {
            position: relative;
            left: 0;
            top: 0;
            font-size: clamp(34px, calc(44 * var(--m)), 54px);
            line-height: 1.12;
            letter-spacing: -0.02em;
            white-space: normal;
          }

          .headline span {
            display: inline;
          }

          .sub {
            position: relative;
            left: 0;
            top: 0;
            margin-top: calc(16 * var(--m));
            font-size: clamp(15px, calc(17.5 * var(--m)), 20px);
            line-height: 1.45;
            white-space: normal;
            word-spacing: normal;
            max-width: calc(360 * var(--m));
          }

          .sub span {
            display: inline;
          }

          .actions {
            position: relative;
            inset: auto;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: calc(18 * var(--m));
            margin-top: calc(32 * var(--m));
          }

          .pill-cta {
            position: relative;
            left: 0;
            top: 0;
            width: auto;
            padding: 0 calc(32 * var(--m));
            height: calc(48 * var(--m));
            font-size: calc(16.5 * var(--m));
          }

          .ghost {
            position: relative;
            left: 0;
            top: 0;
            font-size: calc(16.5 * var(--m));
            padding-left: calc(4 * var(--m));
          }

          .logos {
            position: relative;
            left: 0;
            top: 0;
            width: 100%;
            transform: none;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: calc(20 * var(--m)) calc(16 * var(--m));
            margin-top: auto;
            padding-top: calc(28 * var(--m));
          }

          .lg {
            position: relative;
            left: 0 !important;
            top: 0 !important;
          }

          .lg1 svg, .lg2 svg, .lg3 svg, .lg4 svg {
            width: calc(22 * var(--m));
            height: calc(22 * var(--m));
          }

          .lg-text {
            font-size: calc(14 * var(--m)) !important;
            margin-left: calc(6 * var(--m)) !important;
          }
        }

        @media (min-width: 600px) and (max-aspect-ratio: 11/10) {
          .ai-stage-root {
            --m: min(calc(100vw / 860), calc(100vh / 760), 1.25px);
            --u: var(--m);
            --h: var(--m);
          }

          .plate-video {
            object-position: 44% center;
          }

          .plate::after {
            background-image: 
              linear-gradient(to right,
                rgba(5, 5, 5, 0.84) 0%,
                rgba(5, 5, 5, 0.60) 42%,
                rgba(5, 5, 5, 0.16) 78%,
                rgba(5, 5, 5, 0.06) 100%),
              linear-gradient(to bottom,
                rgba(5, 5, 5, 0.66) 0%,
                rgba(5, 5, 5, 0.28) 24%,
                rgba(5, 5, 5, 0.30) 56%,
                rgba(5, 5, 5, 0.78) 82%,
                rgba(5, 5, 5, 0.96) 94%,
                #050505 100%);
          }

          .headline span {
            display: block;
          }

          .sub span {
            display: block;
          }

          .actions {
            flex-direction: row;
            align-items: center;
            gap: calc(24 * var(--m));
          }

          .logos {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation: none !important;
            transition-duration: 0.001s !important;
          }
        }
      `}</style>

      <div className="stage" id="stage">
        {/* BACKGROUND PLATE & CLOUDFRONT VIDEO */}
        <div className="plate">
          <video className="plate-video" autoPlay muted loop playsInline preload="auto" aria-hidden="true">
            <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260808_112712_da9d53df-6d27-4b12-bdf6-aa9dc2622bdf.mp4" type="video/mp4" />
          </video>
        </div>

        {/* TOPBAR / NAVIGATION */}
        <header className="topbar">
          <a href="#" className="brand" aria-label="Home">
            <svg viewBox="0 0 31.5 48.5" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="bg1_react" x1="8" y1="0" x2="34.1" y2="28.9" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#9e9e9e" />
                  <stop offset="0.28" stopColor="#a6a6a6" />
                  <stop offset="0.34" stopColor="#a3a3a3" />
                  <stop offset="0.40" stopColor="#3a3a3a" />
                  <stop offset="0.55" stopColor="#414141" />
                  <stop offset="0.60" stopColor="#7a7a7a" />
                  <stop offset="0.68" stopColor="#8e8e8e" />
                  <stop offset="0.80" stopColor="#a9a9a9" />
                  <stop offset="0.95" stopColor="#c4c4c4" />
                  <stop offset="1" stopColor="#cccccc" />
                </linearGradient>
              </defs>
              <path d="M21.5 0 L21.5 19.5 L31.5 19.5 L31.5 29 L10 48.5 L10 28.5 L0.5 28.5 L0.5 18.5 Z" fill="url(#bg1_react)" />
              <rect x="0.5" y="18.5" width="9" height="10" fill="#fdfdfd" />
              <rect x="22" y="19.5" width="9.5" height="9.5" fill="#fdfdfd" />
            </svg>
          </a>

          <nav className="links" aria-label="Primary">
            <a href="#services">Services</a>
            <a href="#projects">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="#services" className="pill-nav">
            <span>Explore Services</span>
          </a>

          <button className="burger" id="burger" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="menu">
            <i />
            <i />
          </button>
        </header>

        {/* MOBILE MENU OVERLAY */}
        <nav className="menu" id="menu" aria-label="Mobile Navigation" aria-hidden="true">
          <div className="menu-inner">
            <p className="menu-eyebrow">Menu</p>
            <ul className="menu-list">
              <li><a href="#services" className="menu-link">Services</a></li>
              <li><a href="#projects" className="menu-link">Work</a></li>
              <li><a href="#about" className="menu-link">About</a></li>
              <li><a href="#contact" className="menu-link">Contact</a></li>
            </ul>
            <div className="menu-foot">
              <a href="#services" className="pill-cta menu-link"><span>Explore Services</span></a>
              <a href="#projects" className="ghost menu-link">View Selected Work</a>
            </div>
          </div>
        </nav>

        {/* HERO CONTENT */}
        <main className="hero">
          <h1 className="headline">
            <span>Websites That Turn</span>
            <span>Visitors Into Clients</span>
          </h1>

          <p className="sub">
            <span>We build high-converting websites and digital experiences</span>
            <span>that establish instant trust and grow your revenue on autopilot.</span>
          </p>

          <div className="actions">
            <a href="#contact" className="pill-cta">
              <span>Get More Clients</span>
            </a>
            <a href="#projects" className="ghost">
              See Our Results →
            </a>
          </div>
        </main>

        {/* PARTNER LOGOS STRIP */}
        <div className="logos" aria-label="Partner Brands">
          <div className="lg lg1">
            <svg viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="bite1_react" maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="31">
                <rect width="30" height="31" fill="white" />
                <circle cx="19.5" cy="10.5" r="5.1" fill="black" />
              </mask>
              <rect x="2" y="2.5" width="26" height="26" rx="4" stroke="currentColor" strokeWidth="3" mask="url(#bite1_react)" />
              <circle cx="19.5" cy="10.5" r="3.2" fill="currentColor" />
            </svg>
            <span className="lg-text">logoipsum</span>
          </div>

          <div className="lg lg2">
            <svg viewBox="0 0 25 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1.5" y="2" width="7" height="26" rx="3.5" fill="currentColor" />
              <path d="M12.5 15C12.5 8.37 17.87 3 24.5 3V27C17.87 27 12.5 21.63 12.5 15Z" fill="currentColor" />
            </svg>
            <span className="lg-text">logoipsum<span className="dot" /></span>
          </div>

          <div className="lg lg3">
            <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="14" cy="14" r="12.35" stroke="currentColor" strokeWidth="3.1" />
              <path d="M7 14C7 10.13 10.13 7 14 7C17.87 7 21 10.13 21 14" stroke="currentColor" strokeWidth="3.1" strokeLinecap="round" />
            </svg>
            <span className="lg-text">logoipsum</span>
          </div>

          <div className="lg lg4">
            <svg viewBox="0 0 28 25.5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 10.5C6 4 10 4 14 10.5C18 17 22 17 26 10.5V5.5C22 12 18 12 14 5.5C10 -1 6 -1 2 5.5V10.5Z" fill="currentColor" />
              <path d="M2 17.5C6 11 10 11 14 17.5C18 24 22 24 26 17.5" stroke="currentColor" strokeWidth="3.05" strokeLinecap="round" />
              <path d="M2 23.5C6 17 10 17 14 23.5C18 30 22 30 26 23.5" stroke="currentColor" strokeWidth="3.05" strokeLinecap="round" />
            </svg>
            <span className="lg-text">logoipsum</span>
          </div>
        </div>
      </div>
    </div>
  );
}
