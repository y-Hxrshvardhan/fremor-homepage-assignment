const items = [['Simple', 'No jargon. If a number matters, we say what it means.'], ['Clear', 'One honest picture of your money instead of ten tabs.'], ['Easy to use', 'Built so the next step is obvious, not buried.']]
export default function Principles() {
  return (<section className="sec wrap" id="principles" aria-labelledby="pr">
    <div className="head"><h2 id="pr">Finance should not need a translator</h2></div>
    <dl className="prin">{items.map(([t, d]) => <div key={t}><dt>{t}</dt><dd>{d}</dd></div>)}</dl>
  </section>)
}
