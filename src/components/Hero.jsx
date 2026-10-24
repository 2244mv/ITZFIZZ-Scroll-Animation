import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import CarIllustration from "./CarIllustration";
import Stats from "./Stats";

export default function Hero() {
  return (
    <>
      <div className="hero-content">
        <div className="eyebrow">
          <span className="eyebrow-dot" />
          <span>INDEPENDENT DIGITAL DESIGN STUDIO</span>
          <span className="eyebrow-year">EST. 2026</span>
        </div>

        <h1 className="headline" aria-label="Welcome Itz Fizz">
          <span className="headline-line">
            <span>WELCOME</span>
          </span>

          <span className="headline-line headline-second">
            <span>
              ITZ<span className="headline-accent">FIZZ</span>
              <i className="headline-star" aria-hidden="true">
                ✳
              </i>
            </span>
          </span>
        </h1>

        <div className="hero-bottom">
          <div className="hero-copy">
            <p className="hero-description">
              We turn bold ideas into
              <br className="desktop-break" /> experiences that move.
            </p>

            <a className="hero-note" href="#experience">
              DISCOVER OUR APPROACH
              <span>
                <ArrowUpRight size={15} />
              </span>
            </a>
          </div>

          <Stats />
        </div>
      </div>

      <div className="visual-stage" aria-hidden="true">
        <div className="visual-caption caption-left">
          <span>01 / MOTION STUDY</span>
          <span>ENGINEERED TO FEEL</span>
        </div>

        <div className="scene-coordinate scene-coordinate-left">28° 36′ N</div>

        <div className="road">
          <div className="road-glow" />
          <div className="road-line" />
          <div className="road-dashes">
            {Array.from({ length: 8 }, (_, index) => (
              <i key={index} />
            ))}
          </div>
        </div>

        <div className="car-wrap">
          <div className="car-aura" />
          <CarIllustration />
        </div>

        <div className="visual-caption caption-right">
          <span>FORM FOLLOWS FEELING</span>
          <span>SCROLL TO SHIFT THE SCENE</span>
        </div>
      </div>

      <a className="scroll-cue" href="#experience">
        <span className="scroll-icon">
          <ArrowDownRight size={17} />
        </span>
        <span>SCROLL TO EXPLORE</span>
      </a>

      <div className="hero-index">
        <span>01</span>
        <span className="hero-index-track">
          <i />
        </span>
        <span>03</span>
      </div>
    </>
  );
}
