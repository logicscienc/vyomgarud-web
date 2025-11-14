import "./App.css";
import Navbar from "./component/Navbar";
import Cursor from "./common/Cursor";
import Hero from "./component/Hero";
import About from "./component/About";
import Capabilities from "./component/Capabilities";
import Highlights from "./component/Highlights";
import Contact from "./component/Contact";
function App() {
  return (
    <div>
      <Cursor />
      <Navbar />

      
      <section  className="hero-container">
        <Hero />
      </section>

      
      <section id="about" className="about-container">
        <About />
      </section>

      <section id="capabilities" className="capabilities-container">
        <Capabilities />
      </section>

      <section  id="highlights" className="highlights-container">
  <Highlights />
</section>

<section id="contact" className="contact">
    <Contact/>
</section>
    </div>
  );
}

export default App;
                                                                                         
