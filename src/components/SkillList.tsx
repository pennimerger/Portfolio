import { useTheme } from '../context/ThemeContext'
import checkMarkIconDark from '../assets/checkmark-dark.svg'
import checkMarkIconLight from '../assets/checkmark-light.svg'

type skillProp = {
  skill:string
}
function SkillList({skill}:skillProp) {
  const { theme } = useTheme()
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark

  return (
    <span className='flex items-center gap-[5px]'>
      <img 
      src={checkMarkIcon} className='w-[20px]'
      alt="Checkmark icon" />
      <p className='text-[20px]'>{skill}</p>
    </span>
  )
}

export default SkillList