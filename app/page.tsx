import Hero from "./components/home/Hero";
import ProcessPreview from "./components/home/ProcessReview";
import ProjectsPreview from "./components/home/ProjectPreview";
import ServicesPreview from "./components/home/ServicesPreview";
import OffreSection from "./components/home/OffreSection";
import AboutPreview from "./components/home/AboutPreview";
import Contact from "./components/home/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <OffreSection />
      <ProcessPreview />
      <ProjectsPreview />
      <AboutPreview />
      <Contact />
    </>
  );
}
