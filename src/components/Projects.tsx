import { Button } from "./ui/button"

type itemProps = {
  item: {
  id: number
  title: string
  img: string
  href: string
  class: string
  class_d: string
  desc: string
}}

const Project = ({ item }:itemProps) => {

  return (
    <section className="px-10">
      <div className="flex items-center justify-center w-full h-full overflow-hidden">
        <div className="max-w-[1366px] h-full mx-auto my-10 flex lg:flex-row items-center justify-center flex-col gap-[50px]">
          <div className="relative group flex-1 lg:h-1/2 w-1/2">
            <img 
            src={item.img} 
            alt="" className="w-full h-full object-contain lg:object-cover w-full transition-transform duration-300 ease-in-out lg:group-hover:scale-110 group-hover:scale-150"/>
          </div>
          <div className="transform-none !p-2 flex items-center text-center flex-col lg:flex-1 gap-[30px]">
            <h2 className={item.class}>{item.title}</h2>
            <p className={item.class_d}>{item.desc}</p>
            <Button 
            onClick={()=>{window.open(`${item.href}`, "_blank")}}
            className="hover w-[200px] text-background bg-foreground rounded-lg p-2">Source Code</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project