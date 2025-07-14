'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function SolutionSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white py-12 px-6"
    >
      <div className="max-w-4xl mx-auto space-y-6 text-gray-800 text-center">
        <h3 className="text-2xl font-bold text-orange-500">Solusi: Cleanoz</h3>
        <p>Cleanoz bukan sekadar cairan, ini senjata rakyat kecil lawan krisis BBM!</p>
        <ul className="list-disc pl-6 text-left max-w-2xl mx-auto">
          <li>Teteskan Cleanoz → Mesin bersih → BBM irit → Tarikan enteng → Dompet aman</li>
          <li>Suara mesin halus → Jarang servis</li>
          <li>Bensin awet → Uang bisa disimpan</li>
          <li>Beli Cleanoz dapat bonus emas mini!</li>
        </ul>
        <div className="flex justify-center">
          <Image
            src="https://cdn.scalev.id/Image/Rp5bncNEKTSLhA5K_xPNamJBuH7xu4s3sST2R3zxgQg/1740105550114-images_7642981710837559675_1.webp"
            alt="Gambar Solusi Cleanoz"
            width={300}
            height={200}
            className="rounded-xl shadow-md"
          />
        </div>
      </div>
    </motion.section>
  )
}
