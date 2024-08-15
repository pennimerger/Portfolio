import {motion} from "framer-motion"

const QuickLinks = () => {
  const items = ["Homepage", "Portfolio", "Skills", "Contact"]

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-10 mt-5">
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          className="text-[20px] lg:text-2xl text-foreground"
          key={item}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {item}
        </motion.a>
      ))}
    </div>
  )
}

export default QuickLinks