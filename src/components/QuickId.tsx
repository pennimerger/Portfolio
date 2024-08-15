import githubLight from '../assets/github-light.svg'
import githubDark from '../assets/github-dark.svg'
import linkedinLight from '../assets/linkedin-light.svg'
import linkedinDark from '../assets/linkedin-dark.svg'
import { useTheme } from '@/context/ThemeContext'
import CV from '../assets/cv.pdf'
import { Button } from './ui/button'

const QuickId = () => {
  const { theme } = useTheme()

  const githubIcon = theme === 'light' ? githubLight : githubDark
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark
  return (
    <>
      <img
        src="Portrait.png"
        className="pl-1 w-40 h-40 lg:w-60 lg:h-60 object-contain rounded-full border-background border-2 bg-gradient-to-t from-background to-foreground"
        alt="Emmanuel's Portrait"
      />
        <span className='flex gap-[10px] justify-center'>
          <a href="https://github.com/pennimerger" target="_blank" className='socials'>
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://linkedin.com/in/emmanuel-ashiegbulam-5a2a38135" target="_blank" className='socials'>
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <a href={CV} download className='w-full'>
          <Button className="hover w-full text-background border-2 border-background bg-foreground">Resume</Button>
        </a>
    </>
  )
}
export default QuickId