import ScheduleSection from "../components/ScheduleSection";
import Footer from "../components/Footer";

export const metadata = {
    title: "Schedule | FrameWork 1.0 – Flutter Kanpur",
    description: "View the full 2-day schedule for FrameWork 1.0, Flutter Kanpur's hackathon and tech conference.",
};

export default function SchedulePage() {
    return (
        <main className="pt-24">
            <ScheduleSection />
            <Footer />
        </main>
    );
}
