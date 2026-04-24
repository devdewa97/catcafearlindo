import { motion, AnimatePresence } from 'framer-motion'
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
    name: 'Mochi',
    breed: 'Persian',
    birthDate: '15 Desember 2025',
    price: 'Rp 350.000',
    gender: 'Female',
    color: 'Cream',
    images: [
      'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=500',
      'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500',
      'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=500'
    ],
    description: 'Mochi adalah kucing Persian yang sangat manja dan lembut. Ia sangat suka dipeluk dan sangat cocok untuk keluarga yang mencari teman yang tenang. Kucing ini memiliki bulu yang panjang dan halus serta mata yang sangat menawan.',
    personality: ['Manja', 'Tenang', 'Penyayang'],
    health: 'Sehat, sudah vaksin lengkap',
    weight: '2.5 kg'
  },
  {
    id: 2,
    name: 'Oreo',
    breed: 'British Shorthair',
    birthDate: '20 Oktober 2025',
    price: 'Rp 500.000',
    gender: 'Male',
    color: 'Black & White',
    images: [
      'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500',
      'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=500',
      'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=500'
    ],
    description: 'Oreo adalah kucing British Shorthair yang energetic dan playful. Ia sangat suka bermain bola dan sangat cocok untuk keluarga dengan anak-anak. Meskipun terlihat ganteng, ia sangat manja pada pemiliknya.',
    personality: ['Energetic', 'Playful', 'Ramah'],
    health: 'Sehat, sudah vaksin dan obat cacing',
    weight: '3.2 kg'
  },
  {
    id: 3,
    name: 'Luna',
    breed: 'Scottish Fold',
    birthDate: '25 November 2025',
    price: 'Rp 450.000',
    gender: 'Female',
    color: 'Grey',
    images: [
      'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=500',
      'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=500',
      'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=500'
    ],
    description: 'Luna adalah kucing Scottish Fold dengan mata yang sangat menawan. Ia adalah kucing yang sangat aktif dan suka mengeksplorasi lingkungan baru. Telinganya yang melipat membuat ia terlihat sangat menggemaskan.',
    personality: ['Aktif', 'Penasaran', 'Lincah'],
    health: 'Sehat, sudah vaksin lengkap',
    weight: '2.8 kg'
  },
  {
    id: 4,
    name: 'Simba',
    breed: 'Orange Tabby',
    birthDate: '15 September 2025',
    price: 'Rp 300.000',
    gender: 'Male',
    color: 'Orange',
    images: [
      'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=500',
      'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500',
      'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=500'
    ],
    description: 'Simba adalah kucing Orange Tabby yang sangat pemberani dan suka bertualang. Ia sangat cocok untuk pemilik yang aktif dan suka outdoor. Meskipun pemberani, ia sangat penyayang pada keluarganya.',
    personality: ['Pemberani', 'Petualang', 'Loyal'],
    health: 'Sehat, sudah vaksin lengkap',
    weight: '3.5 kg'
  },
  {
    id: 5,
    name: 'Cleo',
    breed: 'Siamese',
    birthDate: '20 Januari 2026',
    price: 'Rp 400.000',
    gender: 'Female',
    color: 'Cream & Brown',
    images: [
      'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=500',
      'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=500',
      'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=500'
    ],
    description: 'Cleo adalah anak kucing Siamese yang sangat cerdas dan penasaran. Ia cepat belajar dan sangat cocok untuk pemilik yang suka melatih kucing. Matanya yang biru sapphire adalah ciri khasnya.',
    personality: ['Cerdas', 'Penasaran', 'Mudah Dipelajari'],
    health: 'Sehat, sudah vaksin basic',
    weight: '2.2 kg'
  },
  {
    id: 6,
    name: 'Bella',
    breed: 'Ragdoll',
    birthDate: '15 Agustus 2025',
    price: 'Rp 600.000',
    gender: 'Female',
    color: 'White & Grey',
    images: [
      'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=500',
      'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=500',
      'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=500'
    ],
    description: 'Bella adalah kucing Ragdoll yang sangat lembut dan suka di pangku. Disebut Ragdoll karena ia akan rileks seperti boneka saat diangkat. Sangat cocok untuk keluarga yang mencari kucing yang tenang.',
    personality: ['Lembut', 'Kalem', 'Manja'],
    health: 'Sehat, sudah vaksin lengkap dan steril',
    weight: '4.0 kg'
  }
]

const adoptionBenefits = [
  { icon: '🏥', title: 'Kesehatan Terjamin', desc: 'Semua kucing telah menjalani pemeriksaan kesehatan lengkap dan vaccinasi' },
  { icon: '📋', title: 'Dokumen Lengkap', desc: 'Kucing disertai dengan kartu kesehatan dan pedigree' },
  { icon: '🍚', title: 'Paket Makanan', desc: 'Mendapatkan paket makanan starter untuk masa transisi' },
  { icon: '💬', title: 'Konsultasi Gratis', desc: 'Dukungan konsultasi perawatan kucing seumur hidup' }
]

export default function Adopsi() {
  const [selectedCat, setSelectedCat] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState({})

  const openModal = (cat) => {
    setSelectedCat(cat)
    setCurrentImageIndex({ [cat.id]: 0 })
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedCat(null)
    document.body.style.overflow = 'auto'
  }

  const nextImage = (catId, images) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [catId]: (prev[catId] + 1) % images.length
    }))
  }

  const prevImage = (catId, images) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [catId]: (prev[catId] - 1 + images.length) % images.length
    }))
  }

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
              <b>Adopsi Kucing<span className="text-primary-400"> Kesayangan Anda</span></b>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-secondary-200 text-sm md:text-lg max-w-xl mx-auto mb-6">
              Berikan rumah penuh kasih untuk kucing-kucing kami yang menunggu keluarga baru. Setiap adopsi berarti kehidupan yang lebih baik untuk mereka.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
              <a href="#kucing" className="btn-primary text-sm md:text-base px-6 md:px-8 py-2.5 md:py-3">
                Lihat Kucing
              </a>
              <a href="https://wa.me/6281234567890?text=Halo%20Cat%20Cafe%2C%20saya%20ingin%20informasi%20tentang%20adopsi%20kucing" target="_blank" rel="noopener noreferrer" className="bg-white/10 backdrop-blur-sm text-white px-6 md:px-8 py-2.5 md:py-3 rounded-2xl font-semibold hover:bg-white/20 transition-all text-sm md:text-base border border-white/20">
                Hubungi Kami
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
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-xs font-semibold text-primary-600">{cat.gender}</span>
                  </div>
                  <div className="absolute top-3 left-3 bg-primary-500 px-3 py-1 rounded-full">
                    <span className="text-xs font-semibold text-white">{cat.breed}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 md:p-5">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold text-lg md:text-xl text-secondary-900">{cat.name}</h3>
                      <p className="text-secondary-500 text-xs md:text-sm">{cat.color}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-primary-600 text-base md:text-lg">{cat.price}</p>
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

                  {/* Personality Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {cat.personality.map((trait, idx) => (
                      <span key={idx} className="bg-primary-50 text-primary-600 text-xs px-2 py-0.5 rounded-full">
                        {trait}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => openModal(cat)}
                      className="flex-1 bg-secondary-100 text-secondary-700 py-2.5 rounded-xl font-semibold hover:bg-secondary-200 transition-colors text-sm"
                    >
                      Lihat Detail
                    </button>
                    <a
                      href={`https://wa.me/6281234567890?text=Halo%20Cat%20Cafe%2C%20saya%20ingin%20adopsi%20kucing%20${encodeURIComponent(cat.name)}%20(${cat.breed})%20seharga%20${encodeURIComponent(cat.price)}`}
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
                    src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=400"
                    alt="Cat 1"
                    className="rounded-xl md:rounded-2xl shadow-card w-full h-36 md:h-48 object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=400"
                    alt="Cat 2"
                    className="rounded-xl md:rounded-2xl shadow-card w-full h-48 md:h-64 object-cover"
                  />
                </div>
                <div className="space-y-3 md:space-y-4 pt-6 md:pt-8">
                  <img
                    src="https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=400"
                    alt="Cat 3"
                    className="rounded-xl md:rounded-2xl shadow-card w-full h-48 md:h-64 object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=400"
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
              href="https://wa.me/6281234567890?text=Halo%20Cat%20Cafe%2C%20saya%20ingin%20informasi%20tentang%20adopsi%20kucing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-primary-600 px-6 md:px-8 py-2.5 md:py-3 rounded-xl md:rounded-2xl font-semibold hover:shadow-lg hover:scale-105 transition-all text-sm md:text-base"
            >
              Hubungi via WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* Modal Detail */}
      <AnimatePresence>
        {selectedCat && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl md:rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Gallery */}
              <div className="relative aspect-[4/3] bg-secondary-100">
                <img
                  src={selectedCat.images[currentImageIndex[selectedCat.id] || 0]}
                  alt={selectedCat.name}
                  className="w-full h-full object-cover"
                />
                {selectedCat.images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => { e.stopPropagation(); prevImage(selectedCat.id, selectedCat.images) }}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
                    >
                      <svg className="w-5 h-5 text-secondary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); nextImage(selectedCat.id, selectedCat.images) }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
                    >
                      <svg className="w-5 h-5 text-secondary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                      {selectedCat.images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(prev => ({ ...prev, [selectedCat.id]: idx })) }}
                          className={`w-2 h-2 rounded-full transition-all ${currentImageIndex[selectedCat.id] === idx ? 'bg-white w-6' : 'bg-white/50'}`}
                        />
                      ))}
                    </div>
                  </>
                )}
                <button
                  onClick={closeModal}
                  className="absolute top-3 right-3 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
                >
                  <svg className="w-5 h-5 text-secondary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div className="p-4 md:p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-xl md:text-2xl text-secondary-900">{selectedCat.name}</h3>
                    <p className="text-secondary-500 text-sm">{selectedCat.color} - {selectedCat.gender}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-primary-600 text-xl md:text-2xl">{selectedCat.price}</p>
                  </div>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 mb-4">
                  <div className="bg-secondary-50 rounded-lg p-3 text-center">
                    <p className="text-xs text-secondary-500">Jenis</p>
                    <p className="text-xs md:text-sm font-semibold text-secondary-900">{selectedCat.breed}</p>
                  </div>
                  <div className="bg-secondary-50 rounded-lg p-3 text-center">
                    <p className="text-xs text-secondary-500">Lahir</p>
                    <p className="text-xs md:text-sm font-semibold text-secondary-900">{selectedCat.birthDate}</p>
                  </div>
                  <div className="bg-secondary-50 rounded-lg p-3 text-center">
                    <p className="text-xs text-secondary-500">Berat</p>
                    <p className="text-xs md:text-sm font-semibold text-secondary-900">{selectedCat.weight}</p>
                  </div>
                  <div className="bg-secondary-50 rounded-lg p-3 text-center">
                    <p className="text-xs text-secondary-500">Kesehatan</p>
                    <p className="text-xs md:text-sm font-semibold text-secondary-900">Sehat</p>
                  </div>
                </div>

                {/* Personality */}
                <div className="mb-4">
                  <p className="text-xs text-secondary-500 mb-2">Kepribadian</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedCat.personality.map((trait, idx) => (
                      <span key={idx} className="bg-primary-50 text-primary-600 text-xs px-3 py-1 rounded-full">
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <p className="text-xs text-secondary-500 mb-2">Deskripsi</p>
                  <p className="text-secondary-600 text-sm md:text-base leading-relaxed">
                    {selectedCat.description}
                  </p>
                </div>

                {/* CTA Button */}
                <a
                  href={`https://wa.me/6281234567890?text=Halo%20Cat%20Cafe%2C%20saya%20ingin%20adopsi%20kucing%20${encodeURIComponent(selectedCat.name)}%20(${selectedCat.breed})%20seharga%20${encodeURIComponent(selectedCat.price)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-primary-500 text-white py-3 md:py-4 rounded-xl md:rounded-2xl font-semibold hover:bg-primary-600 transition-colors text-base md:text-lg"
                >
                  Adopsi Sekarang
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}