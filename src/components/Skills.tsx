import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useTheme } from "@/context/ThemeContext"
import SkillList from "./SkillList"
import { Separator } from "./ui/separator"

const Skills = () => {
  const { theme } = useTheme()

  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <div
      className="w-full h-full relative flex items-center justify-center overflow-hidden"
      ref={ref}
    >
      <motion.div 
      className="flex flex-col gap-[30px] z-10">
        <h1 className="mb-[60px] mt-20 lg:mb-[75px] text-[60px] text-center lg:text-[72px]">
          SKILLS
        </h1>
      <div className="skills">
        <SkillList skill="HTML" />
        <SkillList skill="CSS" />
        <SkillList skill="JavaScript" />
        <SkillList skill="TypeScript" />
        <SkillList skill="Python" />
      </div>
      <Separator />
      <div className="skills">
        <SkillList skill="React" />
        <SkillList skill="Tailwind CSS" />
      </div>
      <Separator />
      <div className="skills">
        <SkillList skill="Node" />
        <SkillList skill="MongoDB" />
        <SkillList skill="Git" />
        <SkillList skill="Express" />
        <SkillList skill="Postgress" />
      </div>
      </motion.div>
        {theme === 'dark' ? 
        <motion.div style={{ x: yBg }} 
        className="bg-[url('/stars.png')] bg-cover bg-bottom w-full h-full absolute z-10"></motion.div> 
        : 
        <motion.div
        className="bg-[url('/sun.png')] bg-no-repeat bg-contain bg-center w-full h-full absolute z-0"
        style={{
          y: yBg,
        }}
      ></motion.div>}
    </div>
  )
}

export default Skills