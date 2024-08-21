import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { toast } from "sonner"
import whatsapp from "../assets/whatsapp.jpg"
import { Separator } from "./ui/separator"
import { Button } from "./ui/button"

const serviceId = import.meta.env.VITE_SERVICE_ID
const templateId = import.meta.env.VITE_TEMPLATE_ID
const publicKey = import.meta.env.VITE_PUBLIC_KEY

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    if (formRef.current)
    emailjs
      .sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      )
      .then(
        (result) => {
          setSuccess(true)
          success && toast.success("Sent to Emmanuel.")
          error && console.log(error)
          formRef.current?.reset()
          setIsLoading(false)
          console.log(result)
        },
        (error) => {
          setError(true)
          console.log(error)
        }
      )
  }
  
  return (
    <div className="lg:relative h-full py-20 overflow-hidden">
      <h1 className="h-1 mb-20 pb-2 lg:pb-5">
      CONTACT
      </h1>
      <Separator className="mb-10 bg-foreground"/>
      <form
      ref={formRef}
      onSubmit={sendEmail}
      className="w-full lg:w-1/2 flex flex-col justify-center items-center gap-5 lg:gap-10"
    >
      <input className="input" type="text" required placeholder="Name" name="name"/>
      <input className="input" type="email" required placeholder="Email" name="email"/>
      <textarea rows={8} className="input" placeholder="Message" name="message"/>
      <Button disabled={isLoading}
      className="bborder text-white w-1/4">{isLoading? "Sending..." : "Send"}</Button>
    </form>
    <div className="flex flex-col gap-2 justify-center items-center h-full lg:right-0 lg:absolute lg:pt-20 lg:w-[50%] w-full bottom-0 mt-5">
      <h2 className="hero-h2 text-center">Scan for Whatsapp chat.</h2>
      <img 
      src={whatsapp} 
      className="lg:w-1/2 lg:h-1/2 w-1/4 h-1/4 object-contain" alt="whatsapp" 
      />
    </div>
  </div>
  )
}

export default Contact