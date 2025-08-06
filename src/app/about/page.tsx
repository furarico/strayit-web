import PageTitle from "@/components/page-title";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - STRAY-IT",
};

export default function Page() {
  return (
    <div>
      <PageTitle title="About" />

      <div className="flex flex-col justify-center items-center h-96">
        <div className="text-4xl font-bold text-center">準備中</div>
      </div>
    </div>
  );
}
