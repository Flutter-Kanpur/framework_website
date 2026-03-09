import TracksSection from "../components/TracksSection";
import Footer from "../components/Footer";

export const metadata = {
    title: "Tracks | FrameWork 1.0 – Flutter Kanpur",
    description: "Explore the hackathon tracks at FrameWork 1.0 — from Flutter Forward to AI/ML integration.",
};

export default function TracksPage() {
    return (
        <main className="pt-24">
            <TracksSection />
            <Footer />
        </main>
    );
}
