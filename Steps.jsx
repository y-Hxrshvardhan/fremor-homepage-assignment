const steps = [
  ['Understand', 'See everything in one place', 'Income, spending and savings laid out plainly, so the picture is clear before any decision is made.'],
  ['Act', 'Know the next step', 'Small, specific moves you can take today, each with what it changes for you.'],
  ['Grow', 'Keep building', 'Watch progress add up over months and years, and adjust as your life does.'],
]
export default function Steps() {
  return (<section className="sec wrap" id="how" aria-labelledby="hw">
    <div className="head"><h2 id="hw">From confusing to confident, in three moves</h2></div>
    <ol className="steps">{steps.map(([k, t, d], i) => (<li key={k}><span className="n">{i + 1}</span><h3>{k}: {t}</h3><p>{d}</p></li>))}</ol>
  </section>)
}
