import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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

const eventPackages = [
  {
    id: 'birthday-party',
    name: 'Birthday Party',
    description: 'Rayakan ulang tahun special dengan ruangan private eksklusif, dekorasi lengkap, dan berbagai hidangan lezat untuk tamu undangan.',
    image: 'https://img.freepik.com/free-photo/birthday-party-concept-with-joyful-people_23-2147716819.jpg',
    price: 'Rp 150.000',
    pricePer: '/orang',
    minOrder: 'Min. 10 Orang',
    facilities: [
      'Ruangan private eksklusif',
      'Dekorasi ulang tahun lengkap',
      'Banner & balon Birthday',
      'Kue ulang tahun (1 besar)',
      '5 varian makanan & snacks',
      'Infuse Water',
      'Free ATK (banner, topi, semprot)',
      'Gratis foto & video by admin',
      'Harga termasuk pajak'
    ]
  },
  {
    id: 'arisan-gathering',
    name: 'Arisan & Gathering',
    description: 'Waktu berkualitas bersama keluarga, teman, atau rekan kerja dengan suasana cozy dan hidangan prasmanan.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600',
    price: 'Rp 150.000',
    pricePer: '/orang',
    minOrder: 'Min. 15 Orang',
    facilities: [
      'Ruangan private eksklusif',
      'Dekorasi sederhana',
      'Snack box',
      'Makan siang/malam prasmanan',
      'Infuse Water',
      'Gratis foto by admin',
      'Harga termasuk pajak',
      'Cozy vibes untuk bersosial'
    ]
  },
  {
    id: 'bbq-home-service',
    name: 'BBQ Home Service',
    description: 'Nikmati pengalaman BBQ langsung di lokasi Anda dengan chef profesional dan peralatan lengkap.',
    image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600',
    price: 'Rp 200.000',
    pricePer: '/orang',
    minOrder: 'Min. 20 Orang',
    facilities: [
      'BBQ Grilling di lokasi tujuan',
      'Chef & helper profesional',
      'Meja & peralatan BBQ lengkap',
      '5+ varian daging & seafood',
      'Sayuran fresh',
      'Saus &bumbu pendukung',
      'Free Infuse Water',
      'Pembersihan setelah event',
      'Harga termasuk pajak'
    ]
  },
  {
    id: 'catering-service',
    name: 'Catering Service',
    description: 'Paket catering lengkap untuk event kantor, seminar, atau acara keluarga dengan pengiriman ke lokasi.',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600',
    price: 'Rp 150.000',
    pricePer: '/orang',
    minOrder: 'Min. 20 Orang',
    facilities: [
      'Makanan berat lengkap',
      '5+ varian menu masakan',
      'Snack & cake (coffee break)',
      'Infuse Water',
      'Servis antar ke lokasi',
      'Free 10 porsi tambahan',
      'Kustom menu sesuai request',
      'Gratis delivery dalam kota'
    ]
  }
]

const termsAndConditions = [
  'Pemesanan minimal H-3 sebelum tanggal acara',
  'Uang muka 50% untuk konfirmasi pemesanan',
  'Tidak ada refund jika pembatalan kurang dari H-1',
  'Waktu acara dimulai setelah semua peserta hadir',
  'Durasi hitung dari waktu yang disepakati',
  'Penyedia tidak bertanggung jawab atas kehilangan barang pribadi',
  'Peserta wajib menjaga fasilitas yang dipakai',
  'Denda keterlambatan Rp 50.000/jam jika melebihi durasi',
  'Pembayaran sisa dilakukan saat hari H',
  'Harga dapat berubah sewaktu-waktu tanpa pemberitahuan'
]

export default function EventPaket() {
  const [openPackage, setOpenPackage] = useState(null)

  return (
    <div>
      <section className="relative pt-24 pb-12 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-center">
            <motion.p variants={fadeInUp} className="text-primary-500 font-medium mb-4">Event Services</motion.p>
            <motion.h1 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">Paket <span className="text-primary-500">Event</span></motion.h1>
            <motion.p variants={fadeInUp} className="text-secondary-600 max-w-2xl mx-auto">Kami menyediakan berbagai pilihan paket event yang fleksibel dan dapat disesuaikan untuk menghadirkan pengalaman yang istimewa.</motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-white">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventPackages.map((pkg) => (
              <motion.div key={pkg.id} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all">
                <div className="aspect-[4/3] overflow-hidden bg-secondary-100">
                  <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-lg md:text-xl text-secondary-900 mb-2">{pkg.name}</h3>
                  <p className="text-secondary-500 text-sm mb-4 line-clamp-2">{pkg.description}</p>

                  <div className="flex items-end justify-between mb-4">
                    <div>
                      <p className="text-primary-600 font-bold text-xl md:text-2xl">{pkg.price} <span className="text-sm font-normal text-secondary-500">{pkg.pricePer}</span></p>
                      <p className="text-secondary-400 text-xs">{pkg.minOrder}</p>
                    </div>
                  </div>

                  <button onClick={() => setOpenPackage(pkg.id)} className="w-full btn-secondary py-2.5 text-sm font-medium">
                    Lihat Detail
                  </button>
                </div>

                {/* Expanded content removed - now using modal popup */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Popup */}
      <AnimatePresence>
        {openPackage && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setOpenPackage(null)}>
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
            {(() => {
              const pkg = eventPackages.find(p => p.id === openPackage)
              return (
                <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
                  <button onClick={() => setOpenPackage(null)} className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-primary-500 text-white hover:bg-primary-600 transition-colors z-10">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                  <img src={pkg.image} alt={pkg.name} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="font-bold text-xl text-secondary-900 mb-2">{pkg.name}</h3>
                    <p className="text-secondary-600 text-sm mb-4">{pkg.description}</p>
                    <div className="flex items-baseline gap-1 mb-4">
                      <span className="text-primary-600 font-bold text-2xl">{pkg.price}</span>
                      <span className="text-secondary-500">{pkg.pricePer}</span>
                    </div>
                    <p className="text-secondary-500 text-sm mb-4">{pkg.minOrder}</p>
                    <div className="border-t border-secondary-200 pt-4 mb-4">
                      <h4 className="font-semibold text-secondary-900 mb-3">Fasilitas:</h4>
                      <ul className="space-y-2">
                        {pkg.facilities.map((facility, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-secondary-600">
                            <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>{facility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <a href={`https://wa.me/6281412428997?text=Halo%20Cat%20Cafe%2C%20saya%20ingin%20pemesanan%20paket%20${encodeURIComponent(pkg.name)}`} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center block py-3">
                      Pesan Sekarang
                    </a>
                  </div>
                </motion.div>
              )
            })()}
          </motion.div>
        )}
      </AnimatePresence>

      <section className="py-10 md:py-14 bg-secondary-50">
        <div className="container-custom">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <h2 className="text-xl md:text-2xl font-bold text-secondary-900 text-center mb-6">Syarat & Ketentuan</h2>
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm max-w-2xl mx-auto">
              <ol className="space-y-3">
                {termsAndConditions.map((term, idx) => (
                  <motion.li key={idx} variants={fadeInUp} className="flex items-start gap-3 text-sm text-secondary-600">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 text-primary-600 font-semibold text-sm flex items-center justify-center">{idx + 1}</span>
                    <span>{term}</span>
                  </motion.li>
                ))}
              </ol>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INSTAGRAM CTA SECTION */}
      <section className="py-12 md:py-16 bg-secondary-50 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[32rem] h-[32rem] bg-gradient-to-br from-primary-50 to-secondary-50 rounded-full blur-2xl opacity-70" />
        <div className="absolute -top-10 right-[-6rem] w-72 h-72 bg-gradient-to-br from-primary-100/60 to-accent-100/60 rounded-full blur-3xl opacity-70" />
        <div className="absolute -bottom-20 left-[-6rem] w-72 h-72 bg-gradient-to-br from-primary-100/50 to-secondary-100/50 rounded-full blur-3xl opacity-70" />
        <div className="absolute inset-0 bg-pattern opacity-10" />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-3 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center lg:text-left"
              >
                <p className="text-primary-500 font-medium mb-3">Instagram • Momen Event Terbaru</p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
                  Lihat Momen Seru Lainnya di Instagram Kami!
                </h2>
                <p className="text-secondary-600 max-w-xl mx-auto lg:mx-0 text-sm md:text-base leading-relaxed mb-7">
                  Temukan berbagai event seru, dokumentasi perjalanan, dan inspirasi wisata terbaik langsung dari social media kami.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  <a
                    href="https://www.instagram.com/catcafecatering_cibubur/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center justify-center gap-3 px-6 py-3"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M17.5 6.5h.01"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                    Follow Instagram
                  </a>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-soft p-4 md:p-5 border border-secondary-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm font-semibold text-secondary-900">Preview Feed</p>
                  <span className="text-xs font-medium text-primary-600">@catcafecatering_cibubur</span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {[
                    'https://img.magnific.com/free-photo/birthday-party-concept-with-joyful-people_23-2147716819.jpg',
                    'https://img.magnific.com/free-photo/birthday-party-concept-with-joyful-people_23-2147716819.jpg',
                    'https://img.magnific.com/free-photo/birthday-party-concept-with-joyful-people_23-2147716819.jpg',
                    'https://img.magnific.com/free-photo/birthday-party-concept-with-joyful-people_23-2147716819.jpg',
                    'https://img.magnific.com/free-photo/birthday-party-concept-with-joyful-people_23-2147716819.jpg',
                    'https://img.magnific.com/free-photo/birthday-party-concept-with-joyful-people_23-2147716819.jpg'
                  ].map((src, idx) => (
                    <a
                      key={idx}
                      href="https://www.instagram.com/catcafecatering_cibubur/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative overflow-hidden rounded-xl"
                      aria-label={`Instagram thumbnail ${idx + 1}`}
                    >
                      <img
                        src={src}
                        alt="Instagram preview"
                        className="w-full h-24 md:h-28 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>

                <p className="text-xs text-secondary-600 mt-4 text-center">
                  Klik thumbnail untuk membuka Instagram.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gradient-to-br from-primary-500 via-primary-600 to-accent-500 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-1/2 translate-y-1/2 blur-2xl" />
        <div className="absolute inset-0 bg-pattern opacity-10" />

        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 drop-shadow-sm">Siap Mengabadikan Momen Spesial?</h2>
            <p className="text-white/90 mb-6 max-w-md mx-auto">Konsultasikan kebutuhan acara Anda bersama kami secara gratis dan nikmati berbagai penawaran eksklusif.</p>
            <a href="https://wa.me/6281412428997" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-2xl font-semibold hover:shadow-lg hover:scale-105 transition-all">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.148-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.06 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Hubungi Kami via WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}