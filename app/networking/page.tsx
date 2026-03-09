import NetworkingSection from "../components/NetworkingSection";
import Footer from "../components/Footer";

export const metadata = {
    title: "Networking | FrameWork 1.0 – Flutter Kanpur",
    description: "Networking events at FrameWork 1.0 — mixers, mentorship, hiring, and more.",
};

export default function NetworkingPage() {
    return (
        <main className="pt-24">
            <NetworkingSection />
            <Footer />
        </main>
    );
}
