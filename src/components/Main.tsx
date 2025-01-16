import About from "./About";
import Experience from "./Experience";
import Footer from "./Footer";
import Projects from "./Projects";

export default function Main() {
  return (
    <div className="pt-24 lg:w-[52%] lg:py-24">
      <About />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}
