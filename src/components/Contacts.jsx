import emailjs from '@emailjs/browser'
import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import SectionWrapper from '../hoc/sectionWrapper'
import { styles } from '../styles'
import { fadeIn, slideIn, textVariant } from '../utils/motion'



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
    <div >
      <motion.div
        variants={slideIn("up", "tween", .1, 1)}
        className='p-8 bg-black-100 rounded-2xl'
      >
        <div className="text-center">
          <p className={`${styles.sectionSubText} inline-block relative text-lg half-underline`}>get in touch</p>
        </div>
        <div className="bg-blue-300 p-2 rounded-md mt-8">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='flex flex-col gap-8 mt-12 mx-2'
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
                className='py-4 px-6 rounded-sm bg-tertiary placeholder:text-secondary outline-none border-none'
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
                className='py-4 px-6 bg-tertiary placeholder:text-secondary outline-none border-none'
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
                className='py-4 px-6 bg-tertiary placeholder:text-secondary outline-none border-none'
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