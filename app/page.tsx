import FooterContactArea from "@/components/section/FooterContactArea";
import LandingArea from "@/components/section/LandingArea";
import SkillsArea from "@/components/section/SkillsArea";
import WorksArea from "@/components/section/WorksArea";
import Wave from "@/components/util/Wave";
import WaveAlternative from "@/components/util/WaveAlternative";

export default function Home() {
  return (
    <>
      <LandingArea />
      <Wave />
      <SkillsArea />
      <WaveAlternative />
      <WorksArea />
      <Wave />
      <FooterContactArea />
    </>
  );
}
