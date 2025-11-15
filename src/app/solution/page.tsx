"use client";

import Hero from "../components/solution/Hero";
import GuidedDataEntry from "../components/solution/GuidedDataEntry";
import DocumentHandling from "../components/solution/DocumentHandling";
import ERPIntegration from "../components/solution/ERPIntegration";
import DashboardsAnalytics from "../components/solution/DashboardsAnalytics";
import PredictiveInsights from "../components/solution/PredictiveInsights";
import Reporting from "../components/solution/Reporting";
import ExpertSupport from "../components/solution/ExpertSupport";

export default function SolutionsPage() {
  return (
    <main className="bg-white text-gray-900">
      <Hero />
      <GuidedDataEntry />
      <DocumentHandling />
      <ERPIntegration />
      <DashboardsAnalytics />
      <PredictiveInsights />
      <Reporting />
      <ExpertSupport />
    </main>
  );
}
