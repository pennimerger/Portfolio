import reactsvg from "./react.svg"
import darkreact from "./react-dark.svg"
import githubLight from '../github-light.svg'
import githubDark from '../github-dark.svg'
import linkedinLight from '../linkedin-light.svg'
import linkedinDark from '../linkedin-dark.svg'
import html from "./html.svg"
import htmldark from "./html-dark.svg"
import tailwind from "./tailwind.svg"
import tailwindark from "./tailwind-dark.svg"
import stripe from "./stripe.svg"
import python from "./python.svg"
import postman from "./postman.svg"
import postgresql from "./postgresql.svg"
import postgresqldark from "./postgresql-dark.svg"
import paypal from "./paypal.svg"
import mongoDB from "./mongoDB.svg"
import javascript from "./javascript.svg"
import google from "./google.svg"
import cloudinary from "./cloudinary.svg"
import typescript from "./typescript.svg"
import whatsapp from "./whatsapp.svg"

// render,oauth,cloudinary
const theme = localStorage.getItem('theme')
export const icons = [
  {
    id: 1,
    img: theme==="light"? darkreact : reactsvg,
    alt: "React"
  },
  {
    id: 2,
    img: "vite.svg",
    alt: "Vite"
  },
  {
    id: 3,
    img: theme==="light"? githubLight : githubDark,
    alt: "Github"
  },
  {
    id: 4,
    img: theme==="light"? linkedinLight : linkedinDark,
    alt: "LinkedIn"
  },
  {
    id: 17,
    img: whatsapp,
    alt: "Whatsapp"
  },
  {
    id: 5,
    img: theme==="light"? html : htmldark,
    alt: "Html"
  },
  {
    id: 6,
    img: theme==="light"? tailwind : tailwindark,
    alt: "Tailwind"
  },
  {
    id: 7,
    img: typescript,
    alt: "typescript"
  },
  {
    id: 8,
    img: stripe,
    alt: "stripe"
  },
  {
    id: 9,
    img: python,
    alt: "python"
  },
  {
    id: 10,
    img: postman,
    alt: "postman"
  },
  {
    id: 11,
    img: theme==="light"? postgresql : postgresqldark,
    alt: "postgresql"
  },
  {
    id: 12,
    img: paypal,
    alt: "paypal"
  },
  {
    id: 13,
    img: mongoDB,
    alt: "mongoDB"
  },
  {
    id: 14,
    img: javascript,
    alt: "javascript"
  },
  {
    id: 15,
    img: google,
    alt: "google"
  },
  {
    id: 16,
    img: cloudinary,
    alt: "cloudinary"
  }
]