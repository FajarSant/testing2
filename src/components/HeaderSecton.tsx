'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Typewriter } from 'react-simple-typewriter'

export default function HeroSection() {
  return (
    <section className="bg-green-600 text-white px-6 py-16 md:py-24 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Teks di kiri */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 text-center md:text-left space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block bg-white text-green-700 font-semibold text-sm px-4 py-1 rounded-full shadow"
          >
            Solusi Bensin Irit & Mesin Awet
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold min-h-[60px]"
          >
            <Typewriter
              words={[
                'Boros Bensin Bikin Dompet Tipis?',
                'Gas Tipis Pakai Cleanoz!',
                'Tarikan Enteng, Mesin Halus!',
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={2000}
            />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl"
          >
            <span className="font-semibold">
              Cuma 3 Tetes, Langsung Kerasa Tarikannya. Bikin Nyaman Jalan Jauh & Irit BBM Harian!
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="#order" passHref>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-700 font-bold py-3 px-6 rounded-full shadow-lg hover:bg-green-100 transition"
              >
                Pesan Sekarang
              </motion.button>
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            viewport={{ once: true }}
            className="font-bold text-lg text-green-100 mt-2"
          >
            &ldquo;Gas Tipis, Anti Krisis.&rdquo;
          </motion.p>
        </motion.div>

        {/* Gambar di kanan */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <Image
            src="https://cdn.scalev.id/Image/_80DHjOh15B-7JCgbxr9fvoGNEeow1etLsnhm-ELi7s/1740124810449-headline_LP_scalev.webp"
            alt="Botol Cleanoz"
            width={300}
            height={300}
            className="rounded-lg"
          />
        </motion.div>
      </div>
    </section>
  )
}
