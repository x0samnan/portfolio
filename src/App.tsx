import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import ResumePage from "./components/ResumePage";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <ResumePage />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
