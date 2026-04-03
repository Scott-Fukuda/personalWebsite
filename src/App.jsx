import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Story from "./components/Story";
import SignalChain from "./components/SignalChain";
import Projects from "./components/Projects";
import Personal from "./components/Personal";
import PhotoStrip from "./components/PhotoStrip";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div style={{ background: '#0E0E0E', minHeight: '100vh' }}>
      <Navbar />
      <main className="pt-14">
        <Hero />
        <Story />
        <SignalChain />
        <Projects />
        <Personal />
        <PhotoStrip />
        <Contact />
      </main>
    </div>
  );
}
