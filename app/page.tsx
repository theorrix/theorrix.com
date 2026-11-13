import Image from "next/image";

export default function Home() {
  const currentYear = 2026;

  const learningAreas = [
    {
      number: "01",
      title: "Full-Stack Development",
      graphic: "/media/graphics/fullstack.svg",
      desc: "Understand modern frontend, backend, and API development through clear, end-to-end practical projects.",
      clarification:
        "We teach core full-stack principles across multiple languages, frameworks, and environments—adapting the stack to the problem rather than locking into a single tool.",
    },
    {
      number: "02",
      title: "System Design",
      graphic: "/media/graphics/systems.svg",
      desc: "Learn how real-world, scalable, and resilient software architectures are planned, structured, and maintained in production.",
      clarification:
        "Explores distributed architectures, database models, caching strategies, messaging queues, and practical reliability trade-offs.",
    },
    {
      number: "03",
      title: "Artificial Intelligence",
      graphic: "/media/graphics/ai.svg",
      desc: "Explore modern AI foundations, intelligent agents, neural architectures, and practical engineering implementations.",
      clarification:
        "Bridges mathematical foundations with hands-on development, from model interactions and embeddings to autonomous agent workflows.",
    },
  ];

  const futureAreas = [
    "Data Structures & Algorithms",
    "Programming Fundamentals",
    "Backend Development",
    "Frontend Engineering",
    "Database Management",
    "DevOps & Cloud Computing",
    "Computer Science Fundamentals",
    "Software Engineering",
  ];

  const platforms = [
    {
      name: "GitHub",
      handle: "github.com/theorrix",
      desc: "Open-source projects, code examples, and practical repositories.",
      url: "https://github.com/theorrix",
      icon: "/media/social/github.svg",
      invertIcon: true,
    },
    {
      name: "YouTube",
      handle: "youtube.com/@theorrix",
      desc: "Video tutorials, project walkthroughs, and in-depth tech explanations.",
      url: "https://youtube.com/@theorrix",
      icon: "/media/social/youtube.svg",
      invertIcon: false,
    },
    {
      name: "Instagram",
      handle: "@theorrix",
      desc: "Visual guides, bite-sized tech concepts, and learning updates.",
      url: "https://instagram.com/theorrix",
      icon: "/media/social/instagram.svg",
      invertIcon: false,
    },
    {
      name: "LinkedIn",
      handle: "company/theorrix",
      desc: "Articles, professional insights, and platform announcements.",
      url: "https://linkedin.com/company/theorrix",
      icon: "/media/social/linkedin.svg",
      invertIcon: false,
    },
    {
      name: "X",
      handle: "@theorrix",
      desc: "Quick tips, technology discussions, and updates.",
      url: "https://x.com/theorrix",
      icon: "/media/social/x.svg",
      invertIcon: true,
    },
    {
      name: "Reddit",
      handle: "u/theorrix",
      desc: "Community discussions, tech insights, and shared resources.",
      url: "https://reddit.com/user/theorrix",
      icon: "/media/social/reddit.svg",
      invertIcon: false,
    },
    {
      name: "Threads",
      handle: "@theorrix",
      desc: "Casual tech discussions, ideas, and learning updates.",
      url: "https://threads.net/@theorrix",
      icon: "/media/social/threads.svg",
      invertIcon: true,
    },
  ];

  return (
    <>
      {/* SECTION 1: NAVIGATION */}
      <header className="navbar">
        <div className="container navbar-inner">
          <div className="brand-wrap">
            <a href="/" className="brand-link" aria-label="Theorrix Homepage">
              <Image
                src="/media/logo.webp"
                alt="Theorrix"
                width={124}
                height={24}
                priority
                className="brand-logo-img"
              />
            </a>
          </div>

          <nav className="nav-links" aria-label="Main Navigation">
            <a href="#" className="nav-item">
              Home
            </a>
            <a href="#learning-areas" className="nav-item">
              Learning Areas
            </a>
            <a href="#platforms" className="nav-item">
              Platforms
            </a>
            <a href="#about" className="nav-item">
              About
            </a>
            <a href="#contact" className="nav-item">
              Contact
            </a>
          </nav>

          <div className="nav-actions">
            <a
              href="https://github.com/theorrix"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-github-btn"
              aria-label="Theorrix on GitHub"
            >
              <Image
                src="/media/social/github.svg"
                alt=""
                width={14}
                height={14}
                className="nav-github-icon"
              />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </header>

      <main className="container">
        {/* SECTION 2: HERO SECTION */}
        <section className="hero">
          <div className="hero-grid">
            <div className="hero-main">
              <div className="hero-badge">
                <Image
                  src="/media/symbol.webp"
                  alt=""
                  width={15}
                  height={15}
                  className="hero-badge-symbol"
                />
                <span>Theorrix &mdash; From Nothing to Something</span>
              </div>

              <h1 className="hero-heading">
                Learn technology.
                <br />
                Build real things.
                <br />
                <span className="hero-heading-highlight">Grow your skills.</span>
              </h1>

              <p className="hero-description">
                Explore programming, software development, system design,
                artificial intelligence, and much more through simple explanations
                and practical examples.
              </p>

              <p className="hero-supporting">
                From Nothing to Something &mdash; from understanding foundational
                basics to building production-grade architectures, Theorrix helps
                you master technology one step at a time.
              </p>

              <div className="hero-actions">
                <a href="#platforms" className="btn btn-primary">
                  <span>Explore Our Platforms</span>
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
                    <path d="M7 17 17 7M7 7h10v10" />
                  </svg>
                </a>

                <a href="#learning-areas" className="btn btn-secondary">
                  <span>Explore Learning Areas</span>
                </a>
              </div>
            </div>

            <div className="hero-visual-card">
              <Image
                src="/media/graphics/hero-abstract.svg"
                alt="Theorrix isometric architecture coordinate diagram"
                width={380}
                height={260}
                priority
                className="hero-visual-img"
              />
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* SECTION 3: LEARNING AREAS */}
        <section id="learning-areas">
          <div className="section-header">
            <div className="section-label">Curriculum &amp; Exploration</div>
            <h2 className="section-heading">Explore What You Can Learn</h2>
            <p className="section-desc">
              Discover different areas of technology, develop new skills, and learn
              at your own pace.
            </p>
          </div>

          <div className="learning-grid">
            {learningAreas.map((area) => (
              <article key={area.number} className="learning-card">
                <div className="learning-card-top">
                  <span className="learning-number">{area.number}</span>
                  <div className="learning-icon-frame">
                    <Image
                      src={area.graphic}
                      alt={`${area.title} architectural diagram`}
                      width={32}
                      height={32}
                      className="learning-icon-img"
                    />
                  </div>
                </div>

                <h3 className="learning-title">{area.title}</h3>
                <p className="learning-desc">{area.desc}</p>
                <p className="learning-clarification">{area.clarification}</p>
              </article>
            ))}
          </div>

          {/* Extensible Design Note */}
          <div className="expansion-callout">
            <div className="expansion-info">
              <span className="expansion-title">
                More Learning Areas Coming Soon
              </span>
              <span className="expansion-desc">
                Theorrix continuously expands across foundational and emerging
                technology disciplines:
              </span>
            </div>
            <div className="expansion-tags">
              {futureAreas.map((area) => (
                <span key={area} className="expansion-tag">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* SECTION 4: FIND THEORRIX ONLINE (HIGH PRIORITY) */}
        <section id="platforms">
          <div className="section-header">
            <div className="section-label">Official Directory</div>
            <h2 className="section-heading">Find Theorrix Online</h2>
            <p className="section-desc">
              Follow us for tutorials, practical projects, learning resources, and
              the latest updates across our official platforms.
            </p>
          </div>

          <div className="platforms-grid">
            {platforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="platform-card"
                aria-label={`Visit Theorrix on ${platform.name}`}
              >
                <div className="platform-icon-frame">
                  <Image
                    src={platform.icon}
                    alt=""
                    width={22}
                    height={22}
                    className={`platform-icon-img ${
                      platform.invertIcon ? "icon-invert" : ""
                    }`}
                  />
                </div>

                <div className="platform-content">
                  <div className="platform-head">
                    <span className="platform-name">{platform.name}</span>
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="platform-arrow"
                      aria-hidden="true"
                    >
                      <path d="M7 17 17 7M7 7h10v10" />
                    </svg>
                  </div>
                  <span className="platform-handle">{platform.handle}</span>
                  <p className="platform-desc">{platform.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <div className="divider" />

        {/* SECTION 5: ABOUT THEORRIX */}
        <section id="about">
          <div className="about-box">
            <div className="about-watermark" aria-hidden="true">
              <Image
                src="/media/symbol.webp"
                alt=""
                width={220}
                height={220}
                className="about-watermark-img"
              />
            </div>
            <div className="section-label">Platform Overview</div>
            <h2 className="about-title">About Theorrix</h2>
            <div className="about-body">
              <p>
                Theorrix is an online learning platform built on a singular conviction:{" "}
                <strong style={{ color: "var(--text-primary)" }}>
                  From Nothing to Something.
                </strong>{" "}
                We deconstruct technology into clear, approachable concepts so
                anyone with curiosity can learn to build real, working software.
              </p>
              <p>
                We share practical tutorials, end-to-end projects, and architectural
                knowledge across full-stack development, system design, and artificial
                intelligence. Our goal is simple: make learning technology easier,
                clearer, and more accessible for everyone.
              </p>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* SECTION 6: CONTACT */}
        <section id="contact" className="contact-section">
          <div className="contact-info">
            <div className="section-label">Direct Communication</div>
            <h2 className="contact-title">Let&apos;s Connect</h2>
            <p className="contact-desc">
              Have a question, an idea, or want to collaborate? We&apos;d love to
              hear from you.
            </p>
          </div>

          <a
            href="mailto:theorrixhq@gmail.com"
            className="email-button"
            aria-label="Send email to theorrixhq@gmail.com"
          >
            <span className="email-dot" />
            <span>theorrixhq@gmail.com</span>
            <svg
              width="13"
              height="13"
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
          </a>
        </section>
      </main>

      {/* SECTION 7: FOOTER */}
      <footer className="footer">
        <div className="footer-top-accent" aria-hidden="true" />
        <div className="container">
          <div className="footer-grid">
            {/* Column 1: Brand & Direct Inquiries */}
            <div className="footer-brand-pane">
              <div className="footer-brand-header">
                <a href="/" aria-label="Theorrix Homepage">
                  <Image
                    src="/media/logo.webp"
                    alt="Theorrix"
                    width={124}
                    height={24}
                    className="footer-logo-img"
                  />
                </a>
              </div>

              <p className="footer-mission">
                Theorrix &mdash; From Nothing to Something. An independent online
                technology learning platform exploring modern software engineering,
                scalable architectures, and practical artificial intelligence.
              </p>

              <div className="footer-contact-card">
                <div className="footer-contact-header">
                  <span className="footer-contact-label">Direct Communication</span>
                  <div className="footer-contact-status">
                    <span className="email-dot" />
                    <span>Open</span>
                  </div>
                </div>
                <a
                  href="mailto:theorrixhq@gmail.com"
                  className="footer-contact-link"
                  aria-label="Send email to theorrixhq@gmail.com"
                >
                  <span>theorrixhq@gmail.com</span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="footer-contact-arrow"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2: Platform Index */}
            <div className="footer-col">
              <div className="footer-col-header">
                <span className="footer-col-num">01</span>
                <span>Navigation</span>
              </div>
              <ul className="footer-links-list">
                <li>
                  <a href="#" className="footer-nav-link">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#learning-areas" className="footer-nav-link">
                    Learning Areas
                  </a>
                </li>
                <li>
                  <a href="#platforms" className="footer-nav-link">
                    Platforms
                  </a>
                </li>
                <li>
                  <a href="#about" className="footer-nav-link">
                    About Theorrix
                  </a>
                </li>
                <li>
                  <a href="#contact" className="footer-nav-link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Curriculum Tracks */}
            <div className="footer-col">
              <div className="footer-col-header">
                <span className="footer-col-num">02</span>
                <span>Curriculum</span>
              </div>
              <ul className="footer-links-list">
                <li>
                  <a href="#learning-areas" className="footer-nav-link">
                    Full-Stack Development
                  </a>
                </li>
                <li>
                  <a href="#learning-areas" className="footer-nav-link">
                    System Design
                  </a>
                </li>
                <li>
                  <a href="#learning-areas" className="footer-nav-link">
                    Artificial Intelligence
                  </a>
                </li>
                <li>
                  <a href="#learning-areas" className="footer-nav-link">
                    Algorithms &amp; Systems
                  </a>
                </li>
                <li>
                  <span className="footer-nav-link-subtle">
                    More tracks coming soon
                  </span>
                </li>
              </ul>
            </div>

            {/* Column 4: Official Community & Social Directory */}
            <div className="footer-col">
              <div className="footer-col-header">
                <span className="footer-col-num">03</span>
                <span>Channels</span>
              </div>
              <ul className="footer-channels-list">
                {platforms.map((p) => (
                  <li key={p.name}>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-channel-link"
                      aria-label={`Open Theorrix on ${p.name}`}
                    >
                      <div className="footer-channel-left">
                        <div className="footer-channel-icon-wrap">
                          <Image
                            src={p.icon}
                            alt=""
                            width={14}
                            height={14}
                            className={`footer-channel-icon ${
                              p.invertIcon ? "icon-invert" : ""
                            }`}
                          />
                        </div>
                        <span className="footer-channel-name">{p.name}</span>
                      </div>
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="footer-channel-arrow"
                        aria-hidden="true"
                      >
                        <path d="M7 17 17 7M7 7h10v10" />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer Bar */}
          <div className="footer-bar">
            <div className="footer-bar-left">
              <span className="footer-copy">
                &copy; {currentYear} Theorrix. All rights reserved.
              </span>
              <span className="footer-bar-divider" aria-hidden="true">
                &bull;
              </span>
              <span className="footer-bar-tagline">
                Theorrix &mdash; From Nothing to Something.
              </span>
            </div>

            <div className="footer-bar-right">
              <span className="footer-domain-badge">theorrix.com</span>
              <a href="#" className="footer-back-to-top" aria-label="Back to top">
                <span>Back to top</span>
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 19V5M5 12l7-7 7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
