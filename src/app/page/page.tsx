'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function LandingPage() {
  return (
    <main className="font-sans bg-white text-gray-900">
      {/* 1. Headline */}
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-green-600 text-white text-center px-6 py-12"
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Boros Bensin Bikin Dompet Tipis?</h1>
        <p className="text-lg md:text-2xl max-w-2xl mx-auto">
          Gas Tipis Pakai Cleanoz! <br />
          <span className="font-semibold">Tiga Tetes Bukan Cuma Irit, Tapi Bikin Mesin Enteng, Suara Halus, Dan Hemat Biaya Servis!</span>
        </p>
        <div className="mt-6 flex justify-center">
          <Image
            src="https://i.ibb.co/BCyzWgq/cleanoz-botol.png"
            alt="Botol Cleanoz"
            width={200}
            height={200}
          />
        </div>
      </motion.section>

      {/* 2. Opening Provokatif */}
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-white py-12 px-6"
      >
        <div className="max-w-3xl mx-auto space-y-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-orange-600">Pernah ngerasa gaji habis cuma buat isi bensin?</h2>
          <p>
            Tarikan motor makin berat. Dompet makin sesak. Hidup rasanya diem di tempat.
            Padahal setiap hari harus ngerit di jalanan. Cari nafkah. Kirim barang. Jemput anak.
          </p>
          <p className="font-medium italic">Rakyat kecil kayak kita nggak boleh kalah sama krisis.</p>
          <p className="font-semibold">Karena hemat BBM itu bukan cuma soal bensin. Tapi soal bisa bertahan hidup.</p>
          <div className="mt-6 flex justify-center">
            <Image
              src="https://i.ibb.co/qD8Vkhb/irit-bbm.png"
              alt="Ilustrasi Irit BBM"
              width={600}
              height={400}
              className="rounded-xl shadow-md"
            />
          </div>
        </div>
      </motion.section>

      {/* 3. Problem */}
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
                src="https://i.ibb.co/bHxMQZb/masalah-rakyat.png"
                alt="Ilustrasi Masalah Rakyat"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
<p className="text-center font-bold text-xl mt-4 text-green-600">&quot;Gas Tipis, Anti Krisis.&quot;</p>
        </div>
      </motion.section>

      {/* 4. Solusi */}
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
              src="https://i.ibb.co/Lrv43gZ/cleanoz-solution.png"
              alt="Gambar Solusi Cleanoz"
              width={600}
              height={400}
              className="rounded-xl shadow-md"
            />
          </div>
        </div>
      </motion.section>

      {/* 5. Benefit */}
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-green-50 py-12 px-6"
      >
        <div className="max-w-4xl mx-auto text-gray-900 text-center">
          <h3 className="text-2xl font-bold mb-6 text-green-600">✅ Manfaat Langsung Pakai Cleanoz</h3>
          <div className="grid md:grid-cols-2 gap-4 text-left">
            {[
              "Bensin Lebih Irit 20-40%",
              "Tarikan Mesin Enteng",
              "Suara Mesin Halus",
              "Mesin Jadi Lebih Awet",
              "Oli Tahan Lama",
              "Langsung Terasa Hasilnya"
            ].map((item, i) => (
              <div key={i} className="flex items-start space-x-2">
                <span className="text-green-600 font-bold text-xl">✔</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Image
              src="https://i.ibb.co/ChGw3Q2/benefit-cleanoz.png"
              alt="Benefit Cleanoz"
              width={500}
              height={350}
              className="rounded-lg"
            />
          </div>
        </div>
      </motion.section>

      {/* 6. CTA */}
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
            src="https://i.ibb.co/0nPNfvq/bonus-emas.png"
            alt="Bonus Emas"
            width={120}
            height={120}
          />
        </div>
      </motion.section>
    </main>
  )
}
