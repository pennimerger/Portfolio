import { Menu } from "lucide-react"
import { Sheet, SheetTrigger, SheetContent, SheetFooter, SheetTitle, SheetDescription, SheetClose } from "./ui/sheet"
import { Separator } from "./ui/separator"
import QuickId from "./QuickId"
import QuickLinks from "./QuickLinks"

const Sidebar = () => {
  return (
  <Sheet>
    <SheetTrigger>
      <Menu 
      className="bg-background w-10 h-10 pl-2"
      />
    </SheetTrigger>
    <SheetContent className="space-y-3 overflow-hidden z-[500]">
      <SheetTitle>
        <span className="flex flex-col justify-center items-center">
          <QuickId />
        </span>
      </SheetTitle>
      <Separator className="bg-foreground"/>
      <SheetDescription className="flex flex-col gap-4">
        <SheetClose>
          <QuickLinks />
        </SheetClose>
      </SheetDescription>
      <SheetFooter>
        <span className="absolute bottom-0 text-center overflow-hidden">
          <p className="text-[10px] px-[85px]">
            &copy; 2024 Emmanuel Ashiegbulam. <br />
            All rights reserved.
          </p>
        </span>
      </SheetFooter>
    </SheetContent>
  </Sheet>
  )
}

export default Sidebar