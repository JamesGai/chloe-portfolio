import InterestsSection from "../components/InterestsSection";
import IntroductionSection from "../components/IntroductionSection";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 space-y-12 py-12">
      <IntroductionSection />
      <InterestsSection />
    </div>
  );
}
