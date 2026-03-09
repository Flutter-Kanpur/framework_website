import SponsorsSection from "../components/SponsorsSection";
import Footer from "../components/Footer";

export const metadata = {
    title: "Sponsors | FrameWork 1.0 – Flutter Kanpur",
    description: "Our partners and sponsors making FrameWork 1.0 possible.",
};

export default function SponsorsPage() {
    return (
        <main className="pt-24">
            <SponsorsSection />
            <Footer />
        </main>
    );
}
