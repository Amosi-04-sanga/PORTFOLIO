import emailjs from '@emailjs/browser'
import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import SectionWrapper from '../hoc/sectionWrapper'
import { styles } from '../styles'
import { fadeIn, slideIn, textVariant } from '../utils/motion'
import Link from 'next/link'



const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [loading, setLoading] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    // emailjs
    emailjs.send(
      "service_kwd7618",
      "template_fikcvtc",
      {
        from_name: form.name,
        to_name: "sanga amosi",
        from_email: form.email,
        to_email: "sangaamosi04@gmail.com",
        message: form.message
      },
      "skNoOkkBfsoNXwpTh"
    )
      .then(() => {
        setLoading(false)
        setForm({
          name: "",
          email: "",
          message: ""
        })
        alert("thanks i will come back to you as soon as possible!")
      })
      .catch(error => {
        console.log(error)
        alert("something went wrong!")
      })
  }

  return (
    <div  >
      <motion.div
        variants={slideIn("up", "tween", .1, 1)}
        className='mt-16 bg-blue-300 p-2 py-4 text-center mb-20'
      >
        <div className="">
          <p className={`${styles.sectionSubText} pt-4 inline-block relative text-lg half-underline`}>get in touch</p>
        </div>

        <div className="mt-8">
          <h4 className='uppercase'>I'm available for freelance</h4>
          <h2 className="mt-2">lets work Together!</h2>

          <div className="flex flex-col items-start text-left w-[70%] mx-auto">
            <div className='py-4 flex items-center justify-center'>
              <div className='mr-2'>
              <svg className='w-6 h-6 fill-blue-600' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
              </div>
              <div>
                <p>EMAIL</p>
                <p>sangaamosi04@gmail.com</p>
              </div>
            </div>
            <div className='py-4 flex items-center justify-center'>
              <div className='mr-2'>
              <svg className='w-6 h-6 fill-blue-600' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
              </div>
              <div>
                <p>WHATSAAP</p>
                <p>+255624454589</p>
              </div>
            </div>
            <div className='py-4 flex items-center justify-center'>
              <div className='mr-2'>
              <svg className='w-6 h-6 fill-blue-600' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
              </div>
              <div>
                <p>WORKING HOURS</p>
                <p>Flexible</p>
              </div>
            </div>

          </div>
          <div className="flex justify-center items-center flex-wrap">
            <Link className='block p-2' href="#"><svg className='w-6 h-6 fill-blue-600' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg></Link>
            <Link className='block p-2' href="#"><svg className='w-6 h-6 fill-blue-600' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg></Link>
            <Link className='block p-2' href="#"><svg className='w-6 h-6 fill-blue-600' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></Link>
            <Link className='block p-2' href="#"><svg className='w-6 h-6 fill-blue-600' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg></Link>
          </div>

        </div>

        <div className="bg-white p-2 rounded-md mt-8 md:w-[65vw] mx-auto">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='flex flex-col gap-8 mt-12'
          >
            <label className="flex flex-col">
              <span className='font-medium text-white-100 capitalize'>your name</span>
              <input
                type="text"
                name='name'
                required
                placeholder="what's your name"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                value={form.name}
                className='py-4 px-6 xs:py-1 xs:px-1 rounded-md bg-tertiary placeholder:text-secondary outline-none border-[1px] border-blue-500'
              />
            </label>
            <label className="flex flex-col">
              <span className='font-medium text-white-100 capitalize'>your email</span>
              <input
                type="email"
                name='email'
                required
                placeholder="what's your email"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                value={form.email}
                className='py-4 px-6 xs:py-1 xs:px-1 rounded-md bg-tertiary placeholder:text-secondary outline-none border-[1px] border-blue-500'
              />
            </label>
            <label className="flex flex-col">
              <span className='font-medium text-white-100 capitalize'>your message</span>
              <textarea
                rows='7'
                name='message'
                required
                placeholder="what do you want to say ..."
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                value={form.message}
                className='py-4 px-6 xs:py-1 xs:px-1 rounded-md bg-tertiary placeholder:text-secondary outline-none border-[1px] border-blue-500'
              />
            </label>
            <button
              type='submit'
              className='px-6 py-3 bg-blue-500 text-white w-fit rounded-xl block mx-auto outline-none shadow-md hover:bg-black-200 transition duration-200'
            >
              {!loading ? "send" : "sending..."}
            </button>
          </form>
        </div>

      </motion.div>

    </div>

  )
}

export default SectionWrapper(Contact, 'contact')