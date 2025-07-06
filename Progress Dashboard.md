---
Tasks: 175
CurrentTasks: "30"
barColor: red
frontColor: red
---


```dataviewjs
/* ---------- 1.  YOUR DATA ---------- */
const bars = [
  { title: "LOGGING",   current: 10, total: 100, color: "#ff9800" },
  { title: "POGOD",   current:  10, total:   200, color: "#4caf50" },
  { title: "MINISTRY", current: 10, total:  40, color: "#2196f3" },
  { title: "SELF DEVELOPMENT", current: 5, total:  40, color: "#ffffff" },
];

/* ---------- 2.  ONE-OFF CSS (added to <head> only once) ---------- */
const styleId = "dv-progress-style";
if (!document.getElementById(styleId)) {
  const css = `
    .dv-bar       { margin:0.6em 0; }
    .dv-track     { width:100%; height:14px; border-radius:4px;
                    background:var(--background-modifier-border); overflow:hidden; }
    .dv-fill      { height:100%; border-radius:4px 0 0 4px; }
  `;
  const s = Object.assign(document.createElement("style"), { id: styleId, textContent: css });
  document.head.appendChild(s);
}

/* ---------- 3.  RENDER ---------- */
bars.forEach(b => {
  const pct = b.total ? Math.round(b.current / b.total * 100) : 0;

  /* outer wrapper */
  const wrap = dv.el("div", "", { class: "dv-bar" });

  /* title & numbers */
  wrap.innerHTML = `
    <strong>${b.title}</strong>
    <span style="float:right;">${b.current}/${b.total} (${pct}%)</span><br>
  `;

  /* track + fill */
  const track = Object.assign(document.createElement("div"), { className: "dv-track" });
  const fill  = Object.assign(document.createElement("div"),  { className: "dv-fill"  });

  fill.style.width  = pct + "%";
  fill.style.background = b.color;

  track.appendChild(fill);
  wrap.appendChild(track);
});

```


# DAY --