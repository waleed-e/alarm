import Contact from './Compenents/contact/Contact';
import Cursor from './Compenents/cursor/Cursor';
import Hero from './Compenents/hero/Hero';
import Navbar from './Compenents/navbar/Navbar';
import Parallax from './Compenents/parallax/Parallax';
import Portfolio from './Compenents/portfolio/Portfolio';
import Services from './Compenents/services/Services';
import './app.scss'
const App = () => {
  return <div>
     <Cursor/>
    <section id="Homepage">
    <Navbar/>
    <Hero/>
    </section>
    <section id="Parallax"><Parallax type="services"/></section>
    <section id="Services"><Services/></section>
    <section id='Portfolio'><Parallax type="portfolio"/></section>
<Portfolio/>
    <section id="Contact">
      <Contact/>
    </section>
   
  </div>;
};

export default App;
