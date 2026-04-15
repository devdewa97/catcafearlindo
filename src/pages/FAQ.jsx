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

const faqItems = [
  { question: 'Apakah saya harus reservasi terlebih dahulu?', answer: 'Ya, kami sangat menyarankan untuk melakukan reservasi terlebih dahulu, terutama di akhir pekan dan hari libur. Anda dapat melakukan reservasi melalui website kami atau menghubungi kami langsung via WhatsApp.' },
  { question: 'Berapa lama waktu kunjungan yang diperbolehkan?', answer: 'Setiap sesi kunjungan berdurasi 60 menit. Ini adalah untuk memberikan kesempatan yang sama kepada semua pengunjung untuk menikmati waktu dengan kucing-kucing kami.' },
  { question: 'Apakah ada batasan usia untuk pengunjung?', answer: 'Anak-anak dari semua usia diperbolehkan masuk. Namun, anak-anak di bawah 12 tahun harus didampingi oleh orang dewasa. Kami juga menyediakan area khusus untuk keluarga.' },
  { question: 'Bolehkan membawa makanan sendiri?', answer: 'Untuk menjaga kebersihan dan kesehatan kucing, kami tidak mengizinkan pengunjung membawa makanan dari luar. Namun, Anda dapat memesan makanan dan minuman dari menu cafe kami.' },
  { question: 'Apakah cafe ini ramah terhadap allergy?', answer: 'Kami berusaha menjaga kebersihan dengan baik, namun bagi pengunjung yang memiliki allergy terhadap bulu kucing, kami menyarankan untuk berkonsultasi dengan dokter sebelum mengunjungi. Kami juga menyediakan area bebas kucing untuk yang ingin menikmati kopi saja.' },
  { question: 'Apakah boleh mengambil foto dengan flash?', answer: 'Mohon maaf, penggunaan flash saat fotografi tidak diperbolehkan karena dapat menakuti dan mengganggu kucing. Anda dapat mengambil foto tanpa flash.' },
  { question: 'Bagaimana jika saya terlambat datang?', answer: 'Jika Anda terlambat lebih dari 15 menit, sesi kunjungan Anda mungkin akan dipotong sesuai waktu keterlambatan. Kami menghargai waktu kunjungan pelanggan lain.' },
  { question: 'Apakah bisa membawa kucing sendiri?', answer: 'Mohon maaf, kami tidak mengizinkan pengunjung membawa hewan peliharaan mereka sendiri. Ini untuk menjaga kesehatan dan keamanan kucing-kucing yang ada di cafe kami.' },
  { question: 'Apakah tersedia paket ulang tahun?', answer: 'Ya! Kami menyediakan paket ulang tahun khusus yang meliputi tempat duduk khusus, makanan ringan, dan kesempatan foto dengan kucing. Hubungi kami untuk informasi lebih lanjut.' },
  { question: 'Bagaimana cara menghubungi customer service?', answer: 'Anda dapat menghubungi kami melalui WhatsApp di +62 812 3456 7890, email di hello@catcafe Arlindo.com, atau melalui media sosial kami.' },
]

function FAQItem({ item, index, isOpen, onToggle }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white rounded-xl shadow-soft overflow-hidden">
      <button onClick={onToggle} className="w-full px-5 py-4 flex items-center justify-between text-left">
        <span className="font-semibold text-secondary-900 pr-4 text-sm">{item.question}</span>
        <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }} className="flex-shrink-0 text-primary-500">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
            <div className="px-5 pb-4 text-secondary-600 text-sm leading-relaxed">{item.answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  const handleToggle = (index) => setOpenIndex(openIndex === index ? -1 : index)

  return (
    <div>
      <section className="relative pt-28 pb-8 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-center">
            <motion.h1 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-secondary-900 mb-3">Pertanyaan <span className="text-primary-500">Umum</span></motion.h1>
            <motion.p variants={fadeInUp} className="text-secondary-600 text-base max-w-2xl mx-auto">Jawaban untuk pertanyaan yang sering ditanyakan oleh pengunjung</motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 bg-secondary-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto space-y-3">
            {faqItems.map((item, index) => (<FAQItem key={index} item={item} index={index} isOpen={openIndex === index} onToggle={() => handleToggle(index)} />))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-gradient-to-br from-primary-500 via-primary-600 to-accent-500 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl" />
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2 blur-2xl" />
        <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-white/5 rounded-full blur-lg" />

        {/* Pattern overlay */}
        <div className="absolute inset-0 bg-pattern opacity-10" />

        {/* Floating question mark icons */}
        <div className="absolute top-6 left-[15%] opacity-10">
          <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>
        </div>
        <div className="absolute bottom-6 right-[20%] opacity-10 rotate-12">
          <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>
        </div>

        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-pattern opacity-5" />
            <div className="relative z-10">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3 drop-shadow-sm">Masih Ada Pertanyaan Lain?</h2>
              <p className="text-white/90 mb-5 max-w-lg mx-auto text-sm drop-shadow">Jika Anda tidak menemukan jawaban yang Anda cari, jangan ragu untuk menghubungi kami langsung.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="bg-white text-primary-600 px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all text-sm">Hubungi via WhatsApp</a>
                <a href="/reservation" className="border-2 border-white text-white px-6 py-2.5 rounded-full font-semibold hover:bg-white/10 transition-all text-sm">Buat Reservasi</a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}