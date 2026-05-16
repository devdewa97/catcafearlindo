import { motion } from 'framer-motion'
import { useState } from 'react'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

// Data kucing yang tersedia untuk adopsi
const catsForAdoption = [
  {
    id: 1,
    name: 'Adopt 1',
    breed: 'ESH Mix BSH',
    birthDate: '14 Mei 2025',
    price: 'Rp 5.000.000',
    gender: 'Male',
    color: 'Cream',
    images: [
      'https://res.cloudinary.com/dmdl9p7do/image/upload/v1778551262/Cream_14_Mei_2025_Exotic_Short_Hair_mix_BSH_Ped_Jantan_shg4kr.webp?w=500',
    ],
  },
  {
    id: 2,
    name: 'Adopt 2',
    breed: 'Domestic Mix BSH',
    birthDate: '1 September 2025',
    price: 'Rp 3.800.000',
    gender: 'Female',
    color: 'Grey',
    images: [
      'https://res.cloudinary.com/dmdl9p7do/image/upload/v1778551256/Kalung_Orange_1_September_2025_Domestic_mix_BSH_Ped_Betina_dejszr.webp?w=500',
    ],
  },
  {
    id: 3,
    name: 'Adopt 3',
    breed: 'Domestic Mix BSH',
    birthDate: '1 September 2025',
    price: 'Rp 3.800.000',
    gender: 'Male',
    color: 'Grey',
    images: [
      'https://res.cloudinary.com/dmdl9p7do/image/upload/v1778551255/Kalung_Hijau_1_September_2025_Domestic_mix_BSH_Ped_Jantan_tbzu26.webp?w=500',
    ],
  },
  {
    id: 4,
    name: 'Adopt 4',
    breed: 'ESH Mix BSH',
    birthDate: '14 Mei 2025',
    price: 'Rp 5.000.000',
    gender: 'Male',
    color: 'Grey',
    images: [
      'https://res.cloudinary.com/dmdl9p7do/image/upload/v1778551255/Kalung_Merah_14_Mei_2025_Exotic_Short_Hair_mix_BSH_Ped_Jantan_ehsu9k.webp?w=500',
    ],
  },
  {
    id: 5,
    name: 'Adopt 5',
    breed: 'Domestic Mix BSH',
    birthDate: '1 September 2025',
    price: 'Rp 3.800.000',
    gender: 'Male',
    color: 'Black & White',
    images: [
      'https://res.cloudinary.com/dmdl9p7do/image/upload/v1778551254/Kalung_Biru_1_September_2025_Domestic_mix_BSH_Ped_Jantan_lrnz4y.webp?w=500',
    ],
  },
  {
    id: 6,
    name: 'Adopt 6',
    breed: 'BSH Pedigree',
    birthDate: '15 Juni 2025',
    price: 'Rp 10.000.000',
    gender: 'Female',
    color: 'Grey',
    images: [
      'https://res.cloudinary.com/dmdl9p7do/image/upload/v1778551254/Naomi_15_Juni_2025_British_Short_Hair_Pedigree_Betina_uovyqm.webp?w=500',
    ],
  },
  {
    id: 7,
    name: 'Adopt 7',
    breed: 'BSH Pedigree',
    birthDate: '15 Juni 2025',
    price: 'Rp 10.000.000',
    gender: 'Male',
    color: 'Grey',
    images: [
      'https://res.cloudinary.com/dmdl9p7do/image/upload/v1778551253/K-Willy_15_Juni_2025_British_Short_Hair_Pedigree_Jantan_rdrudh.webp?w=500',
    ]
  }
]

const adoptionBenefits = [
  { icon: '🏥', title: 'Kesehatan Terjamin', desc: 'Semua kucing telah menjalani pemeriksaan kesehatan lengkap dan vaccinasi' },
  { icon: '📋', title: 'Dokumen Lengkap', desc: 'Kucing disertai dengan kartu kesehatan dan pedigree' },
  { icon: '🍚', title: 'Paket Makanan', desc: 'Mendapatkan paket makanan starter untuk masa transisi' },
  { icon: '💬', title: 'Konsultasi Gratis', desc: 'Dukungan konsultasi perawatan kucing seumur hidup' }
]

export default function Adopsi() {


  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative py-24 md:py-40 lg:py-48 min-h-[70vh] flex items-center bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=1920" alt="Cat Background" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/80 to-transparent" />

        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.p variants={fadeInUp} className="text-primary-300 font-medium text-base md:text-lg mb-3">
              Program Adopsi
            </motion.p>
            <motion.h1 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
              <b>Adopsi Kucing<span className="text-primary-400"> <p>Kesayangan Anda</p></span></b>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-secondary-200 text-sm md:text-lg max-w-3xl md:max-w-4xl mx-auto px-4 md:px-0 mb-6">
              Adopt Kucing Arlindo merupakan sebuah shelter yang menampung berbagai macam jenis kucing. Adopt Kucing Arlindo menjadi wadah untuk para Cat Lovers yang ingin mempunyai / memelihara kucing dari jenis-jenis tertentu. Adopt Kucing Arlindo bertempatan di Cat Café by Arlindo. Saat ini kami memiliki beberapa jenis untuk di Adopt antara lain seperti British Short Hair, British Shot Hair mix Local, British Short Hair mix Exotic Short Hair, dan masih banyak lagi.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
              <a href="#kucing" className="btn-primary text-sm md:text-base px-6 md:px-8 py-2.5 md:py-3">
                Lihat Kucing
              </a>
              <a href="https://wa.me/6281412428997?text=Halo%20Cat%20Cafe%2C%20saya%20ingin%20informasi%20tentang%20adopsi%20kucing" target="_blank" rel="noopener noreferrer" className="bg-white/10 backdrop-blur-sm text-white px-6 md:px-8 py-2.5 md:py-3 rounded-2xl font-semibold hover:bg-white/20 transition-all text-sm md:text-base border border-white/20">
                Hubungi Kami
              </a>
              <a href="https://www.instagram.com/adoptkucingarlindo" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-2xl font-semibold hover:opacity-90 transition-all text-sm md:text-base flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Ikuti Instagram
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-2 md:mb-3">
              <b>Keuntungan</b> <span className="text-primary-500">Adopsi</span>
            </h2>
            <p className="text-secondary-600 text-sm md:text-base max-w-xl mx-auto">
              Kami berkomitmen untuk memastikan setiap adopsi berjalan lancar dan menguntungkan kedua belah pihak
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {adoptionBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-secondary-50 p-4 md:p-6 rounded-xl md:rounded-2xl text-center hover:shadow-card transition-all"
              >
                <div className="text-3xl md:text-4xl mb-3">{benefit.icon}</div>
                <h3 className="font-semibold text-secondary-900 text-sm md:text-base mb-2">{benefit.title}</h3>
                <p className="text-secondary-600 text-xs md:text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CAT LIST SECTION */}
      <section id="kucing" className="py-10 md:py-16 bg-secondary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-2 md:mb-3">
              <b>Kucing</b> <span className="text-primary-500">Tersedia</span>
            </h2>
            <p className="text-secondary-600 text-sm md:text-base max-w-xl mx-auto">
              Temukan teman berbulu yang sempurna untuk keluarga Anda
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {catsForAdoption.map((cat, index) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all group"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={cat.images[0]}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                                  </div>

                {/* Content */}
                <div className="p-4 md:p-5">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold text-lg md:text-xl text-secondary-900">{cat.name}</h3>
                      <p className="text-secondary-500 text-xs md:text-sm">{cat.color}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex flex-col items-end gap-1">
                        <span className="inline-flex items-center gap-2 bg-secondary-900/90 text-white text-[11px] md:text-xs px-2.5 py-1 rounded-[10px]">
                          Negotiable
                        </span>
                        <p className="font-bold text-primary-600 text-base md:text-lg">{cat.price}</p>
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="bg-secondary-50 rounded-lg p-2 text-center">
                      <p className="text-xs text-secondary-500">Jenis</p>
                      <p className="text-xs font-semibold text-secondary-900">{cat.breed}</p>
                    </div>
                    <div className="bg-secondary-50 rounded-lg p-2 text-center">
                      <p className="text-xs text-secondary-500">Lahir</p>
                      <p className="text-xs font-semibold text-secondary-900">{cat.birthDate}</p>
                    </div>
                  </div>


                  {/* Buttons */}
                  <div className="flex gap-2">
                    <a
                      href={`https://wa.me/6281412428997?text=Halo%20Cat%20Cafe%2C%20saya%20ingin%20bertanya%20tentang%20adopsi%20kucing%20${encodeURIComponent(cat.name)}%20(${cat.breed})`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-secondary-100 text-secondary-700 py-2.5 rounded-xl font-semibold hover:bg-secondary-200 transition-colors text-sm"
                    >
                      Tanya Admin
                    </a>
                    <a
                      href={`https://wa.me/6281412428997?text=Halo%20Cat%20Cafe%2C%20saya%20ingin%20adopsi%20kucing%20${encodeURIComponent(cat.name)}%20(${cat.breed})%20seharga%20${encodeURIComponent(cat.price)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-primary-500 text-white py-2.5 rounded-xl font-semibold hover:bg-primary-600 transition-colors text-sm"
                    >
                      Adopsi
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* REQUIREMENTS SECTION */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="space-y-3 md:space-y-4">
                  <img
                    src="https://res.cloudinary.com/dmdl9p7do/image/upload/v1778551253/K-Willy_15_Juni_2025_British_Short_Hair_Pedigree_Jantan_rdrudh.webp?w=400"
                    alt="Cat 1"
                    className="rounded-xl md:rounded-2xl shadow-card w-full h-36 md:h-48 object-cover"
                  />
                  <img
                    src="https://res.cloudinary.com/dmdl9p7do/image/upload/v1778551254/Naomi_15_Juni_2025_British_Short_Hair_Pedigree_Betina_uovyqm.webp?w=400"
                    alt="Cat 2"
                    className="rounded-xl md:rounded-2xl shadow-card w-full h-48 md:h-64 object-cover"
                  />
                </div>
                <div className="space-y-3 md:space-y-4 pt-6 md:pt-8">
                  <img
                    src="https://res.cloudinary.com/dmdl9p7do/image/upload/v1778551254/Naomi_15_Juni_2025_British_Short_Hair_Pedigree_Betina_uovyqm.webp?w=400"
                    alt="Cat 3"
                    className="rounded-xl md:rounded-2xl shadow-card w-full h-48 md:h-64 object-cover"
                  />
                  <img
                    src="https://res.cloudinary.com/dmdl9p7do/image/upload/v1778551262/Cream_14_Mei_2025_Exotic_Short_Hair_mix_BSH_Ped_Jantan_shg4kr.webp?w=400"
                    alt="Cat 4"
                    className="rounded-xl md:rounded-2xl shadow-card w-full h-36 md:h-48 object-cover"
                  />
                </div>
              </div>

              {/* Floating Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -bottom-3 md:-bottom-4 -right-3 md:-right-4 bg-white p-3 md:p-4 rounded-xl md:rounded-2xl shadow-card"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-primary-600 text-sm md:text-lg">❤️</span>
                  </div>
                  <div>
                    <p className="text-sm md:text-base font-bold text-secondary-900">100%</p>
                    <p className="text-xs text-secondary-500">Happy Adoptions</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4 md:mb-6">
                <b>Syarat</b> <span className="text-primary-500">Adopsi</span>
              </h2>
              <p className="text-secondary-600 text-sm md:text-lg mb-4 md:mb-6 leading-relaxed">
                Untuk memastikan kesejahteraan kucing kami, kami memiliki beberapa persyaratan adopsi yang harus dipenuhi:
              </p>

              <div className="space-y-3 md:space-y-4">
                {[
                  { num: '01', title: 'Usia Minimum Pemelihara', desc: 'Pemelihara harus berusia minimal 17 tahun' },
                  { num: '02', title: 'Kesiapan Finansial', desc: 'Mampu memenuhi kebutuhan makanan, kesehatan, dan perawatan kucing' },
                  { num: '03', title: 'Tempat Tinggal Suitable', desc: 'Memiliki tempat tinggal yang layak dan aman untuk kucing' },
                  { num: '04', title: 'Komitmen Jangka Panjang', desc: 'Bersedia merawat kucing dengan penuh tanggung jawaban' },
                  { num: '05', title: 'Persetujuan Anggota Keluarga', desc: 'Semua anggota keluarga setuju dengan adopsi' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-3 md:gap-4 p-3 md:p-4 bg-secondary-50 rounded-xl"
                  >
                    <span className="text-primary-500 font-bold text-lg md:text-xl">{item.num}</span>
                    <div>
                      <h4 className="font-semibold text-secondary-900 text-sm md:text-base">{item.title}</h4>
                      <p className="text-secondary-600 text-xs md:text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-10 md:py-16 bg-gradient-to-br from-primary-500 via-primary-600 to-accent-500 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl" />
        <div className="absolute bottom-0 right-0 w-40 h-40 md:w-56 md:h-56 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2 blur-2xl" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
              <b>Siap Memberikan Rumah untuk<br/>Teman Baru Anda?</b>
            </h2>
            <p className="text-white/90 text-sm md:text-lg max-w-xl mx-auto mb-6 md:mb-8">
              Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan tentang proses adopsi atau ingin bertemu dengan kucing-kucing kami.
            </p>
            <a
              href="https://wa.me/6281412428997?text=Halo%20Cat%20Cafe%2C%20saya%20ingin%20informasi%20tentang%20adopsi%20kucing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-primary-600 px-6 md:px-8 py-2.5 md:py-3 rounded-xl md:rounded-2xl font-semibold hover:shadow-lg hover:scale-105 transition-all text-sm md:text-base"
            >
              Hubungi via WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  )
}