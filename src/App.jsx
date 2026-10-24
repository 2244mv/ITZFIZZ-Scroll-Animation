import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./components/Header";
import Hero from "./components/Hero";
import StorySection from "./components/StorySection";
import Footer from "./components/Footer";
import { useMotionPreference } from "./hooks/useMotionPreference";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const appRef = useRef(null);
  const reduceMotion = useMotionPreference();

  useLayoutEffect(() => {
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      const intro = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      intro
        .from(".brand, .desktop-nav a, .header-cta, .menu-button", {
          y: -14,
          opacity: 0,
          duration: 0.65,
          stagger: 0.07,
        })
        .from(".eyebrow", { y: 16, opacity: 0, duration: 0.6 }, "-=0.2")
        .from(
          ".headline-line > span",
          {
            yPercent: 110,
            rotateX: -12,
            opacity: 0,
            duration: 1,
            stagger: 0.13,
            transformOrigin: "50% 100%",
          },
          "-=0.2",
        )
        .from(
          ".hero-description, .hero-note",
          { y: 20, opacity: 0, duration: 0.65, stagger: 0.12 },
          "-=0.45",
        )
        .from(
          ".stat-card",
          {
            y: 20,
            opacity: 0,
            duration: 0.55,
            stagger: 0.1,
          },
          "-=0.35",
        )
        .from(
          ".visual-caption, .scroll-cue, .hero-index",
          { y: 10, opacity: 0, duration: 0.5, stagger: 0.08 },
          "-=0.3",
        );

      const heroScroll = {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        invalidateOnRefresh: true,
      };

     
gsap.to(".car-wrap", {
  x: () =>
    window.innerWidth <= 700
      ? window.innerWidth * 0.04
      : window.innerWidth * 0.12,
  y: () => (window.innerWidth <= 700 ? -18 : -55),
  rotate: -2,
  scale: 0.88,
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: 0.6,
    invalidateOnRefresh: true,
  },
});

ScrollTrigger.refresh();


      gsap.to(".road-glow", {
        scaleX: 1.7,
        opacity: 1,
        ease: "none",
        scrollTrigger: heroScroll,
      });

      gsap.to(".road-dashes", {
        xPercent: -18,
        ease: "none",
        scrollTrigger: heroScroll,
      });

      gsap.to(".hero-background-orb", {
        y: 100,
        x: -35,
        scale: 1.15,
        ease: "none",
        scrollTrigger: heroScroll,
      });

      gsap.to(".scroll-cue", {
        opacity: 0,
        y: 12,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "18% top",
          scrub: true,
        },
      });

      gsap.from(".story-heading .reveal-line", {
        yPercent: 100,
        opacity: 0,
        duration: 0.85,
        stagger: 0.12,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".story-heading",
          start: "top 82%",
          once: true,
        },
      });

      gsap.from(".story-card", {
        y: 35,
        opacity: 0,
        duration: 0.75,
        stagger: 0.14,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".story-grid",
          start: "top 82%",
          once: true,
        },
      });

      gsap.from(".story-footer", {
        y: 20,
        opacity: 0,
        duration: 0.65,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".story-footer",
          start: "top 90%",
          once: true,
        },
      });
    }, appRef);

    return () => ctx.revert();
  }, [reduceMotion]);

  return (
    <main ref={appRef} className="site-shell">
      <section className="hero" id="home">
        <div className="hero-background-orb" aria-hidden="true" />
        <div className="hero-grid-overlay" aria-hidden="true" />
        <Header />
        <Hero />
      </section>

      <StorySection />
      <Footer />
    </main>
  );
}
