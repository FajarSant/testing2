'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ProblemSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-gray-100 py-12 px-6"
    >
      <div className="max-w-4xl mx-auto space-y-4 text-center">
        <h3 className="text-2xl font-bold text-red-600 mb-4">🔥 Masalah yang Sering Dihadapi</h3>
        <div className="grid md:grid-cols-2 gap-4 text-left items-center">
          <ul className="list-disc pl-5 space-y-2">
            <li>Bensin makin mahal, tapi kerja nggak bisa berhenti.</li>
            <li>Mesin makin berat, keluar biaya servis makin mahal.</li>
            <li>Udah irit-irit, tetap habis buat beli bensin.</li>
            <li>Mau nabung, susah. Habis buat jalan terus.</li>
            <li>Capek rasanya, kayak kerja nggak pernah cukup.</li>
          </ul>
          <div className="flex justify-center">
            <Image
              src="https://cdn.scalev.id/Image/qUNt4WgjgZop88jSw8Ssyte5ITCd2Fx0Sj09fzWT6Rw/1740105611249-images_7436651710837578894.webp"
              alt="Ilustrasi Masalah Rakyat"
              width={300}
              height={200}
              className="rounded-lg"
            />
          </div>
        </div>
        <p className="text-center mt-10 font-bold text-xl  text-green-600">&quot;Gas Tipis, Anti Krisis.&quot;</p>
      </div>
    </motion.section>
  )
}
