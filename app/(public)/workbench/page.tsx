import { WorkbenchPageContent } from "@/components/public/workbench/workbench-page-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workbench",
  description:
    "Active experiments, prototypes, and work in progress. A peek into the digital workshop where ideas take shape.",
  keywords: [
    "experiments",
    "prototypes",
    "work in progress",
    "playground",
    "dev tools",
  ],
};

export default function WorkbenchPage() {
  return (
    <div className="pt-24">
      <WorkbenchPageContent />
    </div>
  );
}
