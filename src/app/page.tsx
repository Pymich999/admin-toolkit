import Hero from "@/components/administrative-toolkit/Hero";
import About from "@/components/administrative-toolkit/About";
import Courses from "@/components/administrative-toolkit/Courses";
import TrainingJourney from "@/components/administrative-toolkit/TrainingJourney";
import Benefits from "@/components/administrative-toolkit/Benefits";
import RegistrationCTA from "@/components/administrative-toolkit/RegistrationCTA";
import FAQ from "@/components/administrative-toolkit/FAQ";
import Footer from "@/components/administrative-toolkit/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Courses />
      <TrainingJourney />
      <Benefits />
      <RegistrationCTA />
      <FAQ />
      <Footer />
    </main>
  );
}
