import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

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

const cats = [
  { id: 1, name: 'K-Willy', breed: 'BSH Pedigree', age: '15 Juni 2025', image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/v1778551253/K-Willy_15_Juni_2025_British_Short_Hair_Pedigree_Jantan_rdrudh.webp?w=400' },
  { id: 2, name: 'Molly', breed: 'Persia Peaknose Longhair', age: '26 Maret 2024', image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778485976/Molly_26_Maret_2024_Persia_Peaknose_Longhair_Betina_wrodb8.webp' },
  { id: 3, name: 'Boni', breed: 'Persia Medium', age: '10 Desember 2016', image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778485963/Boni_10_Desember_2016_Dom_Mix_Persia_Persia_Medium__Betina_rxxlwf.webp' },
  { id: 4, name: 'Chanakya Puspa', breed: 'Exotic Short Hair Peaknose', age: '6 Februari 2023', image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778485965/Chanakya_Puspa_6_Februari_2023_Exotic_ShortHair_Peaknose_Betina_rss4it.webp' },
  { id: 5, name: 'Goldie', breed: 'Scottish Fold', age: '6 Desember 2024', image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778485944/Goldie_6_Desember_2024_Scottish_Fold_Betina_bidon5.webp' },
  { id: 6, name: 'Fla', breed: 'British Short Hair', age: '26 Oktober 2024', image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778485939/Fla_26_Oktober_2024_British_Short_Hair_Jantan_jpticf.webp' },
]

export default function About() {
  return (
    <div>
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-center">
            <motion.p variants={fadeInUp} className="text-primary-500 font-medium mb-4">Tentang Kami</motion.p>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Cerita <span className="text-primary-500">Kami</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-secondary-600 text-lg max-w-2xl mx-auto">
              Mengenal lebih dekat Cat Cafe by Arlindo dan alasan kami mencintai setiap proses dalam perjalanan ini.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="section-title">Awal <span className="text-primary-500">Cerita</span></h2>
              <div className="space-y-4 text-secondary-600 leading-relaxed">
                <p>Cat Cafe by Arlindo berawal dari sebuah mimpi sederhana seorang pecinta kucing yang ingin menghadirkan ruang hangat bagi siapa pun untuk menikmati kopi berkualitas sambil berinteraksi dengan kucing-kucing yang menggemaskan.</p>
                <p>Didirikan pada tahun 2024, kami memulai perjalanan ini hanya dengan tiga ekor kucing. Seiring waktu, keluarga kami terus berkembang dan kini telah menjadi rumah bagi lebih dari dua puluh kucing dari berbagai ras.</p>
                <p>Setiap sudut cafe dirancang untuk menciptakan kenyamanan, baik bagi pengunjung maupun kucing-kucing yang kami rawat. Kami percaya bahwa setiap orang berhak merasakan kebahagiaan sederhana melalui interaksi dengan hewan yang penuh kasih.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
              <img src="https://res.cloudinary.com/dmdl9p7do/image/upload/v1778552572/IMG_2019_eojsup.webp?w=600" alt="Cat Cafe Interior" className="rounded-3xl shadow-card w-full" />
              <motion.div animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-card">
                <p className="text-4xl font-bold text-primary-500">2024</p>
                <p className="text-secondary-600">Didirikan</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="section-title">Visi & <span className="text-primary-500">Misi</span></h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-3xl p-8 shadow-soft">
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">Visi</h3>
              <p className="text-secondary-600 leading-relaxed">Menjadi cat cafe terdepan di Indonesia yang menghadirkan pengalaman unik dan berkesan bagi setiap pengunjung, sekaligus berkontribusi dalam meningkatkan kesejahteraan kucing peliharaan.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white rounded-3xl p-8 shadow-soft">
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">Misi</h3>
              <ul className="text-secondary-600 space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                  <span>Menyediakan kopi dan makanan berkualitas tinggi</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                  <span>Merawat kucing dengan penuh kasih sayang dan tanggung jawab</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                  <span>Menciptakan lingkungan yang nyaman dan bersih</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                  <span>Memberikan pelayanan terbaik kepada pelanggan</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                  <span>Mengedukasi tentang pentingnya perawatan kucing</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="section-title">Meet Our <span className="text-primary-500">Fur Babies</span></h2>
            <p className="text-secondary-600 text-lg">Kenalan sama kucing-kucing gemas yang siap nemenin waktu santai kamu di sini!</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cats.map((cat, index) => (
              <motion.div key={cat.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ y: -10 }} className="card">
                <div className="aspect-square overflow-hidden">
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-secondary-900 mb-2">{cat.name}</h3>
                  <div className="flex gap-4 text-sm text-secondary-600">
                    <span>{cat.breed}</span>
                    <span>{cat.age}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="section-title">Nilai-Nilai <span className="text-primary-500">Kami</span></h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Kasih Sayang', desc: 'Memperlakukan setiap kucing layaknya keluarga' },
              { title: 'Kualitas', desc: 'Menghadirkan yang terbaik dalam setiap sajian dan layanan' },
              { title: 'Keramahan', desc: 'Memberikan pengalaman yang hangat dan menyenangkan' },
              { title: 'Keberlanjutan', desc: 'Menerapkan praktik yang ramah lingkungan' },
            ].map((value, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ scale: 1.05 }} className="bg-white rounded-2xl p-6 text-center shadow-soft">
                <h4 className="font-bold text-secondary-900 mb-2">{value.title}</h4>
                <p className="text-secondary-600 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}