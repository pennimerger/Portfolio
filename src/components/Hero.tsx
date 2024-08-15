import { motion } from "framer-motion"
import Emmanuel from "../assets/Emmanuel.png"
import sun from '../assets/sun.svg'
import moon from '../assets/moon.svg'
import { useTheme } from "@/context/ThemeContext"

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  opposite: {
    x: 500,
    opacity: 1,
  },
}

const Hero = () => {
  const { theme, toggleTheme } = useTheme()

  const themeIcon = theme === 'light' ? sun : moon
  
  return (
    <div className="relative h-[calc(100vh-100px)] mt-20">
      <div className="max-w-[1366px] h-full mx-auto">
        <motion.div
          className="lg:w-1/2 lg:h-full lg:flex lg:flex-col lg:justify-center lg:gap-10 h-1/2 w-full gap-5 items-center text-center"
          variants={textVariants}>
        <div className='flex flex-wrap items-center justify-center gap-2 overflow-hidden'>
        <motion.h2 
          variants={textVariants}
          initial="initial"
          animate="animate"
          className='hero-h2'>EMMANUEL</motion.h2>
          <motion.h2 
          variants={textVariants}
          initial="opposite"
          animate="animate"
          className='hero-h2'>ASHIEGBULAM</motion.h2>
        </div>
          <motion.h1 
          variants={textVariants}
          className='lg:text-[88px] text-[36px]'>
            Full Stack Web Developer.
          </motion.h1>
        </motion.div>
      </div>
      <div className="flex item-center h-full absolute lg:right-0 lg:w-[50%] w-full bottom-0 top-20">
        <img 
        src={Emmanuel} 
        className="relative w-full h-full object-contain" alt="" />
        <img
          className="w-[25px] h-[25px] top-40 relative z-10 right-40 cursor-pointer"
          src={themeIcon}
          alt="Theme mode icon"
          onClick={toggleTheme}
        />
      </div>
    </div>
  )
}

export default Hero