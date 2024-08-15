import {icons} from "../assets/Footer/icons"

const image = document.getElementById("movingImage")
const container = document.querySelector('.icons-container')

const moveImage = ()=>{
  if (!container || !image) return
  const containerRect = container.getBoundingClientRect()
  const imageRect = image.getBoundingClientRect()

  // Random new position within container bounds
  const maxX = containerRect.width - imageRect.width
  const maxY = containerRect.height - imageRect.height

  const newX = Math.random() * maxX
  const newY = Math.random() * maxY

  image!.style.transform = `translate(${newX}px, ${newY}px)`
}

setInterval(moveImage, 1000) // Moves the image every second

const Footer = () => {

  return (
    <div className='flex flex-col text-center px-10'>
      <div className='relative icons-container'>
      {icons.slice(0,1).map((icon) => (
        <img className='icons animate-spin-slow'
        src={icon.img} 
        alt={icon.alt} key={icon.id}/>
      ))}
      {icons.slice(1).map((icon) => (
        <img className='icons'
        src={icon.img} id="movingImage"
        alt={icon.alt} key={icon.id}/>
      ))}
      </div>
      <p className="text-[13px] lg:text-[16px]">
        &copy; 2024 Emmanuel Ashiegbulam. <br />
        All rights reserved.
      </p>
    </div>
  )
}

export default Footer