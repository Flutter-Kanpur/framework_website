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
import CallForSpeakers from "./components/CallForSpeakers";
import HackathonSection from "./components/Hackathon";



// const hackathonData = {
//   title: "Build With Framework",
//   tagline: "Build What <Matters>",
//   description:"Build With Hackathon is a high-energy innovation event where developers, designers, and tech enthusiasts come together to build impactful solutions within a limited time. Participants will collaborate, brainstorm, and turn their ideas into real working products during an intense 10-hour development sprint.The hackathon is designed to encourage creativity, problem-solving, and rapid execution, providing a platform to showcase skills, learn new technologies, and connect with like-minded innovators. Whether you're a beginner or an experienced builder, this is your chance to create, compete, and make something meaningful.",
//   date: "24 April 2026",
//   duration: "10 Hours",
//   location: "Kanpur, India",
//   prize: "₹20,000+",
//   themes: ["Smart Recruitment"],
//   image: "/images/hackathon.jpg",
// };

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Tape />
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

      {/* <CTABanner
        variant="primary"
        heading="Get Ready to Build."
        subtext="Registrations for our 10hr hackathon are dropping soon. Stay tuned!"
        buttonText="Coming Soon"
        isDisabled={true}
        comingSoonDate="2026-03-22T12:00:00"
      /> */}

      {/* about section to be added here */}

  {/* <HackathonSection hackathon={hackathonData} />; */}


      <TracksSection />
      {/* <ScheduleSection /> */}

      {/* CTA 2: After schedule */}
      <section id="project-idea" className="scroll-mt-20">
        <CTABanner
          variant="gradient"
          heading="Got a Project Idea?"
          subtext="Form your team, pick a track, and bring your vision to life at the hackathon."
          buttonText="Submit Your Idea"
          buttonHref="#register"
        />
      </section>

      <CallForSpeakers />

      <SponsorsSection />
      {/* <NetworkingSection /> */}
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
