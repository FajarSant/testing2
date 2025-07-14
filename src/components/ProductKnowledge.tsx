'use client';

import { motion } from 'framer-motion';
import React from 'react';

export default function ProductKnowledge() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-[#f9f9f9] py-20 px-4 md:px-10 lg:px-24 border-t">
      <div className="max-w-6xl mx-auto">
        {/* Judul */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          🟢 Kenalan dengan <span className="text-green-600">CleanOZ</span>
        </motion.h2>

        {/* Deskripsi */}
        <motion.p
          className="text-gray-600 text-center max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
        >
          Cairan aditif bahan bakar terpercaya sejak 2012 — bikin mesin enteng, hemat BBM, dan awet!
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 text-gray-800 text-sm md:text-base leading-relaxed">
          {/* Kiri */}
          <div className="space-y-8">
            {/* Nama Produk */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-lg text-green-700 mb-2">🎯 Nama Produk</h3>
              <p><strong>CleanOZ</strong> — Daily Maintenance Liquid Engine</p>
            </motion.div>

            {/* Format Produk */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-lg text-green-700 mb-2">💬 Format Produk</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Cairan aditif BBM: bensin, pertamax, pertalite, solar</li>
                <li>Botol 12 ml — bisa dipakai berkali-kali</li>
                <li>3 tetes per liter BBM</li>
                <li>1 kotak isi 4 botol</li>
              </ul>
            </motion.div>

            {/* Kelebihan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-lg text-green-700 mb-2">✨ Kelebihan</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Mudah digunakan (tinggal tetes langsung campur)</li>
                <li>Aman untuk motor, mobil, mesin kapal</li>
                <li>Dipakai 137.000 kendaraan sejak 2012</li>
                <li>Bonus emas 24K untuk pembelian 1 kotak</li>
              </ul>
            </motion.div>
          </div>

          {/* Kanan */}
          <div className="space-y-8">
            {/* Manfaat */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-lg text-green-700 mb-2">🧪 Manfaat CleanOZ</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Membersihkan sisa pembakaran & kerak karbon</li>
                <li>Menjaga performa mesin tetap optimal</li>
                <li>Menghemat BBM hingga 20–40%</li>
                <li>Memperpanjang usia oli & mesin</li>
              </ul>
            </motion.div>

            {/* Kenapa Harus */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-lg text-green-700 mb-2">🚀 Kenapa Harus CleanOZ?</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Tenaga mesin tetap optimal & suara halus</li>
                <li>Tarikan enteng, irit BBM, perjalanan nyaman</li>
                <li>Mencegah mogok/servis mendadak</li>
                <li>Hemat biaya servis kendaraan jangka panjang</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
