import { motion } from 'framer-motion'

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

const rules = [
  { title: 'Jangan Memaksa Kucing', desc: 'Jangan memaksa kucing untuk berinteraksi jika mereka tidak mau. Biarkan mereka mendekati Anda secara alami.' },
  { title: 'Bilas Tangan Sebelum Masuk', desc: 'Cuci tangan Anda sebelum memasuki area kucing untuk menjaga kebersihan dan kesehatan mereka.' },
  { title: 'Jaga Ketenangan', desc: 'Pertahankan suasana tenang. Hindari suara keras atau gerakan mendadak yang dapat menakuti kucing.' },
  { title: 'Dilarang Memberi Makan', desc: 'Jangan memberikan makanan kepada kucing tanpa izin staff. Beberapa makanan manusia berbahaya bagi mereka.' },
  { title: 'Hindari Menyentuh Area Sensitif', desc: 'Hindari menyentuh ekor, perut, atau wajah kucing kecuali mereka memperbolehkan.' },
  { title: 'Pengawasan Anak-anak', desc: 'Anak-anak harus diawasi oleh orang dewasa dan diajarkan cara memperlakukan kucing dengan baik.' },
  { title: 'Jaga Kebersihan', desc: 'Jagalah kebersihan area dengan tidak membuang sampah sembarangan dan membersihkan tangan sebelum dan sesudah menyentuh kucing.' },
  { title: 'Patuhi Waktu Reservasi', desc: 'Patuhi jadwal reservasi Anda. Session berlangsung selama 60 menit untuk memberikan kesempatan ke pengunjung lain.' },
  { title: 'Fotografi yang Bijak', desc: 'Menggunakan flash saat mengambil foto dapat menakuti kucing. Gunakan mode normal dan jangan mengganggu kucing yang sedang tidur.' },
  { title: 'Lapor Jika Ada Masalah', desc: 'Jika Anda melihat perilaku aneh pada kucing atau ada yang terluka, segera laporkan ke staff.' },
]

export default function Rules() {
  return (
    <div>
      <section className="relative pt-24 pb-12 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-center">
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-secondary-900 mb-3">Aturan <span className="text-primary-500">Cafe</span></motion.h1>
            <motion.p variants={fadeInUp} className="text-secondary-600 text-lg max-w-2xl mx-auto">Demi menjaga kenyamanan, keamanan, dan kebersamaan, mohon setiap pengunjung mengikuti peraturan yang berlaku.</motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-primary-50 rounded-2xl p-6 md:p-8 text-center mb-8">
            <h2 className="text-xl font-bold text-secondary-900 mb-2">Bersama Menciptakan Lingkungan Nyaman</h2>
            <p className="text-secondary-600 text-sm max-w-2xl mx-auto">Kucing-kucing kami adalah anggota keluarga yang sangat kami cintai. Dengan mengikuti aturan ini, Anda membantu kami menjaga kesejahteraan mereka.</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {rules.map((rule, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="bg-secondary-50 rounded-xl p-5 flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-secondary-900 mb-1">{rule.title}</h3>
                    <p className="text-secondary-600 text-sm leading-relaxed">{rule.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-red-50 border border-red-200 rounded-xl p-6 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              </div>
              <div>
                <h3 className="font-bold text-red-800 mb-1">Peringatan Penting</h3>
                <p className="text-red-700 text-sm">Pengunjung yang tidak mengikuti aturan dan tidak mengindahkan peringatan dari staff akan diminta untuk meninggalkan cafe tanpa pengembalian dana.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-8 bg-primary-50">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <h2 className="text-xl font-bold text-secondary-900 mb-2">Masih Ada Pertanyaan?</h2>
            <p className="text-secondary-600 mb-4">Tim kami siap membantu Anda. Silakan hubungi kami untuk informasi lebih lanjut terkait aturan yang berlaku.</p>
            <a href="/faq" className="inline-block btn-primary">Lihat FAQ</a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}