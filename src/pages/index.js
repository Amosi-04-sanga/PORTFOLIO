import React from "react"
import { About, Contacts, Experience, Feedback, Hero, Navbar, Tech, Works } from "../components"


export default function Home() {
  return (
    <>
      < Hero />
      <div className="w-[95vw] md:w-[90vw] mx-auto">
        <About />
        < Experience />
        < Works />
        < Tech />
        < Contacts />
      </div>
    </>
  )
}

