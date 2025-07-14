// components/OpeningSection.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function OpeningSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white py-16 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src="https://i.ibb.co/qD8Vkhb/irit-bbm.png"
            alt="Ilustrasi Irit BBM"
            width={600}
            height={400}
            className="w-full h-auto rounded-xl shadow-xl"
          />
        </motion.div>

        {/* Text Section */}
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-orange-600">
            🚨 PROVOKATIF OPENING
          </h2>
          <p className="text-lg font-semibold text-gray-800">
            Pernah ngerasa gaji habis cuma buat isi bensin?
          </p>
          <p className="text-gray-700">
            Tarikan motor makin berat. Dompet makin sesak. Hidup rasanya diem di tempat.
          </p>
          <p className="text-gray-700">
            Padahal setiap hari harus ngerit di jalanan. Cari nafkah. Kirim barang. Jemput anak.
          </p>
          <p className="text-gray-700 font-medium">
            Apa nggak capek kalau semua tenaga habis cuma buat bayar bensin?
          </p>
          <p className="text-orange-600 font-bold text-lg">
            Rakyat kecil kayak kita nggak boleh kalah sama krisis.
          </p>
          <p className="text-gray-800 font-semibold">
            Karena hemat BBM itu bukan cuma soal bensin. Tapi soal bisa bertahan hidup.
          </p>
        </div>
      </div>
    </motion.section>
  )
}
