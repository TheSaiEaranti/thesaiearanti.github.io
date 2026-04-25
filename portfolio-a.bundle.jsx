// Direction A - Editorial-warm with terminal hero
// Warm off-white, Instrument Serif display, JetBrains Mono terminal accents,
// terminal green on burnt-ink. Long-scroll with anchored nav.

const PA_RESUME = {
  name: 'Sai Preetam Earanti',
  email: 'saipreetam.earanti@utexas.edu',
  phone: '(512) 635-7266',
  linkedin: 'www.linkedin.com/in/sai-preetam-earanti-580717285/',
  github: 'github.com/TheSaiEaranti',
  edu: {
    school: 'The University of Texas at Austin',
    degree: 'B.S. Information & Data Science · Minor in CS',
    gpa: '3.9 / 4.0',
    grad: 'May 2028',
    courses: ['Data Structures & Algos', 'OOP', 'Open-Source Dev', 'Applied ML in Python', 'NLP', 'Databases'],
  },
  experience: [
    {
      role: 'Software Engineering Intern',
      org: 'Jump Finance',
      loc: 'Austin, TX',
      when: 'Sep 2025 - Present',
      summary: 'Building AI recommendation infra and a React dashboard for an early-stage fintech.',
      bullets: [
        'Cut AI recommendation latency 98% with a Python/C++ backend on AWS EC2.',
        'Hit 66% test coverage on the React dashboard with Jest, saving ~2 days of QA per sprint.',
        '6× deploy frequency by stitching Node.js + Next.js + FastAPI behind CI/CD across 3 workstreams.',
        '11 production features on WebSockets / Redis / Docker - zero rollbacks.',
        'Prompt-engineered for 32% token efficiency, saving $400/mo in API spend.',
      ],
    },
    {
      role: 'ML Undergraduate Research Assistant',
      org: 'UT Austin · CS Department',
      loc: 'Austin, TX',
      when: 'Aug 2025 - Dec 2025',
      summary: 'Predicting Parkinson\u2019s motor progression from longitudinal patient data.',
      bullets: [
        '86% accuracy on motor progression via a PyTorch regression model trained on 4,775 patients.',
        '88% faster symptom detection via Python NLP pipelines mining unstructured clinical notes.',
        '90% less preprocessing time via automated SQL ETL with cloud orchestration.',
      ],
    },
    {
      role: 'Software Engineering Intern',
      org: 'UT Austin · CS Department',
      loc: 'Austin, TX',
      when: 'May 2024 - Aug 2024',
      summary: 'Robotics + messaging infra for a research lab.',
      bullets: [
        '98% messaging throughput improvement via async Node.js + REST + MongoDB.',
        '67% less robotics test time via Python/TS AI algorithms - cut a full day per cycle.',
        '89% better system responsiveness via C++ multi-sensor pipelines with ARM Neon SIMD.',
      ],
    },
  ],
  projects: [
    {
      name: 'Agentic LLM Inference Engine',
      when: 'Apr 2026',
      stack: ['CUDA', 'C++', 'MCP', 'gRPC', 'Opus 4.7'],
      tldr: 'A from-scratch LLM inference engine that runs ~2.4× faster than llama.cpp and serves 200 concurrent agent sessions under 400ms.',
      deep: [
        'Built in C++/CUDA with PagedAttention-style KV cache and continuous batching, achieving 2.4× throughput over llama.cpp on Llama 3 8B at 128-sequence concurrency.',
        'Implemented speculative decoding with a draft-target architecture, cutting per-token latency 58% on GSM8K + HumanEval while preserving output-distribution parity with greedy decoding.',
        'Integrated MCP for multi-turn tool calls, serving 200 concurrent agentic sessions with sub-400ms TTFT via KV cache reuse across turns.',
      ],
    },
    {
      name: 'Real-Time Sign Language Translator',
      when: 'Aug 2025',
      stack: ['Python', 'TensorFlow', 'OpenCV', 'MediaPipe', 'ONNX'],
      tldr: 'Translates American Sign Language to text live in the browser at 93% accuracy, no server round-trip.',
      deep: [
        '93% word-level accuracy on a 200-sign vocab from a transformer trained on MediaPipe hand-landmark sequences.',
        'Sub-120ms per-sign inference via ONNX quantization + WebRTC streaming, fully client-side.',
      ],
    },
    {
      name: 'Real-Time Multiplayer Game Server',
      when: 'Jul 2025',
      stack: ['Go', 'Node.js', 'WebSockets', 'Redis', 'Docker', 'React'],
      tldr: 'A WebSocket game server in Go that holds 200 concurrent players across 20+ rooms with 50ms state sync.',
      deep: [
        '200 concurrent players across 20+ rooms with sub-50ms state sync via goroutine-per-room concurrency and Redis pub/sub.',
        'Eliminated race conditions in shared state with a lock-free event-queue architecture.',
        'Scaled capacity 4× by containerizing with Docker behind an NGINX load balancer.',
      ],
    },
  ],
  skills: {
    Languages: [
      { name: 'Python', slug: 'python' },
      { name: 'C++', slug: 'cplusplus' },
      { name: 'TypeScript', slug: 'typescript' },
      { name: 'JavaScript', slug: 'javascript' },
      { name: 'Java', slug: 'java' },
      { name: 'Go', slug: 'go', variant: 'original-wordmark' },
      { name: 'SQL', slug: 'mysql' },
      { name: 'HTML', slug: 'html5' },
      { name: 'CSS', slug: 'css3' },
    ],
    Frameworks: [
      { name: 'React', slug: 'react' },
      { name: 'Next.js', slug: 'nextjs', dark: true },
      { name: 'Node.js', slug: 'nodejs' },
      { name: 'Express', slug: 'express', dark: true },
      { name: 'React Native', slug: 'react' },
      { name: 'Flutter', slug: 'flutter' },
      { name: 'Spring Boot', slug: 'spring' },
      { name: 'Django', slug: 'django', variant: 'plain', dark: true },
      { name: 'TensorFlow', slug: 'tensorflow' },
      { name: 'PyTorch', slug: 'pytorch' },
    ],
    Infra: [
      { name: 'AWS', slug: 'amazonwebservices', variant: 'original-wordmark' },
      { name: 'Docker', slug: 'docker' },
      { name: 'Redis', slug: 'redis' },
      { name: 'MongoDB', slug: 'mongodb' },
      { name: 'CUDA', text: 'CUDA' },
      { name: 'NGINX', slug: 'nginx' },
      { name: 'FastAPI', slug: 'fastapi' },
    ],
    Tools: [
      { name: 'Git', slug: 'git' },
      { name: 'GitHub', slug: 'github', variant: 'original', dark: true },
      { name: 'Jest', slug: 'jest', variant: 'plain' },
      { name: 'Pandas', slug: 'pandas' },
      { name: 'OpenCV', slug: 'opencv' },
    ],
  },
};

// ── Animated terminal hero ────────────────────────────────────
function PATerminal() {
  const lines = [
    { p: '$', t: 'whoami', c: 'cmd' },
    { t: 'sai preetam earanti', c: 'out' },
    { t: 'ut austin · ids + cs · class of \u201928', c: 'out' },
    { p: '$', t: 'cat now.txt', c: 'cmd' },
    { t: 'building agentic llm infra @ jump finance.', c: 'out' },
    { t: 'researching parkinson\u2019s ml @ ut cs.', c: 'out' },
    { p: '$', t: 'echo $INTERESTS', c: 'cmd' },
    { t: 'inference engines · gpu kernels · agents · realtime systems', c: 'out' },
    { p: '$', t: 'open --to recruiters', c: 'cmd' },
    { t: 'i ship fast, write tests, and care about latency.', c: 'out' },
    { p: '$', t: '_', c: 'cursor' },
  ];
  const [shown, setShown] = React.useState([]);
  const [partial, setPartial] = React.useState('');
  const [idx, setIdx] = React.useState(0);

  React.useEffect(() => {
    if (idx >= lines.length) return;
    const line = lines[idx];
    if (line.c === 'cursor') {
      setShown((s) => [...s, line]);
      setIdx(idx + 1);
      return;
    }
    let i = 0;
    const speed = line.c === 'cmd' ? 35 : 12;
    const id = setInterval(() => {
      i += 1;
      setPartial(line.t.slice(0, i));
      if (i >= line.t.length) {
        clearInterval(id);
        setTimeout(() => {
          setShown((s) => [...s, line]);
          setPartial('');
          setIdx(idx + 1);
        }, line.c === 'cmd' ? 240 : 120);
      }
    }, speed);
    return () => clearInterval(id);
  }, [idx]);

  const cur = idx < lines.length ? lines[idx] : null;

  return (
    <div className="pa-term" aria-label="Animated terminal intro">
      <div className="pa-term-chrome">
        <span className="pa-dot" style={{ background: '#ff5f57' }}></span>
        <span className="pa-dot" style={{ background: '#febc2e' }}></span>
        <span className="pa-dot" style={{ background: '#28c840' }}></span>
        <span className="pa-term-title">~/sai - zsh</span>
      </div>
      <div className="pa-term-body">
        {shown.map((l, i) => (
          <div key={i} className={`pa-line pa-${l.c}`}>
            {l.p && <span className="pa-prompt">{l.p}</span>}
            <span className="pa-text">{l.t}</span>
          </div>
        ))}
        {cur && cur.c !== 'cursor' && (
          <div className={`pa-line pa-${cur.c}`}>
            {cur.p && <span className="pa-prompt">{cur.p}</span>}
            <span className="pa-text">{partial}<span className="pa-caret">▍</span></span>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Project card with expandable deep-dive ────────────────────
function PAProject({ p }) {
  const [open, setOpen] = React.useState(false);
  return (
    <article className={`pa-project ${open ? 'is-open' : ''}`}>
      <header className="pa-project-head">
        <div className="pa-project-meta">
          <span className="pa-project-when">{p.when}</span>
          <div className="pa-project-stack">
            {p.stack.map((s) => <span key={s} className="pa-chip">{s}</span>)}
          </div>
        </div>
        <h3 className="pa-project-name">{p.name}</h3>
        <p className="pa-project-tldr">{p.tldr}</p>
      </header>
      <button className="pa-project-toggle" onClick={() => setOpen(!open)}>
        <span>{open ? 'collapse' : 'read the deep dive'}</span>
        <span className="pa-caret-glyph" style={{ transform: open ? 'rotate(180deg)' : 'none' }}>↓</span>
      </button>
      {open && (
        <div className="pa-project-deep">
          <div className="pa-deep-rule"></div>
          <ul>
            {p.deep.map((d, i) => <li key={i}>{d}</li>)}
          </ul>
        </div>
      )}
    </article>
  );
}

// ── Cursor halo ────────────────────────────────────────────────
// Rendered into a portal at <body> so no transformed/overflow ancestor
// clips it; uses requestAnimationFrame so it never lags or jumps when
// the user crosses dense DOM (text blocks, grids).
function PACursorHalo() {
  const [host] = React.useState(() => {
    if (typeof document === 'undefined') return null;
    const d = document.createElement('div');
    d.className = 'pa-halo-host';
    return d;
  });
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!host) return;
    document.body.appendChild(host);
    return () => { try { document.body.removeChild(host); } catch (_) {} };
  }, [host]);
  React.useEffect(() => {
    let x = -500, y = -500, raf = 0;
    const onMove = (e) => {
      x = e.clientX; y = e.clientY;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const el = ref.current;
        if (el) el.style.transform = `translate3d(${x - 200}px, ${y - 200}px, 0)`;
      });
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => { window.removeEventListener('pointermove', onMove); if (raf) cancelAnimationFrame(raf); };
  }, []);
  if (!host) return null;
  return ReactDOM.createPortal(
    <div ref={ref} className="pa-halo" aria-hidden="true"></div>,
    host
  );
}

// ── Email copy widget ──────────────────────────────────────────
function PACopyEmail({ email }) {
  const [copied, setCopied] = React.useState(false);
  return (
    <button
      className="pa-copy"
      onClick={() => {
        navigator.clipboard?.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 1400);
      }}
    >
      <span className="pa-copy-email">{email}</span>
      <span className="pa-copy-status">{copied ? 'copied ✓' : 'copy'}</span>
    </button>
  );
}

// ── Section heading helper ────────────────────────────────────
// Reveal effect: each section's HEAD (kicker + title) fades + slides in
// the first time it crosses the viewport. Body content stays static so
// expandable details and existing layout aren't disturbed.
function PASection({ id, kicker, title, children }) {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // If already in view on mount (e.g. About at top of page), reveal immediately
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight * 0.92) { setShown(true); return; }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { setShown(true); io.disconnect(); }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.01 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <section
      id={id}
      ref={ref}
      className="pa-section"
      data-screen-label={kicker}
    >
      <div className={`pa-sec-head pa-reveal ${shown ? 'is-shown' : ''}`}>
        <span className="pa-kicker">{kicker}</span>
        <h2 className="pa-sec-title" dangerouslySetInnerHTML={{ __html: title }}></h2>
      </div>
      <div className={`pa-reveal pa-reveal-body ${shown ? 'is-shown' : ''}`}>
        {children}
      </div>
    </section>
  );
}

// ── Main page ─────────────────────────────────────────────────
function PortfolioA({ accent = 'green' }) {
  const r = PA_RESUME;
  const [active, setActive] = React.useState('top');
  const sections = ['top', 'about', 'experience', 'projects', 'skills', 'contact'];

  // j/k nav + scroll spy
  React.useEffect(() => {
    const onKey = (e) => {
      if (e.target.matches('input, textarea, [contenteditable]')) return;
      if (e.key === 'j' || e.key === 'k') {
        const i = sections.indexOf(active);
        const next = e.key === 'j' ? Math.min(i + 1, sections.length - 1) : Math.max(i - 1, 0);
        document.getElementById(sections[next])?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    window.addEventListener('keydown', onKey);
    const onScroll = () => {
      for (const s of sections) {
        const el = document.getElementById(s);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= 120 && r.bottom >= 120) { setActive(s); break; }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('keydown', onKey); window.removeEventListener('scroll', onScroll); };
  }, [active]);

  return (
    <div className={`pa-root pa-accent-${accent}`}>
      <PACursorHalo />

      <nav className="pa-nav">
        <a href="#top" className="pa-nav-brand">SE<span>·</span></a>
        <ul className="pa-nav-list">
          {['about', 'experience', 'projects', 'skills', 'contact'].map((s) => (
            <li key={s}><a href={`#${s}`} className={active === s ? 'is-active' : ''}>{s}</a></li>
          ))}
        </ul>
        <div className="pa-nav-hint">
          <kbd>⌘</kbd><kbd>K</kbd>
        </div>
      </nav>

      <header id="top" className="pa-hero" data-screen-label="Hero">
        <div className="pa-hero-grid">
          <div className="pa-hero-text">
            <span className="pa-eyebrow">portfolio · {new Date().getFullYear()}</span>
            <h1 className="pa-hero-title">
              Sai Preetam<br />Earanti<span className="pa-hero-dot">.</span>
            </h1>
            <p className="pa-hero-bio">
              I&rsquo;m a sophomore at UT Austin building agentic LLM infra at
              Jump Finance and researching ML for Parkinson&rsquo;s in the UT CS
              department. I care about latency budgets, ship fast, and write
              the tests.
            </p>
            <div className="pa-hero-meta">
              <span><strong>Now</strong> · SWE intern @ Jump Finance</span>
              <span><strong>Studying</strong> · IDS + CS @ UT Austin</span>
              <span><strong>Open to</strong> · summer 2026 internships</span>
            </div>
          </div>
          <PATerminal />
        </div>
      </header>

      <PASection id="about" kicker="01 · about" title="The short version.">
        <div className="pa-about">
          <p>
            I&rsquo;m a sophomore at UT Austin studying Information &amp; Data Science with
            a CS minor, GPA {r.edu.gpa}. I work on systems where the constraint is real -
            latency budgets, token costs, GPU memory - and I like writing code that holds
            up under load.
          </p>
          <p>
            Right now that means an LLM inference engine I built from scratch in CUDA, an
            agentic recommendation backend at <strong>Jump Finance</strong>, and a Parkinson&rsquo;s
            ML project in the UT CS department. Outside of that I make multiplayer games
            and tools that translate sign language in your browser.
          </p>
        </div>
      </PASection>

      <PASection id="experience" kicker="02 · experience" title="Where I&rsquo;ve shipped.">
        <ol className="pa-timeline">
          {r.experience.map((e, i) => (
            <li key={i} className="pa-tl-item">
              <div className="pa-tl-when">{e.when}</div>
              <div className="pa-tl-body">
                <div className="pa-tl-head">
                  <h3>{e.role}</h3>
                  <span className="pa-tl-org">{e.org} · {e.loc}</span>
                </div>
                <p className="pa-tl-summary">{e.summary}</p>
                <details className="pa-tl-deep">
                  <summary>technical detail</summary>
                  <ul>{e.bullets.map((b, j) => <li key={j}>{b}</li>)}</ul>
                </details>
              </div>
            </li>
          ))}
        </ol>
      </PASection>

      <PASection id="projects" kicker="03 · projects" title="Things I&rsquo;ve built.">
        <div className="pa-projects">
          {r.projects.map((p, i) => <PAProject key={i} p={p} />)}
        </div>
      </PASection>

      <PASection id="skills" kicker="04 · skills" title="The toolbox.">
        <div className="pa-skills">
          {Object.entries(r.skills).map(([cat, items]) => (
            <div key={cat} className="pa-skill-row">
              <div className="pa-skill-cat">{cat}</div>
              <div className="pa-skill-items">
                {items.map((it) => {
                  if (it.text) {
                    return (
                      <div key={it.name} className="pa-skill-icon pa-skill-icon-text" title={it.name}>
                        <div className="pa-skill-glyph">{it.text}</div>
                        <span>{it.name}</span>
                      </div>
                    );
                  }
                  const variant = it.variant || 'original';
                  const PA_ICON_MAP = {
                    'python|original': 'ico_python',
                    'cplusplus|original': 'ico_cplusplus',
                    'typescript|original': 'ico_typescript',
                    'javascript|original': 'ico_javascript',
                    'java|original': 'ico_java',
                    'go|original-wordmark': 'ico_go',
                    'mysql|original': 'ico_mysql',
                    'html5|original': 'ico_html5',
                    'css3|original': 'ico_css3',
                    'react|original': 'ico_react',
                    'nextjs|original': 'ico_nextjs',
                    'nodejs|original': 'ico_nodejs',
                    'express|original': 'ico_express',
                    'flutter|original': 'ico_flutter',
                    'spring|original': 'ico_spring',
                    'django|plain': 'ico_django',
                    'tensorflow|original': 'ico_tensorflow',
                    'pytorch|original': 'ico_pytorch',
                    'amazonwebservices|original-wordmark': 'ico_aws',
                    'docker|original': 'ico_docker',
                    'redis|original': 'ico_redis',
                    'mongodb|original': 'ico_mongodb',
                    'nginx|original': 'ico_nginx',
                    'fastapi|original': 'ico_fastapi',
                    'git|original': 'ico_git',
                    'github|original': 'ico_github',
                    'jest|plain': 'ico_jest',
                    'pandas|original': 'ico_pandas',
                    'opencv|original': 'ico_opencv',
                  };
                  const resId = PA_ICON_MAP[`${it.slug}|${variant}`];
                  const url = (window.__resources && resId && window.__resources[resId])
                    || `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${it.slug}/${it.slug}-${variant}.svg`;
                  return (
                    <div key={it.name} className={`pa-skill-icon ${it.dark ? 'is-dark' : ''}`} title={it.name}>
                      <img src={url} alt="" loading="lazy" />
                      <span>{it.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </PASection>

      <PASection id="contact" kicker="05 · contact" title="Let&rsquo;s talk.">
        <div className="pa-contact">
          <p className="pa-contact-lede">
            Best way to reach me is email - I read everything, and I&rsquo;ll usually
            reply within a day.
          </p>
          <PACopyEmail email={r.email} />
          <div className="pa-contact-links">
            <a href={`https://${r.linkedin}`} target="_blank" rel="noreferrer">
              <span className="pa-link-lbl">linkedin</span>
              <span className="pa-link-val">/in/sai-preetam-earanti-580717285/</span>
            </a>
            <a href={`https://${r.github}`} target="_blank" rel="noreferrer">
              <span className="pa-link-lbl">github</span>
              <span className="pa-link-val">/TheSaiEaranti</span>
            </a>
            <a href={`tel:${r.phone}`}>
              <span className="pa-link-lbl">phone</span>
              <span className="pa-link-val">{r.phone}</span>
            </a>
          </div>
        </div>
      </PASection>

      <footer className="pa-footer">
        <span>© {new Date().getFullYear()} sai preetam earanti</span>
        <span className="pa-foot-mono">built with html, css &amp; too much coffee · press <kbd>?</kbd> for shortcuts</span>
      </footer>
    </div>
  );
}

window.PortfolioA = PortfolioA;
