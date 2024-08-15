import { motion } from 'framer-motion'
import Sidebar from './Sidebar'


const Navbar = () => {
  return (
    <div className="h-[100px] w-full flex fixed top-0 z-[100]">
      <div className='relative z-10'>
      <Sidebar/>
      </div>
      <div className="bg-background mx-auto mr-2 h-10 w-full absolute z-0">
        <div className="font-bold overflow-hidden">
          <motion.div
          className='whitespace-nowrap pt-2'
          initial={{ x: "200%"}}
          animate={{ x: "-120%"}}
          transition={{ 
            repeat: Infinity,
            repeatType: "loop",
            duration: 38, }}
          >
            Multidisciplinary Engineer With FullStack Expertise... 📞+234 708 767 0208
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Navbar