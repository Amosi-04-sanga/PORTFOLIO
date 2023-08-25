import React, { useEffect, useState } from 'react'
import { navLinks } from '../constants'
import Link from 'next/link'
import { close, menu } from '../assets'
import Image from 'next/image'


const Navbar = () => {
  const [darkmode, setDarkmode] = useState(true)
  const [isopen, setIsopen] = useState(false)
  const [toggle, setToggle] = useState(false)
  const [active, setActive] = useState('')

  return (
    <div className={`flex justify-between items-center p-4 bg-dark text-dark h-[10vh] sticky top-0 z-50`}>
      <div>
        <Link href="/" >
          LOGO
        </Link>
      </div>
      <div className="md:w-[40%] uppercase">

        <div className="md:hidden flex justify-between items-center">
          <div>
            <Image
              width={25}
              height={25}
              onClick={() => setToggle(!toggle)}
              src={!toggle ? menu : close}
              alt='hamburger'
              className='object-contain cursor-pointer'
            />
          </div>

          <ul className={`${!toggle ? 'hidden' : 'block'} z-10 fixed left-0 top-[10vh] h-[90vh] w-screen bg-[#0f172a] flex flex-col justify-center items-center list-none`}>
            {
              navLinks.map((link, index) => (
                <Link
                  href={`#${link.id}`}
                  key={link.id}
                  onClick={() => {
                    setToggle(!toggle)
                    setActive(link.title)
                  }}
                  className={`${active === link.title && 'text-amber-800'} cursor-pointer mb-4`}
                >
                  <li
                  >
                    {link.title}
                  </li>
                </Link>
              ))
            }
          </ul>

        </div>

        <ul className="sm:hidden md:flex justify-between items-center list-none">
          {
            navLinks.map((link, index) => (
              <Link key={index} href={`#${link.id}`} >
                <li
                  onClick={() => {
                    setActive(link.title)
                  }}
                  className={`${active === link.title && 'text-amber-800'} cursor-pointer`}
                  key={index}
                >
                  {link.title}
                </li>
              </Link>
            ))
          }
        </ul>

      </div>

    </div>
  )
}

export default Navbar

