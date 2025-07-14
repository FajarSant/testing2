'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function CtaSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-orange-500 py-14 px-6 text-white text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Beli Sekarang & Dapatkan Bonus Emas 24K!</h2>
      <p className="mb-6 text-lg">CleanOZ — Bukan Sekadar Irit BBM, Tapi Gerakan #AntiKrisis</p>
      <button className="bg-white text-orange-600 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-orange-100 transition text-lg">
        KIRIM SAYA CLEANOZ
      </button>
      <div className="mt-6 flex justify-center">
        <Image
          src="https://cdn.scalev.id/Image/iuQDv_XWTq5qzugAqf9OhYuiRj8VdnmpwZ0f8KAmOXg/1740108823242-images_3171531710837787904.webp"
          alt="Bonus Emas"
          width={120}
          height={120}
        />
      </div>
    </motion.section>
  )
}
