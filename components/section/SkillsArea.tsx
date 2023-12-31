import Skill from "@/components/skill/Skill";
import { SKILLS } from "@/shared/utilities/Skills";

export default function SkillsArea() {
  return (
    <section className="text-center" id="skills">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-black">Skills</h2>
        <p className="my-3 text-lg">These are the Technologies that i like to work with</p>
        <div className="max-w-md md:max-w-6xl mx-auto grid grid-cols-3 lg:grid-cols-5 mt-10 px-3 gap-8 justify-items-center">
            {SKILLS.map((skill) => {
              return <Skill key={skill.name} name={skill.name} icon={skill.icon}/>
            })}
        </div>
    </section>
  )
}