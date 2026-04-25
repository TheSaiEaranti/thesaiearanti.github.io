// Shared shell — Cmd-K palette, help overlay, Konami easter egg
// Used by the design canvas page and any standalone view.

function ShellOverlay({ active }) {
  // Hidden "hacker mode" — green-on-black + falling glyphs
  if (!active) return null;
  return (
    <div className="sh-hacker" aria-hidden="true">
      <canvas className="sh-rain" ref={(c) => {
        if (!c || c.dataset.init) return;
        c.dataset.init = '1';
        const ctx = c.getContext('2d');
        const resize = () => { c.width = window.innerWidth; c.height = window.innerHeight; };
        resize();
        window.addEventListener('resize', resize);
        const cols = Math.floor(window.innerWidth / 14);
        const drops = Array(cols).fill(0).map(() => Math.random() * window.innerHeight);
        const chars = '01アイウエオカキクケコサシスセソタチツテト∇∂∫λμπΣΔ';
        const tick = () => {
          ctx.fillStyle = 'rgba(0,8,0,0.08)';
          ctx.fillRect(0, 0, c.width, c.height);
          ctx.fillStyle = '#3dff8a';
          ctx.font = '13px JetBrains Mono, monospace';
          drops.forEach((y, i) => {
            const ch = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(ch, i * 14, y);
            drops[i] = y > c.height + Math.random() * 1000 ? 0 : y + 14;
          });
        };
        const id = setInterval(tick, 60);
        c.dataset.intervalId = id;
      }}></canvas>
      <div className="sh-hacker-banner">
        <span>↑↑↓↓←→←→BA · hacker mode engaged</span>
        <span className="sh-hint">press <kbd>Esc</kbd> to exit</span>
      </div>
    </div>
  );
}

function CommandPalette({ open, onClose, items, onPick }) {
  const [query, setQuery] = React.useState('');
  const [idx, setIdx] = React.useState(0);
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    if (open) { setQuery(''); setIdx(0); setTimeout(() => inputRef.current?.focus(), 30); }
  }, [open]);

  const filtered = items.filter((it) =>
    !query || it.label.toLowerCase().includes(query.toLowerCase()) ||
    (it.keywords || []).some((k) => k.toLowerCase().includes(query.toLowerCase()))
  );

  const onKey = (e) => {
    if (e.key === 'Escape') { onClose(); return; }
    if (e.key === 'ArrowDown') { e.preventDefault(); setIdx((i) => Math.min(i + 1, filtered.length - 1)); }
    if (e.key === 'ArrowUp') { e.preventDefault(); setIdx((i) => Math.max(i - 1, 0)); }
    if (e.key === 'Enter') { e.preventDefault(); if (filtered[idx]) { onPick(filtered[idx]); onClose(); } }
  };

  if (!open) return null;
  return (
    <div className="sh-palette-bg" onClick={onClose}>
      <div className="sh-palette" onClick={(e) => e.stopPropagation()}>
        <div className="sh-palette-input-row">
          <span className="sh-palette-prompt">›</span>
          <input
            ref={inputRef}
            className="sh-palette-input"
            value={query}
            onChange={(e) => { setQuery(e.target.value); setIdx(0); }}
            onKeyDown={onKey}
            placeholder="Type a command or search…"
          />
          <kbd className="sh-palette-kbd">esc</kbd>
        </div>
        <ul className="sh-palette-list">
          {filtered.length === 0 && <li className="sh-palette-empty">no matches</li>}
          {filtered.map((it, i) => (
            <li
              key={it.id}
              className={`sh-palette-item ${i === idx ? 'is-active' : ''}`}
              onMouseEnter={() => setIdx(i)}
              onClick={() => { onPick(it); onClose(); }}
            >
              <span className="sh-palette-icon">{it.icon || '◆'}</span>
              <span className="sh-palette-label">{it.label}</span>
              {it.hint && <span className="sh-palette-hint">{it.hint}</span>}
            </li>
          ))}
        </ul>
        <div className="sh-palette-foot">
          <span><kbd>↑</kbd><kbd>↓</kbd> navigate</span>
          <span><kbd>↵</kbd> select</span>
          <span><kbd>esc</kbd> close</span>
        </div>
      </div>
    </div>
  );
}

function HelpOverlay({ open, onClose }) {
  if (!open) return null;
  const rows = [
    ['⌘ K', 'open command palette'],
    ['/', 'focus search'],
    ['j / k', 'next / previous section'],
    ['?', 'toggle this panel'],
    ['Esc', 'close any overlay'],
    ['↑↑↓↓←→←→BA', 'something fun'],
  ];
  return (
    <div className="sh-help-bg" onClick={onClose}>
      <div className="sh-help" onClick={(e) => e.stopPropagation()}>
        <div className="sh-help-head">
          <span>keyboard shortcuts</span>
          <button className="sh-help-close" onClick={onClose}>×</button>
        </div>
        <ul className="sh-help-list">
          {rows.map(([k, v]) => (
            <li key={k}>
              <span className="sh-help-keys">
                {k.split(' ').map((p, i) => <kbd key={i}>{p}</kbd>)}
              </span>
              <span className="sh-help-desc">{v}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function useShell({ sectionIds = [], onJump }) {
  const [paletteOpen, setPaletteOpen] = React.useState(false);
  const [helpOpen, setHelpOpen] = React.useState(false);
  const [hackerMode, setHackerMode] = React.useState(false);
  const konamiBuf = React.useRef([]);

  React.useEffect(() => {
    const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
    const onKey = (e) => {
      // konami buffer (keys are case-insensitive for letters)
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      konamiBuf.current = [...konamiBuf.current, key].slice(-KONAMI.length);
      if (konamiBuf.current.join(',') === KONAMI.join(',')) {
        setHackerMode((h) => !h);
        konamiBuf.current = [];
      }

      const inField = e.target.matches('input, textarea, [contenteditable]');
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault(); setPaletteOpen((o) => !o); return;
      }
      if (e.key === 'Escape') { setPaletteOpen(false); setHelpOpen(false); setHackerMode(false); return; }
      if (inField) return;
      if (e.key === '?') { e.preventDefault(); setHelpOpen((o) => !o); return; }
      if (e.key === '/') { e.preventDefault(); setPaletteOpen(true); return; }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return { paletteOpen, setPaletteOpen, helpOpen, setHelpOpen, hackerMode };
}

window.ShellOverlay = ShellOverlay;
window.CommandPalette = CommandPalette;
window.HelpOverlay = HelpOverlay;
window.useShell = useShell;
