import { useState } from 'react'
import { inr, projection } from '../lib/finance.js'
const income = 85000
const spend = [['Rent and bills', 32000], ['Food', 14000], ['Transport', 6000], ['Subscriptions', 3200], ['Everything else', 12800]]
const moves = [['Cancel two unused subscriptions', 1200], ['Round spare cash up into savings', 2500], ['Cut one weekly takeaway', 1600]]
const tabs = ['Understand', 'Act', 'Grow']

function Understand() {
  const spent = spend.reduce((s, [, v]) => s + v, 0)
  return (<div>
    <p className="big">{inr(income - spent)}<span> left after spending this month</span></p>
    <ul className="bars">{spend.map(([k, v]) => (<li key={k}><span>{k}</span><div><i style={{ width: (v / income) * 100 + '%' }} /></div><b>{inr(v)}</b></li>))}</ul>
  </div>)
}
function Act() {
  const [on, setOn] = useState([true, false, false])
  const total = moves.reduce((s, [, v], i) => s + (on[i] ? v : 0), 0)
  return (<div>
    <p className="big">{inr(total)}<span> more saved each month</span></p>
    <ul className="moves">{moves.map(([k, v], i) => (<li key={k}><label><input type="checkbox" checked={on[i]} onChange={() => setOn(on.map((x, j) => (j === i ? !x : x)))} /><span>{k}</span><b>{inr(v)}</b></label></li>))}</ul>
    <p className="note">That is {inr(total * 12)} over a year.</p>
  </div>)
}
function Grow() {
  const [m, setM] = useState(10000)
  const [y, setY] = useState(10)
  const pts = projection(m, y)
  const end = pts[y], max = end.value || 1
  const path = (k) => pts.map((p, i) => `${i ? 'L' : 'M'}${(i / y) * 300 + 10},${130 - (p[k] / max) * 110}`).join(' ')
  return (<div>
    <p className="big">{inr(end.value)}<span> after {y} years, of which {inr(end.invested)} is yours</span></p>
    <svg viewBox="0 0 320 140" role="img" aria-label={`Chart of investing ${inr(m)} a month for ${y} years`}>
      <path d={path('value') + ' L310,130 L10,130Z'} className="area" /><path d={path('value')} className="line" /><path d={path('invested')} className="base" />
    </svg>
    <div className="sliders">
      <label>Monthly amount <b>{inr(m)}</b><input type="range" min="1000" max="50000" step="1000" value={m} onChange={(e) => setM(+e.target.value)} /></label>
      <label>Years <b>{y}</b><input type="range" min="1" max="30" value={y} onChange={(e) => setY(+e.target.value)} /></label>
    </div>
  </div>)
}
export default function Preview() {
  const [t, setT] = useState(0)
  const Panel = [Understand, Act, Grow][t]
  return (<section className="sec wrap" id="preview" aria-labelledby="pv">
    <div className="head"><h2 id="pv">Try the idea, not a screenshot of it</h2><p>A small example household, with every number worked out live. Change something and see what it does.</p></div>
    <div className="card">
      <div role="tablist" aria-label="Fermor demo" className="tabs">
        {tabs.map((n, i) => <button key={n} role="tab" id={'t' + i} aria-selected={t === i} aria-controls="panel" onClick={() => setT(i)}>{n}</button>)}
      </div>
      <div role="tabpanel" id="panel" aria-labelledby={'t' + t} tabIndex="0" key={t} className="panel"><Panel /></div>
      <p className="fine">Illustrative example with made-up figures and an assumed 10% yearly return. Not financial advice or a promise of returns.</p>
    </div>
  </section>)
}
