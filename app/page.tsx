import HeroSection from "./components/HeroSection";
import FrameworkScrollSection from "./components/FrameworkScrollSection";
// import SpeakersSection from "./components/SpeakersSection";
import CTABanner from "./components/CTABanner";
import TracksSection from "./components/TracksSection";
// import ScheduleSection from "./components/ScheduleSection";
import SponsorsSection from "./components/SponsorsSection";
import NetworkingSection from "./components/NetworkingSection";
// import LocationSection from "./components/LocationSection";
// import RegisterForm from "./components/RegisterForm";
import Footer from "./components/Footer";
import AboutSection from "./components/About";
import Tape from "./components/AnnoucementTape";

export default function Home() {
  return (
    <main>
      <HeroSection />

      <Tape/>
      <AboutSection/>

      <AboutSection />

      <FrameworkScrollSection />
      {/* <SpeakersSection /> */}

      {/* CTA 1: After speakers */}
      {/* <CTABanner
        variant="primary"
        heading="Ready to Build?"
        subtext="Join 500+ developers for 48 hours of hacking, learning, and networking."
        buttonText="Register Now →"
      /> */}

      <CTABanner
        variant="primary"
        heading="Get Ready to Build."
        subtext="Registrations for our 48-hour hackathon are dropping soon. Stay tuned!"
        buttonText="Coming Soon ⏳"
        isDisabled={true}
      />

      {/* about section to be added here */}

      <TracksSection />
      {/* <ScheduleSection /> */}

      {/* CTA 2: After schedule */}
      <CTABanner
        variant="gradient"
        heading="Got a Project Idea?"
        subtext="Form your team, pick a track, and bring your vision to life at the hackathon."
        buttonText="Submit Your Idea"
        buttonHref="#register"
      />

      <SponsorsSection />
      <NetworkingSection />
      {/* <LocationSection /> */}
      {/* <RegisterForm /> */}

      {/* CTA 3: Before footer */}
      {/* <CTABanner
        variant="outline"
        heading="Don't Miss Out"
        subtext="Limited seats available. Early bird registration closes soon."
        buttonText="Grab Your Spot"
      /> */}

      <Footer />
    </main>
  );
}
