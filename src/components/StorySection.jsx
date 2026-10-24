import { ArrowUpRight, MoveUpRight, Orbit, Sparkles } from "lucide-react";

const cards = [
  {
    number: "01 — INTENTION",
    symbol: MoveUpRight,
    title: (
      <>
        Made to
        <br />
        make you feel.
      </>
    ),
    copy: "Great design does more than look good. It creates a feeling that stays with you.",
    theme: "dark",
    tag: "THE FIRST IMPRESSION",
  },
  {
    number: "02 — MOMENTUM",
    symbol: Orbit,
    title: (
      <>
        Always
        <br />
        in motion.
      </>
    ),
    copy: "From the first frame to the final detail, every interaction has a purpose and a pulse.",
    theme: "green",
    tag: "THE ENERGY",
  },
  {
    number: "03 — IMPACT",
    symbol: Sparkles,
    title: (
      <>
        Designed
        <br />
        to matter.
      </>
    ),
    copy: "Thoughtful digital experiences turn a quick glance into a lasting connection.",
    theme: "light",
    tag: "THE AFTER EFFECT",
  },
];

export default function StorySection() {
  return (
    <section className="story" id="experience">
      <div className="story-topline">
        <span>THE ART OF MOVEMENT</span>
        <span>CHAPTER / 002</span>
      </div>

      <div className="story-heading-wrap">
        <p className="section-kicker">
          <span className="eyebrow-dot" />
          LESS ORDINARY. MORE EXTRAORDINARY.
        </p>

        <div className="story-title-row">
          <h2 className="story-heading">
            <span className="reveal-line">Make every</span>
            <span className="reveal-line">
              <em>moment</em> move.
            </span>
          </h2>

          <p className="story-intro">
            We create digital experiences with a point of view — considered in
            every detail, remembered long after.
          </p>
        </div>
      </div>

      <div className="story-grid">
        {cards.map((card) => {
          const Symbol = card.symbol;

          return (
            <article
              className={`story-card story-card-${card.theme}`}
              key={card.number}
            >
              <div className="card-topline">
                <span className="card-number">{card.number}</span>
                <span className="card-arrow">
                  <ArrowUpRight size={18} />
                </span>
              </div>

              <div className="card-symbol">
                <Symbol size={28} strokeWidth={1.4} />
              </div>

              <h3>{card.title}</h3>
              <p>{card.copy}</p>

              <span className="card-tag">{card.tag}</span>
            </article>
          );
        })}
      </div>

      <div className="story-footer" id="contact">
        <div>
          <span className="story-footer-kicker">HAVE A GOOD IDEA?</span>
          <p>Let's give it some momentum.</p>
        </div>

        <a href="mailto:hello@itzfizz.example">
          LET'S MAKE IT MOVE <ArrowUpRight size={19} />
        </a>
      </div>
    </section>
  );
}
