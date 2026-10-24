import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <a className="brand" href="#home" aria-label="ITZFIZZ home">
        <span className="brand-mark">i</span>
        <span>
          ITZFIZZ<span className="brand-dot">.</span>
        </span>
      </a>

      <span className="footer-credit">
        AN INTERACTIVE MOTION CONCEPT · 2026
      </span>

      <a className="footer-top-link" href="#home">
        BACK TO TOP <ArrowUpRight size={15} />
      </a>
    </footer>
  );
}
