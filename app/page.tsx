import Header from "./components/sections/header";
import Hero from "./components/sections/hero";
import About from "./components/sections/about";
import Experiences from "./components/sections/experiences";
import Projects from "./components/sections/projects";
import Contact from "./components/sections/contact";
import Footer from "./components/sections/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "64px" }}>
        <Hero />
        <About />
        <Experiences />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
