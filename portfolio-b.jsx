// Direction B — IDE-forward portfolio
// File-tree sidebar, tabs at top, syntax-highlighted "files" as content.
// Engineer-coded but legible to recruiters via plain-language comments.

const PB_RESUME = window.PA_RESUME || {}; // share data with A
// Fallback if A didn't load first
if (!window.PA_RESUME) {
  // Don't redefine — page guarantees A loads first.
}

// Syntax highlight helpers
const PBTok = {
  k: (s) => <span className="pb-k">{s}</span>,        // keyword
  s: (s) => <span className="pb-s">{s}</span>,        // string
  n: (s) => <span className="pb-n">{s}</span>,        // number
  c: (s) => <span className="pb-c">{s}</span>,        // comment
  f: (s) => <span className="pb-f">{s}</span>,        // function
  v: (s) => <span className="pb-v">{s}</span>,        // variable / prop
  p: (s) => <span className="pb-p">{s}</span>,        // punct
  t: (s) => <span className="pb-t">{s}</span>,        // type
};

function PBLine({ n, indent = 0, children }) {
  return (
    <div className="pb-line">
      <span className="pb-ln">{n}</span>
      <span className="pb-code" style={{ paddingLeft: indent * 18 }}>{children}</span>
    </div>
  );
}

// ── File: about.md ────────────────────────────────────────────
function PBFileAbout() {
  let n = 0; const next = () => ++n;
  return (
    <div className="pb-file">
      <PBLine n={next()}><span className="pb-md-h"># Sai Preetam Earanti</span></PBLine>
      <PBLine n={next()}></PBLine>
      <PBLine n={next()}><span className="pb-md-em">UT Austin · Information &amp; Data Science · CS minor · GPA 3.9 · Class of 2028</span></PBLine>
      <PBLine n={next()}></PBLine>
      <PBLine n={next()}>I&rsquo;m a sophomore who likes the parts of the stack that go <span className="pb-md-bold">brrr</span> — GPU kernels,</PBLine>
      <PBLine n={next()}>inference engines, realtime systems — but spends just as much time on the parts</PBLine>
      <PBLine n={next()}>users actually touch.</PBLine>
      <PBLine n={next()}></PBLine>
      <PBLine n={next()}><span className="pb-md-h2">## what i&rsquo;m up to right now</span></PBLine>
      <PBLine n={next()}></PBLine>
      <PBLine n={next()}><span className="pb-md-list">-</span> Software Engineering Intern <span className="pb-md-link">@jump-finance</span> — agentic recs &amp; React dash</PBLine>
      <PBLine n={next()}><span className="pb-md-list">-</span> ML Research Assistant <span className="pb-md-link">@ut-cs</span> — Parkinson&rsquo;s motor progression</PBLine>
      <PBLine n={next()}><span className="pb-md-list">-</span> Side project: an LLM inference engine I&rsquo;m writing in CUDA</PBLine>
      <PBLine n={next()}></PBLine>
      <PBLine n={next()}><span className="pb-md-h2">## what recruiters should know</span></PBLine>
      <PBLine n={next()}></PBLine>
      <PBLine n={next()}>I ship fast (zero rollbacks across 11 features at Jump), I write tests</PBLine>
      <PBLine n={next()}>(66% Jest coverage on a React app), and I care about latency budgets.</PBLine>
      <PBLine n={next()}>I&rsquo;m looking for <span className="pb-md-bold">summer 2026 internships</span> — systems, infra, ML, or product.</PBLine>
    </div>
  );
}

// ── File: experience.ts ───────────────────────────────────────
function PBFileExperience() {
  let n = 0; const next = () => ++n;
  const exps = window.PA_RESUME.experience;
  const out = [];
  out.push(
    <PBLine key="0" n={next()}>
      {PBTok.c('// where i\u2019ve shipped — most recent first')}
    </PBLine>,
    <PBLine key="1" n={next()}></PBLine>,
    <PBLine key="2" n={next()}>
      {PBTok.k('export const')} {PBTok.v('experience')} {PBTok.p(':')} {PBTok.t('Role[]')} {PBTok.p('= [')}
    </PBLine>
  );
  exps.forEach((e, i) => {
    out.push(
      <PBLine key={`${i}-a`} n={next()} indent={1}>{PBTok.p('{')}</PBLine>,
      <PBLine key={`${i}-b`} n={next()} indent={2}>{PBTok.v('role')}{PBTok.p(':')} {PBTok.s(`'${e.role}'`)}{PBTok.p(',')}</PBLine>,
      <PBLine key={`${i}-c`} n={next()} indent={2}>{PBTok.v('org')}{PBTok.p(':')} {PBTok.s(`'${e.org}'`)}{PBTok.p(',')}</PBLine>,
      <PBLine key={`${i}-d`} n={next()} indent={2}>{PBTok.v('when')}{PBTok.p(':')} {PBTok.s(`'${e.when}'`)}{PBTok.p(',')}</PBLine>,
      <PBLine key={`${i}-e`} n={next()} indent={2}>{PBTok.v('summary')}{PBTok.p(':')} {PBTok.s(`'${e.summary}'`)}{PBTok.p(',')}</PBLine>,
      <PBLine key={`${i}-f`} n={next()} indent={2}>{PBTok.v('impact')}{PBTok.p(': [')}</PBLine>
    );
    e.bullets.forEach((b, j) => {
      out.push(
        <PBLine key={`${i}-g-${j}`} n={next()} indent={3}>{PBTok.s(`'${b}'`)}{PBTok.p(',')}</PBLine>
      );
    });
    out.push(
      <PBLine key={`${i}-h`} n={next()} indent={2}>{PBTok.p('],')}</PBLine>,
      <PBLine key={`${i}-i`} n={next()} indent={1}>{PBTok.p('},')}</PBLine>
    );
  });
  out.push(<PBLine key="end" n={next()}>{PBTok.p('];')}</PBLine>);
  return <div className="pb-file">{out}</div>;
}

// ── File: projects.tsx (interactive cards) ────────────────────
function PBProjectCard({ p, idx }) {
  const [open, setOpen] = React.useState(idx === 0);
  return (
    <div className={`pb-proj ${open ? 'is-open' : ''}`}>
      <button className="pb-proj-bar" onClick={() => setOpen(!open)}>
        <span className="pb-proj-num">{String(idx + 1).padStart(2, '0')}</span>
        <span className="pb-proj-name">{p.name}</span>
        <span className="pb-proj-spacer"></span>
        <span className="pb-proj-when">{p.when}</span>
        <span className="pb-proj-chevron">{open ? '▾' : '▸'}</span>
      </button>
      {open && (
        <div className="pb-proj-body">
          <div className="pb-proj-stack">
            {p.stack.map((s) => <span key={s} className="pb-tag">{s}</span>)}
          </div>
          <div className="pb-proj-tldr">
            <span className="pb-tldr-label">tl;dr</span>
            <p>{p.tldr}</p>
          </div>
          <div className="pb-proj-deep">
            <span className="pb-tldr-label">technical</span>
            <ul>{p.deep.map((d, i) => <li key={i}>{d}</li>)}</ul>
          </div>
        </div>
      )}
    </div>
  );
}

function PBFileProjects() {
  return (
    <div className="pb-projlist">
      {window.PA_RESUME.projects.map((p, i) => <PBProjectCard key={i} p={p} idx={i} />)}
    </div>
  );
}

// ── File: skills.json ─────────────────────────────────────────
function PBFileSkills() {
  let n = 0; const next = () => ++n;
  const s = window.PA_RESUME.skills;
  const cats = Object.entries(s);
  return (
    <div className="pb-file">
      <PBLine n={next()}>{PBTok.p('{')}</PBLine>
      {cats.map(([cat, items], i) => (
        <React.Fragment key={cat}>
          <PBLine n={next()} indent={1}>
            {PBTok.s(`"${cat.toLowerCase()}"`)}{PBTok.p(': [')}
          </PBLine>
          {items.map((it, j) => (
            <PBLine key={j} n={next()} indent={2}>
              {PBTok.s(`"${it}"`)}{j < items.length - 1 && PBTok.p(',')}
            </PBLine>
          ))}
          <PBLine n={next()} indent={1}>{PBTok.p(`]${i < cats.length - 1 ? ',' : ''}`)}</PBLine>
        </React.Fragment>
      ))}
      <PBLine n={next()}>{PBTok.p('}')}</PBLine>
    </div>
  );
}

// ── File: contact.sh ──────────────────────────────────────────
function PBFileContact() {
  const [copied, setCopied] = React.useState(false);
  const r = window.PA_RESUME;
  let n = 0; const next = () => ++n;
  const copy = () => {
    navigator.clipboard?.writeText(r.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  };
  return (
    <div className="pb-file">
      <PBLine n={next()}>{PBTok.c('#!/bin/bash')}</PBLine>
      <PBLine n={next()}>{PBTok.c('# best ways to reach me, in order of how fast i\u2019ll respond')}</PBLine>
      <PBLine n={next()}></PBLine>
      <PBLine n={next()}>
        {PBTok.k('email')}{PBTok.p('=')}{PBTok.s(`"${r.email}"`)}{' '}
        <button className="pb-copy-inline" onClick={copy}>
          {copied ? '✓ copied' : 'copy'}
        </button>
      </PBLine>
      <PBLine n={next()}>{PBTok.k('linkedin')}{PBTok.p('=')}{PBTok.s(`"https://${r.linkedin}"`)}{' '}<a className="pb-link-inline" href={`https://${r.linkedin}`} target="_blank" rel="noreferrer">open ↗</a></PBLine>
      <PBLine n={next()}>{PBTok.k('github')}{PBTok.p('=')}{PBTok.s(`"https://${r.github}"`)}{' '}<a className="pb-link-inline" href={`https://${r.github}`} target="_blank" rel="noreferrer">open ↗</a></PBLine>
      <PBLine n={next()}>{PBTok.k('phone')}{PBTok.p('=')}{PBTok.s(`"${r.phone}"`)}</PBLine>
      <PBLine n={next()}></PBLine>
      <PBLine n={next()}>{PBTok.c('# i read everything. typical reply: < 24h.')}</PBLine>
    </div>
  );
}

// ── File registry ─────────────────────────────────────────────
const PB_FILES = [
  { id: 'about', name: 'about.md', icon: 'M', lang: 'markdown', component: PBFileAbout },
  { id: 'experience', name: 'experience.ts', icon: 'TS', lang: 'typescript', component: PBFileExperience },
  { id: 'projects', name: 'projects.tsx', icon: 'TSX', lang: 'react', component: PBFileProjects },
  { id: 'skills', name: 'skills.json', icon: '{}', lang: 'json', component: PBFileSkills },
  { id: 'contact', name: 'contact.sh', icon: '$', lang: 'bash', component: PBFileContact },
];

function PortfolioB({ accent = 'green' }) {
  const [active, setActive] = React.useState('about');
  const [openTabs, setOpenTabs] = React.useState(['about']);
  const r = window.PA_RESUME;

  const open = (id) => {
    setActive(id);
    setOpenTabs((tabs) => tabs.includes(id) ? tabs : [...tabs, id]);
  };
  const close = (id, e) => {
    e.stopPropagation();
    setOpenTabs((tabs) => {
      const next = tabs.filter((t) => t !== id);
      if (active === id && next.length) setActive(next[next.length - 1]);
      return next;
    });
  };

  // j/k cycle files
  React.useEffect(() => {
    const onKey = (e) => {
      if (e.target.matches('input, textarea, [contenteditable], button')) return;
      if (e.key === 'j' || e.key === 'k') {
        const ids = PB_FILES.map((f) => f.id);
        const i = ids.indexOf(active);
        const next = e.key === 'j' ? Math.min(i + 1, ids.length - 1) : Math.max(i - 1, 0);
        open(ids[next]);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active]);

  const ActiveFile = PB_FILES.find((f) => f.id === active);

  return (
    <div className={`pb-root pb-accent-${accent}`}>
      {/* Title bar */}
      <div className="pb-titlebar">
        <div className="pb-tb-traffic">
          <span></span><span></span><span></span>
        </div>
        <div className="pb-tb-title">~/sai-preetam-earanti — portfolio</div>
        <div className="pb-tb-spacer"></div>
      </div>

      <div className="pb-body">
        {/* Activity bar */}
        <aside className="pb-activity">
          <button className="pb-act-btn is-active" title="Files">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 4h6l2 2h6v10H3V4z" stroke="currentColor" strokeWidth="1.5" /></svg>
          </button>
          <button className="pb-act-btn" title="Search">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="9" cy="9" r="5" stroke="currentColor" strokeWidth="1.5" /><path d="m13 13 4 4" stroke="currentColor" strokeWidth="1.5" /></svg>
          </button>
          <button className="pb-act-btn" title="Source control">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="6" cy="6" r="2" stroke="currentColor" strokeWidth="1.5" /><circle cx="6" cy="14" r="2" stroke="currentColor" strokeWidth="1.5" /><circle cx="14" cy="14" r="2" stroke="currentColor" strokeWidth="1.5" /><path d="M6 8v4M8 14h4" stroke="currentColor" strokeWidth="1.5" /></svg>
          </button>
        </aside>

        {/* Sidebar */}
        <aside className="pb-sidebar">
          <div className="pb-side-head">EXPLORER</div>
          <div className="pb-side-folder">
            <span className="pb-side-caret">▾</span>
            <span className="pb-side-folder-name">SAI · PORTFOLIO</span>
          </div>
          <ul className="pb-side-files">
            {PB_FILES.map((f) => (
              <li key={f.id}>
                <button
                  className={`pb-side-file ${active === f.id ? 'is-active' : ''}`}
                  onClick={() => open(f.id)}
                >
                  <span className={`pb-icon pb-icon-${f.lang}`}>{f.icon}</span>
                  <span>{f.name}</span>
                </button>
              </li>
            ))}
          </ul>

          <div className="pb-side-head pb-side-head-2">QUICK FACTS</div>
          <div className="pb-quickfacts">
            <div><span>📍</span> Austin, TX</div>
            <div><span>🎓</span> UT Austin · &lsquo;28</div>
            <div><span>📊</span> GPA {r.edu.gpa}</div>
            <div><span>💼</span> Open: Sum &lsquo;26</div>
          </div>
        </aside>

        {/* Editor */}
        <main className="pb-editor">
          {/* Tab strip */}
          <div className="pb-tabs">
            {openTabs.map((id) => {
              const f = PB_FILES.find((x) => x.id === id);
              return (
                <button
                  key={id}
                  className={`pb-tab ${active === id ? 'is-active' : ''}`}
                  onClick={() => setActive(id)}
                >
                  <span className={`pb-icon pb-icon-${f.lang}`}>{f.icon}</span>
                  <span>{f.name}</span>
                  <span className="pb-tab-close" onClick={(e) => close(id, e)}>×</span>
                </button>
              );
            })}
          </div>

          {/* Breadcrumb */}
          <div className="pb-breadcrumb">
            <span>sai</span>
            <span className="pb-bc-sep">›</span>
            <span>portfolio</span>
            <span className="pb-bc-sep">›</span>
            <span className="pb-bc-current">{ActiveFile.name}</span>
          </div>

          {/* File content */}
          <div className="pb-content">
            <ActiveFile.component />
          </div>

          {/* Status bar */}
          <div className="pb-status">
            <span className="pb-status-item pb-status-accent">⎇ main</span>
            <span className="pb-status-item">↑ 0 ↓ 0</span>
            <span className="pb-status-item">⊘ 0</span>
            <span className="pb-status-spacer"></span>
            <span className="pb-status-item">{ActiveFile.lang}</span>
            <span className="pb-status-item">UTF-8</span>
            <span className="pb-status-item">LF</span>
            <span className="pb-status-item">Ln 1, Col 1</span>
            <span className="pb-status-item pb-status-accent">● ready to talk</span>
          </div>
        </main>
      </div>
    </div>
  );
}

window.PortfolioB = PortfolioB;
