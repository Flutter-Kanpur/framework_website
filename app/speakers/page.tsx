import SpeakersSection from "../components/SpeakersSection";
import Footer from "../components/Footer";

export const metadata = {
    title: "Speakers | FrameWork 1.0 – Flutter Kanpur",
    description: "Meet the expert speakers at FrameWork 1.0, Flutter Kanpur's annual hackathon and tech conference.",
};

export default function SpeakersPage() {
    return (
        <main className="pt-24">
            <SpeakersSection />
            <Footer />
        </main>
    );
}
