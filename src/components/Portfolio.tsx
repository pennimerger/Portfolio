import { useRef } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import {items} from "../assets/projects/portfolio"
import Project from "./Projects"

const Portfolio = () => {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  })

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  })

  return (
    <div className="relative" ref={ref}>
      <div className="sticky z-10 top-0 left-0 pt-[50px] text-center lg:text-5xl text-3xl">
        <h1>PORTFOLIO</h1>
        <motion.div style={{ scaleX }} className="h-[10px] bg-foreground"></motion.div>
      </div>
      {items.map((item) => (
        <Project item={item} key={item.id} />
      ))}
    </div>
  )
}

export default Portfolio