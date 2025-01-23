//components
import { Navigation, RenderModel, RenderBackgroudImage } from "@/components";
import { MonitorModel } from "@/components/models";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <RenderBackgroudImage />
      <div className="w-full h-screen">
        <Navigation />
        <RenderModel>
          <MonitorModel />
        </RenderModel>
      </div>
    </main>
  );
}
