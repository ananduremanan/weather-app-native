import HeadSection from "./HeadSection";
import LeftBottom from "./LeftBottom";
import RightBottom from "./RightBottom";

export default function Layout() {
  return (
    <div className="p-4 overflow-hidden">
      <HeadSection />
      <div className="mt-4 flex justify-between gap-8 h-auto">
        <LeftBottom />
        <RightBottom />
      </div>
    </div>
  );
}
