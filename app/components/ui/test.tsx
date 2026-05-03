import React, { useMemo, useState } from "react";

const projects = [
  {
    no: "01",
    title: "kupidtv",
    type: 'launch film · "the call"',
    year: "2026",
    thumb: "thumb-a",
    challenge: "Turn a new product launch into a clear cinematic story that feels premium without over-explaining the product.",
    idea: "A restrained launch film built around tension, reveal, and one memorable visual device: the call.",
    deliverables: ["Launch film", "Cutdowns", "Social teasers", "Founder narrative"],
  },
  {
    no: "02",
    title: "euphoria.finance",
    type: 'product spot · "a new way to trade"',
    year: "2025",
    thumb: "thumb-b",
    challenge: "Introduce a trading product with energy, clarity, and taste while avoiding the usual noisy web3 tropes.",
    idea: "A fast, tactile product spot mixing interface moments, cinematic transitions, and a bold VO-led narrative.",
    deliverables: ["Product spot", "Paid ads", "Launch assets", "Motion system"],
  },
  {
    no: "03",
    title: "klever wallet",
    type: "brand ad · web3 / polkadot",
    year: "2025",
    thumb: "thumb-c",
    challenge: "Make a technical wallet ecosystem feel simple, credible, and visually distinctive.",
    idea: "A brand film using abstract security metaphors, minimal typography, and calm product storytelling.",
    deliverables: ["Brand ad", "Explainer cut", "Motion direction", "Campaign edits"],
  },
  {
    no: "04",
    title: "audrey",
    type: 'brand film · "this is audrey"',
    year: "2025",
    thumb: "thumb-d",
    challenge: "Give a new AI product a human, elegant introduction without making it feel generic or overproduced.",
    idea: "A soft, editorial brand film centered on voice, pacing, and simple visual metaphors for intelligence.",
    deliverables: ["Brand film", "Website hero film", "Shorts", "Script development"],
  },
];

const budgets = ["Select Budget", "Under $4000", "$4000–$6000", "$6000–$10000+ (with shooting)"];

function Thumbnail({ variant, large = false }) {
  return <div className={`thumb ${large ? "thumb-large" : ""} ${variant}`} aria-hidden="true" />;
}

function CaseStudy({ project }) {
  if (!project) return null;

  return (
    <section id="case-study" className="case-study reveal-section">
      <div className="section-rule" />
      <div className="case-label"><span>03</span><span>/</span><span>Case Study</span></div>
      <div className="case-grid">
        <div className="case-media">
          <Thumbnail variant={project.thumb} large />
        </div>
        <div className="case-content">
          <div className="case-meta">{project.no} · {project.year}</div>
          <h2>{project.title}</h2>
          <p className="case-type">{project.type}</p>
          <div className="case-columns">
            <div>
              <h3>Challenge</h3>
              <p>{project.challenge}</p>
            </div>
            <div>
              <h3>Direction</h3>
              <p>{project.idea}</p>
            </div>
          </div>
          <div className="deliverables">
            {project.deliverables.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectForm() {
  const [budget, setBudget] = useState(budgets[0]);
  const [open, setOpen] = useState(false);

  return (
    <section id="start" className="start-project reveal-section">
      <div className="section-rule" />
      <div className="form-kicker"><span>05</span><span>/</span><span>Start a Project</span></div>
      <div className="form-grid">
        <div className="form-copy">
          <h2>Let’s build<br /><span>something memorable.</span></h2>
          <p>Tell us about your product, launch goals, and creative direction. We’ll shape a film designed to move people.</p>
        </div>

        <form className="project-form" onSubmit={(e) => e.preventDefault()}>
          <label>
            <span>Name</span>
            <input type="text" placeholder="Your Name" />
          </label>
          <label>
            <span>Email</span>
            <input type="email" placeholder="Email Address" />
          </label>
          <div className="field-block">
            <span className="field-label">Budget</span>
            <button className="budget-select" type="button" onClick={() => setOpen(!open)}>
              {budget}
              <span>{open ? "↑" : "↓"}</span>
            </button>
            {open && (
              <div className="budget-menu">
                {budgets.map((item) => (
                  <button
                    type="button"
                    key={item}
                    onClick={() => { setBudget(item); setOpen(false); }}
                    className={budget === item ? "selected" : ""}
                  >
                    {budget === item ? "✓ " : ""}{item}
                  </button>
                ))}
              </div>
            )}
          </div>
          <label>
            <span>Project Brief</span>
            <textarea placeholder="Describe your project..." rows={5} />
          </label>
          <button className="submit-btn" type="submit">Send Inquiry →</button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="footer reveal-section">
      <div className="section-rule" />
      <div className="footer-kicker"><span>06</span><span>/</span><span>Contact</span></div>
      <div className="footer-grid">
        <div>
          <p className="footer-small">Creative Direction · Launch Films</p>
          <h2>iee studios</h2>
          <a href="mailto:inspireelevateevolve@gmail.com">✉ inspireelevateevolve@gmail.com</a>
          <a href="https://x.com/madtirth" target="_blank" rel="noreferrer">𝕏 @madtirth</a>
        </div>
        <p className="copyright">© 2026 IEE Studios</p>
      </div>
    </footer>
  );
}

export default function IeeStudiosLandingPage() {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const featured = useMemo(() => projects, []);

  const openCaseStudy = (project) => {
    setActiveProject(project);
    window.requestAnimationFrame(() => {
      document.getElementById("case-study")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <main className="page-shell">
      <style>{`
        :root {
          --page: #f8f8f5;
          --ink: #050505;
          --muted: rgba(5, 5, 5, 0.54);
          --soft: rgba(5, 5, 5, 0.36);
          --hairline: rgba(5, 5, 5, 0.16);
          --rail: 72px;
          --gutter: clamp(28px, 5.4vw, 92px);
          --content-start: calc(var(--rail) + var(--gutter));
          --content-end: clamp(28px, 5.4vw, 92px);
          --ease: cubic-bezier(.16, 1, .3, 1);
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; background: var(--page); }

        .page-shell {
          min-height: 100vh;
          background: var(--page);
          color: var(--ink);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          -webkit-font-smoothing: antialiased;
          text-rendering: geometricPrecision;
          overflow-x: hidden;
        }

        a, button, input, textarea { font: inherit; }
        button { cursor: pointer; }
        ::selection { background: #000; color: #fff; }

        .site-header {
          height: 92px;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          padding-left: var(--content-start);
          padding-right: var(--content-end);
          position: relative;
          z-index: 10;
          background: transparent;
        }

        .brand {
          justify-self: start;
          color: var(--ink);
          text-decoration: none;
          font-size: 23px;
          font-weight: 650;
          letter-spacing: -0.055em;
          line-height: 1;
        }

        .nav {
          display: flex;
          align-items: center;
          gap: clamp(34px, 4vw, 58px);
          font-size: 14px;
          font-weight: 540;
          letter-spacing: -0.035em;
        }

        .nav a,
        .view-all,
        .case-link { color: var(--ink); text-decoration: none; }
        .nav a { transition: opacity .25s var(--ease); }
        .nav a:hover { opacity: .45; }

        .header-cta,
        .primary-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          border-radius: 999px;
          background: #000;
          color: #fff;
          text-decoration: none;
          box-shadow: 0 14px 34px rgba(0,0,0,.12);
          transition: transform .34s var(--ease), box-shadow .34s var(--ease), background .34s var(--ease);
          will-change: transform;
        }
        .header-cta { justify-self: end; height: 48px; padding: 0 24px; font-size: 14px; font-weight: 560; letter-spacing: -0.035em; }
        .primary-cta { min-width: 164px; height: 58px; padding: 0 30px; font-size: 16px; font-weight: 610; letter-spacing: -0.05em; }
        .header-cta:hover,
        .primary-cta:hover { transform: translateY(-3px); box-shadow: 0 24px 54px rgba(0,0,0,.18); }
        .header-cta span,
        .primary-cta span { transition: transform .34s var(--ease); }
        .header-cta:hover span,
        .primary-cta:hover span { transform: translate(3px, -3px); }

        .left-rail {
          position: absolute;
          top: 0;
          left: var(--rail);
          width: 1px;
          height: 100%;
          background: rgba(5,5,5,.2);
          pointer-events: none;
        }

        .scroll-mark {
          position: absolute;
          left: 32px;
          bottom: 34px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          color: rgba(5,5,5,.72);
          pointer-events: none;
        }
        .scroll-mark span:first-child {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          font-size: 10px;
          font-weight: 650;
          letter-spacing: .16em;
          text-transform: uppercase;
        }
        .scroll-mark span:last-child { font-size: 24px; line-height: 1; font-weight: 300; }

        .hero {
          position: relative;
          min-height: calc(100vh - 92px);
          border-bottom: 1px solid rgba(5,5,5,.22);
          overflow: hidden;
          margin-top: -92px;
          padding-top: 92px;
        }

        .hero-inner {
          position: relative;
          z-index: 2;
          padding-left: var(--content-start);
          padding-right: var(--content-end);
          padding-top: clamp(82px, 12vh, 150px);
          padding-bottom: 84px;
        }

        .eyebrow,
        .work-kicker,
        .case-label,
        .form-kicker,
        .footer-kicker {
          display: grid;
          grid-template-columns: 34px 18px auto;
          align-items: center;
          gap: 36px;
          font-size: 10px;
          font-weight: 720;
          letter-spacing: -0.035em;
          text-transform: uppercase;
        }
        .eyebrow { margin-bottom: 40px; }

        .headline {
          margin: 0;
          max-width: 790px;
          font-size: clamp(58px, 7vw, 104px);
          line-height: .92;
          letter-spacing: -0.085em;
          font-weight: 700;
        }

        .subcopy {
          margin: 34px 0 0;
          max-width: 700px;
          color: rgba(5,5,5,.58);
          font-size: clamp(17px, 1.42vw, 20px);
          line-height: 1.72;
          letter-spacing: -0.047em;
          font-weight: 430;
        }
        .subcopy strong { color: #000; font-weight: 700; }

        .cta-row {
          display: flex;
          align-items: center;
          gap: 40px;
          margin-top: 40px;
        }

        .case-link {
          min-height: 58px;
          display: inline-flex;
          align-items: center;
          gap: 30px;
          padding: 0 0 0;
          border-bottom: 1px solid rgba(5,5,5,.4);
          font-size: 16px;
          line-height: 1;
          font-weight: 700;
          letter-spacing: -0.055em;
          transition: gap .34s var(--ease), border-color .34s var(--ease), opacity .34s var(--ease);
        }
        .case-link:hover { gap: 38px; border-color: #000; opacity: .76; }
        .case-link span { font-size: 32px; line-height: .7; transform: translateY(-1px); }

        .burst-wrap {
          position: absolute;
          z-index: 1;
          right: -9vw;
          top: clamp(80px, 12vh, 140px);
          width: min(760px, 55vw);
          height: min(760px, 55vw);
          min-width: 520px;
          min-height: 520px;
          opacity: .48;
          pointer-events: none;
          transform: translateZ(0);
        }
        .burst-wrap::before {
          content: "";
          position: absolute;
          inset: 5%;
          background:
            radial-gradient(circle at 52% 52%, rgba(0,0,0,.24) 0 4%, transparent 11%),
            linear-gradient(42deg, transparent 0 42%, rgba(0,0,0,.28) 48%, transparent 56%),
            linear-gradient(132deg, transparent 0 38%, rgba(0,0,0,.26) 49%, transparent 58%),
            linear-gradient(10deg, transparent 0 43%, rgba(0,0,0,.18) 50%, transparent 57%),
            radial-gradient(ellipse at 52% 52%, rgba(0,0,0,.20), transparent 52%);
          filter: blur(32px) contrast(1.02);
        }
        .burst-wrap::after {
          content: "";
          position: absolute;
          inset: -18%;
          background: radial-gradient(circle at 52% 52%, transparent 0 38%, var(--page) 78%);
        }

        .frame-corner {
          position: absolute;
          z-index: 3;
          left: 52.6%;
          width: 12px;
          height: 12px;
          border-color: rgba(5,5,5,.35);
          pointer-events: none;
        }
        .frame-corner.top { top: 24%; border-left: 1px solid; border-top: 1px solid; }
        .frame-corner.bottom { top: 60%; border-left: 1px solid; border-bottom: 1px solid; }

        .work,
        .case-study,
        .start-project,
        .footer {
          position: relative;
          padding-left: var(--content-start);
          padding-right: var(--content-end);
        }

        .work {
          padding-top: 30px;
          padding-bottom: 74px;
          margin-top: 0;
        }

        .section-rule {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: rgba(5,5,5,.22);
        }

        .work-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
          min-height: 28px;
        }
        .work-kicker { gap: 26px; }
        .view-all {
          display: inline-flex;
          align-items: center;
          gap: 11px;
          color: rgba(5,5,5,.78);
          font-size: 10px;
          font-weight: 720;
          letter-spacing: -0.035em;
          text-transform: uppercase;
          transition: gap .34s var(--ease), opacity .34s var(--ease);
        }
        .view-all:hover { gap: 17px; opacity: .54; }

        .archive { width: 100%; }
        .archive-row {
          width: 100%;
          border: 0;
          border-bottom: 1px solid rgba(5,5,5,.10);
          background: transparent;
          color: inherit;
          display: grid;
          grid-template-columns: 48px 132px minmax(220px, 1.05fr) minmax(280px, 1.55fr) 78px 34px;
          gap: 28px;
          align-items: center;
          min-height: 76px;
          text-align: left;
          transition: background .34s var(--ease), padding .34s var(--ease);
        }
        .archive-row:hover { background: rgba(0,0,0,.028); padding-left: 12px; padding-right: 12px; }
        .project-no { color: rgba(5,5,5,.46); font-size: 18px; font-weight: 520; letter-spacing: -0.045em; }
        .project-title { font-size: 23px; font-weight: 700; letter-spacing: -0.068em; transition: transform .34s var(--ease); }
        .project-type,
        .project-year { color: rgba(5,5,5,.56); font-size: 21px; font-weight: 520; letter-spacing: -0.06em; }
        .project-year { text-align: right; }
        .project-arrow { justify-self: end; color: rgba(5,5,5,.56); font-size: 31px; font-weight: 260; line-height: 1; transition: transform .34s var(--ease), color .34s var(--ease); }
        .archive-row:hover .project-title { transform: translateX(3px); }
        .archive-row:hover .project-arrow { transform: translateX(6px); color: #000; }
        .archive-row:hover .thumb { transform: scale(1.04); filter: contrast(1.12); }

        .thumb {
          width: 132px;
          height: 56px;
          background-color: #111;
          overflow: hidden;
          position: relative;
          isolation: isolate;
          transition: transform .5s var(--ease), filter .5s var(--ease);
        }
        .thumb::after {
          content: "";
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(255,255,255,.12) .45px, transparent .45px);
          background-size: 3px 3px;
          opacity: .12;
          mix-blend-mode: screen;
        }
        .thumb-a {
          background:
            radial-gradient(circle at 52% 52%, rgba(255,255,255,.95) 0 2px, transparent 7px),
            linear-gradient(95deg, transparent 0 20%, rgba(255,255,255,.12) 33%, rgba(255,255,255,.86) 51%, rgba(255,255,255,.24) 66%, transparent 100%),
            radial-gradient(ellipse at 58% 50%, rgba(255,255,255,.28), transparent 42%),
            #050505;
        }
        .thumb-b {
          background:
            linear-gradient(128deg, transparent 0 26%, rgba(255,255,255,.78) 29% 43%, transparent 49%),
            radial-gradient(ellipse at 72% 42%, rgba(255,255,255,.82), transparent 32%),
            linear-gradient(28deg, #050505, #777 45%, #0a0a0a);
        }
        .thumb-c {
          background:
            radial-gradient(circle at 82% 6%, transparent 0 38%, rgba(255,255,255,.9) 39.5%, transparent 43%),
            radial-gradient(circle at 62% 66%, transparent 0 40%, rgba(255,255,255,.44) 42%, transparent 46%),
            #030303;
        }
        .thumb-d {
          background:
            radial-gradient(circle at 48% 52%, rgba(255,255,255,.95) 0 2px, transparent 8px),
            linear-gradient(96deg, transparent 0, rgba(255,255,255,.78) 47%, rgba(255,255,255,.24) 62%, transparent 100%),
            radial-gradient(ellipse at 50% 50%, rgba(255,255,255,.15), transparent 52%),
            #080808;
        }

        .case-study {
          padding-top: 46px;
          padding-bottom: 94px;
        }
        .case-label { gap: 26px; margin-bottom: 38px; }
        .case-grid {
          display: grid;
          grid-template-columns: minmax(320px, .9fr) minmax(420px, 1fr);
          gap: clamp(48px, 8vw, 120px);
          align-items: stretch;
        }
        .case-media { min-height: 430px; background: #0a0a0a; overflow: hidden; }
        .thumb-large { width: 100%; height: 100%; min-height: 430px; transform: none !important; }
        .case-content { padding-top: 8px; }
        .case-meta { color: var(--muted); font-size: 13px; font-weight: 650; letter-spacing: .08em; text-transform: uppercase; }
        .case-content h2 { margin: 20px 0 0; font-size: clamp(52px, 6vw, 96px); line-height: .92; letter-spacing: -0.085em; }
        .case-type { margin: 16px 0 42px; color: var(--muted); font-size: 25px; letter-spacing: -0.06em; }
        .case-columns { display: grid; grid-template-columns: 1fr 1fr; gap: 38px; }
        .case-columns h3 { margin: 0 0 12px; font-size: 12px; letter-spacing: .18em; text-transform: uppercase; color: rgba(5,5,5,.48); }
        .case-columns p { margin: 0; color: rgba(5,5,5,.64); font-size: 18px; line-height: 1.55; letter-spacing: -0.045em; }
        .deliverables { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 40px; }
        .deliverables span { border: 1px solid rgba(5,5,5,.14); border-radius: 999px; padding: 10px 14px; color: rgba(5,5,5,.64); font-size: 13px; letter-spacing: -0.02em; }

        .start-project {
          padding-top: 42px;
          padding-bottom: 68px;
        }
        .form-kicker { gap: 26px; margin-bottom: 46px; color: rgba(5,5,5,.62); font-size: 14px; font-weight: 500; text-transform: uppercase; }
        .form-grid { display: grid; grid-template-columns: minmax(360px, .78fr) minmax(420px, 560px); gap: clamp(64px, 12vw, 190px); align-items: start; }
        .form-copy h2 { margin: 0; font-size: clamp(46px, 4.8vw, 62px); line-height: .98; letter-spacing: -0.075em; }
        .form-copy h2 span { color: rgba(5,5,5,.46); }
        .form-copy p { margin: 34px 0 0; max-width: 430px; color: rgba(5,5,5,.52); font-size: 17px; line-height: 1.65; letter-spacing: -0.035em; }
        .project-form { border: 1px solid rgba(5,5,5,.12); border-radius: 18px; padding: 30px; background: rgba(255,255,255,.28); }
        .project-form label,
        .field-block { display: block; margin-bottom: 23px; position: relative; }
        .project-form label span,
        .field-label { display: block; margin-bottom: 10px; color: rgba(5,5,5,.36); font-size: 12px; letter-spacing: .22em; text-transform: uppercase; }
        .project-form input,
        .project-form textarea,
        .budget-select {
          width: 100%;
          border: 1px solid rgba(5,5,5,.11);
          border-radius: 18px;
          background: rgba(248,248,245,.74);
          color: #000;
          outline: none;
          font-size: 16px;
          letter-spacing: -0.035em;
          transition: border-color .28s var(--ease), background .28s var(--ease), box-shadow .28s var(--ease);
        }
        .project-form input,
        .budget-select { height: 58px; padding: 0 24px; }
        .project-form textarea { resize: vertical; min-height: 154px; padding: 20px 24px; }
        .project-form input:focus,
        .project-form textarea:focus,
        .budget-select:focus { border-color: rgba(5,5,5,.34); background: #fff; box-shadow: 0 14px 40px rgba(0,0,0,.04); }
        .budget-select { display: flex; align-items: center; justify-content: space-between; text-align: left; }
        .budget-menu { position: absolute; z-index: 20; top: calc(100% - 8px); left: 0; right: 0; border: 1px solid rgba(5,5,5,.16); border-radius: 14px; background: rgba(5,5,5,.74); backdrop-filter: blur(16px); overflow: hidden; box-shadow: 0 18px 50px rgba(0,0,0,.22); }
        .budget-menu button { display: block; width: 100%; border: 0; background: transparent; color: #fff; padding: 8px 12px; text-align: left; font-size: 16px; font-weight: 600; letter-spacing: -0.04em; }
        .budget-menu button:hover,
        .budget-menu .selected { background: rgba(255,255,255,.08); }
        .submit-btn { width: 100%; height: 46px; border: 0; border-radius: 999px; background: rgba(5,5,5,.12); color: rgba(5,5,5,.38); font-size: 14px; letter-spacing: -0.03em; transition: background .3s var(--ease), color .3s var(--ease), transform .3s var(--ease); }
        .submit-btn:hover { background: #000; color: #fff; transform: translateY(-2px); }

        .footer { padding-top: 42px; padding-bottom: 70px; min-height: 350px; }
        .footer-kicker { gap: 26px; margin-bottom: 44px; color: rgba(5,5,5,.64); font-size: 14px; font-weight: 500; }
        .footer-grid { display: grid; grid-template-columns: 1fr auto; align-items: end; gap: 60px; }
        .footer-small { margin: 0 0 26px; color: rgba(5,5,5,.32); font-size: 12px; letter-spacing: .34em; text-transform: uppercase; }
        .footer h2 { margin: 0 0 30px; color: rgba(5,5,5,.48); font-size: 56px; line-height: .9; letter-spacing: -0.075em; }
        .footer a { display: block; margin-top: 16px; color: rgba(5,5,5,.52); text-decoration: none; font-size: 16px; letter-spacing: -0.035em; transition: color .25s var(--ease), transform .25s var(--ease); }
        .footer a:hover { color: #000; transform: translateX(4px); }
        .copyright { margin: 0; color: rgba(5,5,5,.35); font-size: 13px; letter-spacing: -0.02em; }

        .reveal-section { scroll-margin-top: 24px; }

        @media (max-width: 1100px) {
          :root { --rail: 0px; --gutter: 32px; --content-start: 32px; --content-end: 32px; }
          .left-rail, .scroll-mark { display: none; }
          .site-header { grid-template-columns: 1fr auto; height: 82px; }
          .nav { display: none; }
          .hero { min-height: 690px; margin-top: -82px; padding-top: 82px; }
          .hero-inner { padding-top: 112px; }
          .burst-wrap { right: -280px; top: 150px; opacity: .32; }
          .archive-row { grid-template-columns: 52px 120px 1fr 32px; gap: 18px; min-height: 82px; }
          .project-type, .project-year { display: none; }
          .thumb { width: 120px; height: 54px; }
          .case-grid, .form-grid { grid-template-columns: 1fr; }
          .case-columns { grid-template-columns: 1fr; }
          .footer-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 640px) {
          :root { --gutter: 20px; --content-start: 20px; --content-end: 20px; }
          .site-header { height: 76px; padding-left: 20px; padding-right: 20px; }
          .brand { font-size: 21px; }
          .header-cta { height: 42px; padding: 0 18px; }
          .hero { min-height: 660px; margin-top: -76px; padding-top: 76px; }
          .hero-inner { padding-top: 92px; }
          .eyebrow { gap: 18px; margin-bottom: 28px; }
          .headline { font-size: 55px; }
          .subcopy br { display: none; }
          .cta-row { gap: 22px; align-items: flex-start; flex-direction: column; }
          .case-link { min-height: auto; padding-bottom: 9px; }
          .burst-wrap { right: -380px; top: 220px; opacity: .22; }
          .frame-corner { display: none; }
          .work { padding-top: 24px; }
          .view-all { display: none; }
          .archive-row { grid-template-columns: 38px 86px 1fr; gap: 14px; min-height: 78px; }
          .project-arrow { display: none; }
          .project-title { font-size: 19px; }
          .project-no { font-size: 15px; }
          .thumb { width: 86px; height: 48px; }
          .case-content h2 { font-size: 52px; }
          .project-form { padding: 20px; border-radius: 16px; }
          .footer h2 { font-size: 48px; }
        }
      `}</style>

      <header className="site-header">
        <a className="brand" href="#top">iee studios</a>
        <nav className="nav" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#case-study">Case Studies</a>
          <a href="#start">Start</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="#start">Book a Call <span>↗</span></a>
      </header>

      <section id="top" className="hero">
        <div className="left-rail" />
        <div className="scroll-mark"><span>Scroll</span><span>↓</span></div>
        <div className="burst-wrap" />
        <div className="frame-corner top" />
        <div className="frame-corner bottom" />

        <div className="hero-inner">
          <div className="eyebrow"><span>01</span><span>/</span><span>Launch Films</span></div>

          <h1 className="headline">
            Exclusive Launch Films<br />
            for Tech & SaaS
          </h1>

          <p className="subcopy">
            <strong>iee studios</strong> produces and directs high-end launch films and ads<br />
            for innovative tech companies.
          </p>

          <div className="cta-row">
            <a className="primary-cta" href="#start">Book a Call <span>↗</span></a>
            <a className="case-link" href="#work">View Case Studies <span>→</span></a>
          </div>
        </div>
      </section>

      <section id="work" className="work reveal-section">
        <div className="left-rail" />
        <div className="work-head">
          <div className="work-kicker"><span>02</span><span>/</span><span>Featured Work</span></div>
          <a className="view-all" href="#case-study">View All Work <span>↗</span></a>
        </div>

        <div className="archive">
          {featured.map((project) => (
            <button className="archive-row" type="button" onClick={() => openCaseStudy(project)} key={project.no}>
              <div className="project-no">{project.no}</div>
              <Thumbnail variant={project.thumb} />
              <div className="project-title">{project.title}</div>
              <div className="project-type">{project.type}</div>
              <div className="project-year">{project.year}</div>
              <div className="project-arrow">→</div>
            </button>
          ))}
        </div>
      </section>

      <CaseStudy project={activeProject} />
      <ProjectForm />
      <Footer />
    </main>
  );
}