import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Skills from "../components/Skills";
import "../Styles/Home.css";

function Home() {
  return (
    <div className="home">
      <Hero />
      <About />
      <Skills />
      {/* <Portfolio /> */}
      <Services />
      <Contact />
    </div>
  );
}

export default Home;
