import { Skill } from "@/shared/utilities/Skills";
import Image from "next/image";

export default function Skill({ icon, name }: Skill) {
  return (
    <div>
      <Image src={icon} alt={name} width={80} height={80} className="w-14 md:w-20"/>
      <p className="my-2">{name}</p>
    </div>
  );
}
