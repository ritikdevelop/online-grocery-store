import { Button } from "@/components/ui/button";
import Image from "next/image";
import Slider from "./_components/Slider";
import GlobalAPi from "./_utils/GlobalAPi";

export default async function Home() {

  const sliderList = await GlobalAPi.getSliders();

  return (
    <div>
      {/* Sliders */}
      <Slider sliderList={sliderList} />
    </div>
  );
}
