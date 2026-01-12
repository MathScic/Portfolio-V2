import Hero from "./components/home/Hero";
import ProcessPreview from "./components/home/ProcessReview";
import ProjectsPreview from "./components/home/ProjectPreview";
import ServicesPreview from "./components/home/ServicesPreview";
import AboutPreview from "./components/home/AboutPreview";
import Contact from "./components/home/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <ProcessPreview />
      <ProjectsPreview />
      <AboutPreview />
      <Contact />
    </>
  );
}
