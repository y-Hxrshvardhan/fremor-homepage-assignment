import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Preview from './components/Preview.jsx'
import Steps from './components/Steps.jsx'
import Principles from './components/Principles.jsx'
import Cta from './components/Cta.jsx'
import Footer from './components/Footer.jsx'
export default function App() {
  return (<>
    <a className="skip" href="#main">Skip to content</a>
    <Header />
    <main id="main"><Hero /><Preview /><Steps /><Principles /><Cta /></main>
    <Footer />
  </>)
}
