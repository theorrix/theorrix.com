import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description:
    "The requested page could not be found. Return to the Theorrix homepage to explore technology tutorials, system design, and AI resources.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  const currentYear = 2026;

  return (
    <div className="nf-wrapper">
      {/* Navigation Masthead */}
      <header className="navbar">
        <div className="container navbar-inner">
          <div className="brand-wrap">
            <Link href="/" className="brand-link" aria-label="Theorrix Homepage">
              <Image
                src="/media/logo.webp"
                alt="Theorrix"
                width={124}
                height={24}
                priority
                className="brand-logo-img"
              />
            </Link>
          </div>

          <div className="nav-actions">
            <Link href="/" className="btn btn-secondary">
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </header>

      {/* 404 Main Section */}
      <main className="nf-main container">
        <div className="nf-card">
          <div className="nf-badge">
            <Image
              src="/media/symbol.webp"
              alt=""
              width={15}
              height={15}
              className="hero-badge-symbol"
            />
            <span>404 // ROUTE_NOT_FOUND</span>
          </div>

          <h1 className="nf-title">Page Not Found</h1>

          <p className="nf-desc">
            The page or route you requested does not exist on this server. It
            may have been renamed, moved, or temporarily decommissioned. You can
            safely navigate back to our canonical homepage or explore our core
            learning areas below.
          </p>

          <div className="nf-actions">
            <Link href="/" className="btn btn-primary">
              <span>Return to Homepage</span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>

            <Link href="/#learning-areas" className="btn btn-secondary">
              <span>Explore Curriculum</span>
            </Link>

            <Link href="/#platforms" className="btn btn-secondary">
              <span>Official Directory</span>
            </Link>
          </div>

          <div className="nf-console">
            <div className="nf-console-row">
              <span className="nf-console-label">HTTP_STATUS</span>
              <span className="nf-console-val">404 (Not Found)</span>
            </div>
            <div className="nf-console-row">
              <span className="nf-console-label">DOMAIN</span>
              <span className="nf-console-val">theorrix.com</span>
            </div>
            <div className="nf-console-row">
              <span className="nf-console-label">RECOVERY</span>
              <span className="nf-console-val">Redirect to /</span>
            </div>
          </div>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="footer" style={{ marginTop: 0 }}>
        <div className="footer-top-accent" aria-hidden="true" />
        <div className="container footer-bar">
          <div className="footer-bar-left">
            <span className="footer-copy">
              &copy; {currentYear} Theorrix. All rights reserved.
            </span>
            <span className="footer-bar-divider" aria-hidden="true">
              &bull;
            </span>
            <span className="footer-bar-tagline">
              From Nothing to Something.
            </span>
          </div>

          <div className="footer-bar-right">
            <span className="footer-domain-badge">theorrix.com</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

