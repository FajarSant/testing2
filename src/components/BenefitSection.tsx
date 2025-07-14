'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function BenefitSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-green-50 py-16 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto text-gray-900 text-center space-y-12">
        {/* Judul */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-green-700">
            ✅ Manfaat Langsung Pakai Cleanoz
          </h3>
        </div>

        {/* Grid Manfaat */}
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="space-y-4">
            <BenefitItem
              number="1️⃣"
              title="Bensin Jadi Jauh Lebih Irit"
              description="Penghematan BBM hingga 20-40% (tergantung kondisi kendaraan), cocok untuk kendaraan pribadi, usaha, hingga mesin kapal."
            />
            <BenefitItem
              number="2️⃣"
              title="Tarikan Mesin Enteng & Responsif"
              description="Mesin lebih ringan saat akselerasi, tenaga lebih maksimal, nyaman saat bawa beban berat atau tanjakan."
            />
            <BenefitItem
              number="3️⃣"
              title="Suara Mesin Lebih Halus & Senyap"
              description="Mengurangi suara kasar, bikin mesin lebih halus dan tenang saat dipacu."
            />
          </div>
          <div className="space-y-4">
            <BenefitItem
              number="4️⃣"
              title="Mencegah Kerusakan Mesin"
              description="Membersihkan sisa pembakaran dan mencegah kerak karbon yang menempel di piston dan ruang bakar."
            />
            <BenefitItem
              number="5️⃣"
              title="Ngga Perlu Nunggu Lama"
              description="Hasil bisa langsung dirasakan sejak pemakaian pertama, mesin lebih enteng dan irit BBM."
            />
            <BenefitItem
              number="6️⃣"
              title="Oli Jadi Lebih Awet"
              description="Oli 2x lipat lebih bersih dan tahan lama karena ruang bakar lebih bersih."
            />
          </div>
        </div>

        {/* Jaminan */}
        <div className="bg-white rounded-lg shadow p-6 md:p-8 text-left space-y-4 max-w-3xl mx-auto border border-green-200">
          <h4 className="text-lg font-semibold text-green-700">📄 Jaminan untuk Pengguna</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Aman digunakan pada semua kendaraan berbahan bakar bensin, pertamax, pertalite, maupun solar.</li>
            <li>Sudah teruji di lebih dari <strong>137.000 kendaraan</strong> dengan berbagai kondisi.</li>
            <li>Tidak menimbulkan efek samping jika digunakan sesuai petunjuk.</li>
            <li>Banyak testimoni asli pengguna di media sosial, chat WhatsApp, Telegram, dan video YouTube.</li>
          </ul>
        </div>

        {/* Testimoni Section */}
        <TestimonialSlider />
      </div>
    </motion.section>
  )
}

function BenefitItem({
  number,
  title,
  description,
}: {
  number: string
  title: string
  description: string
}) {
  return (
    <div className="flex items-start space-x-3">
      <span className="text-2xl">{number}</span>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-gray-700">{description}</p>
      </div>
    </div>
  )
}

// ---------------------
// 🔁 Slider Testimoni
// ---------------------
const chatImages = [
  'https://cdn.scalev.id/Image/yvVYvCfNskdCJpCCYr7hl_20JVaQc4NsSuwUC7paH6g/1740106471143-images_8242131732162002708.webp',
  'https://cdn.scalev.id/Image/sEtUpeuCGwYjDRYSWOYN4nzW03p7sXTvy6KJUuReRTE/1740106560493-images_5368361732162116127_1.webp',
  'https://cdn.scalev.id/Image/RrNcD8TLCq5Y_KFbNpi7M_PFcMri4MUNGoqFqG--h84/1740106664357-images_9440881732162370426.webp',
]

const youtubeImages = [
  'https://i.ytimg.com/vi/vgjzF0JqfoM/hqdefault.jpg',
  'https://i.ytimg.com/vi/BJ172CrlpfE/hqdefault.jpg',
  'https://i.ytimg.com/vi/O_2V0sJOuGc/hqdefault.jpg',
  'https://i.ytimg.com/vi/bemupKqha2M/hqdefault.jpg',
  'https://cdn.scalev.id/Image/Nn3jQwBzPY2gMVipmGZM6qAjIIwf-_fz7pZjVfK_qaw/1740106851040-images_1863501731913227260.webp',
  'https://cdn.scalev.id/Image/85bi__W3j7bD1ZjMWUU8MWeYMTpt4-NuF36Q-1ELDH4/1740106887241-images_8706381731913070639.webp',
]

function TestimonialSlider() {
  const allImages = [...chatImages, ...youtubeImages]
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % allImages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [allImages.length])

  return (
    <div className="mt-16">
      <h4 className="text-xl font-bold text-green-700 mb-6">💬 Testimoni Asli Pengguna</h4>
      <div className="relative w-full max-w-2xl mx-auto h-60 overflow-hidden rounded-xl shadow-lg">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={allImages[current]}
            alt={`Testimoni ${current + 1}`}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 90vw, 500px"
          />
        </motion.div>
      </div>
    </div>
  )
}
