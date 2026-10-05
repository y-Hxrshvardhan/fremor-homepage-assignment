import { useState } from 'react'
import Logo from './Logo.jsx'
const links = [['How it works', '#how'], ['Try it', '#preview'], ['Principles', '#principles']]
export default function Header() {
  const [open, setOpen] = useState(false)
  return (<header className="header" id="top"><div className="wrap bar">
    <Logo />
    <nav aria-label="Primary" className={'nav' + (open ? ' open' : '')} id="nav">
      {links.map(([t, h]) => <a key={h} href={h} onClick={() => setOpen(false)}>{t}</a>)}
      <a className="btn btn-sm" href="#start" onClick={() => setOpen(false)}>Get started</a>
    </nav>
    <button className="menu" aria-expanded={open} aria-controls="nav" onClick={() => setOpen(!open)}>
      <span className="sr">{open ? 'Close menu' : 'Open menu'}</span><i /><i />
    </button>
  </div></header>)
}
