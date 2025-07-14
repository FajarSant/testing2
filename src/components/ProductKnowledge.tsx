"use client";

import { motion } from "framer-motion";
import React from "react";

export default function ProductKnowledge() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-[#f9f9f9] py-16 px-4 md:px-8 lg:px-20 border-t">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        {/* JUDUL */}
        <div className="text-center space-y-3 mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            🟢 Kenalan dengan <span className="text-green-600">CleanOZ</span>
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Cairan aditif bahan bakar terpercaya sejak 2012 — bikin mesin enteng, hemat BBM, dan awet!
          </motion.p>
        </div>

        {/* GRID INFO */}
        <div className="grid md:grid-cols-2 gap-10 text-gray-800 text-sm md:text-base">
          {/* KIRI */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="font-semibold text-lg text-green-700 mb-2">🎯 Nama Produk</h3>
              <p><strong>CleanOZ</strong> — Daily Maintenance Liquid Engine</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-green-700 mb-2">💬 Format Produk</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Cairan aditif BBM: bensin, pertamax, pertalite, solar</li>
                <li>Botol 12 ml — bisa dipakai berkali-kali</li>
                <li>3 tetes per liter BBM</li>
                <li>1 kotak isi 4 botol</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-green-700 mb-2">✨ Kelebihan</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Mudah digunakan (tinggal tetes langsung campur)</li>
                <li>Aman untuk motor, mobil, mesin kapal</li>
                <li>Dipakai 137.000 kendaraan sejak 2012</li>
                <li>Bonus emas 24K untuk pembelian 1 kotak</li>
              </ul>
            </div>
          </motion.div>

          {/* KANAN */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="font-semibold text-lg text-green-700 mb-2">🧪 Manfaat CleanOZ</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Membersihkan sisa pembakaran & kerak karbon</li>
                <li>Menjaga performa mesin tetap optimal</li>
                <li>Menghemat BBM hingga 20–40%</li>
                <li>Memperpanjang usia oli & mesin</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-green-700 mb-2">🚀 Kenapa Harus CleanOZ?</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Tenaga mesin tetap optimal & suara halus</li>
                <li>Tarikan enteng, irit BBM, perjalanan nyaman</li>
                <li>Mencegah mogok/servis mendadak</li>
                <li>Hemat biaya servis kendaraan jangka panjang</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
