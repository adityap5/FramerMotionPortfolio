import { CONTACT } from '../constants/index'
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl ">Contact</h1>
      <div className="tracking-tighter text-center">
        <motion.p
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="my-4">{CONTACT.address}</motion.p>
        <motion.p
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="my-4">{CONTACT.phoneNo}</motion.p>
        <a href="#" className="border-b">{CONTACT.email}</a>
      </div>
    </div>
  )
}

export default Contact
