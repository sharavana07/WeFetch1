"use client";

import HeroSection from "./components/HeroSection";
import WhySustainability from "./components/WhySustainability";
import HowWefetchWorks from "./components/HowWefetchWorks";
import WhatYouGet from "./components/WhatYouGet";
import WorkWithWefetch from "./components/WorkWithWefetch";
import ImpactStepsSection from "./components/SustainabilityData"
import { JSX } from "react";

export default function Home(): JSX.Element {
  return (
    <main className="bg-white text-gray-900 overflow-hidden">
      <HeroSection />
      <WhySustainability />
      <HowWefetchWorks />
      <WhatYouGet />
      <WorkWithWefetch />
      <ImpactStepsSection />
    </main>
  );
}
