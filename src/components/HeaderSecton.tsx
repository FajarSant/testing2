'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="bg-green-600 text-white text-center px-6 py-12 min-h-screen flex flex-col justify-center"
    >
      <h1 className="text-3xl md:text-5xl font-bold mb-4">Boros Bensin Bikin Dompet Tipis?</h1>
      <p className="text-lg md:text-2xl max-w-2xl mx-auto">
        Gas Tipis Pakai Cleanoz! <br />
        <span className="font-semibold">
          Tiga Tetes Bukan Cuma Irit, Tapi Bikin Mesin Enteng, Suara Halus, Dan Hemat Biaya Servis!
        </span>
      </p>
      <div className="mt-6 flex justify-center">
        <Image
          src="https://cdn.scalev.id/Image/_80DHjOh15B-7JCgbxr9fvoGNEeow1etLsnhm-ELi7s/1740124810449-headline_LP_scalev.webp"
          alt="Botol Cleanoz"
          width={200}
          height={200}
        />
      </div>
    </motion.section>
  )
}
