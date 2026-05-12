import { useState } from 'react'
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

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    notes: ''
  })

  const [errors, setErrors] = useState({})
  const [showTerms, setShowTerms] = useState(false)
  const [acceptedTerms, setAcceptedTerms] = useState(false)

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Nama wajib diisi'
    if (!formData.email.trim()) newErrors.email = 'Email wajib diisi'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Format email tidak valid'
    if (!formData.phone.trim()) newErrors.phone = 'Nomor HP wajib diisi'
    if (!formData.date) newErrors.date = 'Tanggal wajib diisi'
    if (!formData.time) newErrors.time = 'Jam wajib diisi'
    if (!acceptedTerms) newErrors.terms = 'Anda harus menyetujui syarat dan ketentuan'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      const message = `Halo Cat Cafe by Arlindo,%0A%0ASaya ingin melakukan reservasi:%0A%0ANama: ${formData.name}%0AEmail: ${formData.email}%0ANomor HP: ${formData.phone}%0ATanggal: ${formData.date}%0AJam: ${formData.time}%0AJumlah Tamu: ${formData.guests}%0ACatatan: ${formData.notes}%0A%0ATerima kasih!`
      window.open(`https://wa.me/6281412428997?text=${message}`, '_blank')
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const today = new Date().toISOString().split('T')[0]
  const timeSlots = []
  for (let hour = 10; hour <= 21; hour++) {
    timeSlots.push(`${hour.toString().padStart(2, '0')}:00`)
    if (hour < 21) timeSlots.push(`${hour.toString().padStart(2, '0')}:30`)
  }

  const terms = [
    'Reservasi berlaku untuk 1 sesi kunjungan selama 60 menit',
    'Pembatalan harus dilakukan minimal 2 jam sebelum jadwal reservasi',
    'Pengunjung wajib menjaga perilaku dan mengikuti aturan cafe',
    'Anak-anak di bawah 12 tahun harus didampingi orang dewasa',
    'Tidak diperbolehkan membawa makanan dari luar',
    'Gunakan flash saat fotografi tidak diperbolehkan',
  ]

  return (
    <div>
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-center">
            <motion.p variants={fadeInUp} className="text-primary-500 font-medium mb-4">Reservation</motion.p>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Reservasi <span className="text-primary-500">Sekarang</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-secondary-600 text-lg max-w-2xl mx-auto">
              Lakukan reservasi sekarang dan rasakan momen relaksasi yang istimewa dalam suasana yang nyaman dan penuh kehangatan.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <motion.form initial="hidden" animate="visible" variants={staggerContainer} onSubmit={handleSubmit} className="bg-secondary-50 rounded-3xl p-8 md:p-10">
              <h2 className="text-2xl font-bold text-secondary-900 mb-8">Form Reservasi</h2>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-secondary-700 font-medium mb-2">Nama Lengkap *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} className={`w-full px-4 py-3 rounded-xl border-2 bg-white focus:outline-none ${errors.name ? 'border-red-400' : 'border-secondary-200 focus:border-primary-500'}`} placeholder="Masukkan nama lengkap" />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-secondary-700 font-medium mb-2">Email *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className={`w-full px-4 py-3 rounded-xl border-2 bg-white focus:outline-none ${errors.email ? 'border-red-400' : 'border-secondary-200 focus:border-primary-500'}`} placeholder="email@example.com" />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-secondary-700 font-medium mb-2">Nomor HP *</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={`w-full px-4 py-3 rounded-xl border-2 bg-white focus:outline-none ${errors.phone ? 'border-red-400' : 'border-secondary-200 focus:border-primary-500'}`} placeholder="+62 814 1242 8997" />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <label className="block text-secondary-700 font-medium mb-2">Jumlah Tamu</label>
                    <select name="guests" value={formData.guests} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border-2 border-secondary-200 bg-white focus:outline-none focus:border-primary-500">
                      {[1,2,3,4,5,6,7,8].map(num => (<option key={num} value={num}>{num} orang</option>))}
                    </select>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-secondary-700 font-medium mb-2">Tanggal *</label>
                    <input type="date" name="date" value={formData.date} onChange={handleChange} min={today} className={`w-full px-4 py-3 rounded-xl border-2 bg-white focus:outline-none ${errors.date ? 'border-red-400' : 'border-secondary-200 focus:border-primary-500'}`} />
                    {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
                  </div>
                  <div>
                    <label className="block text-secondary-700 font-medium mb-2">Jam *</label>
                    <select name="time" value={formData.time} onChange={handleChange} className={`w-full px-4 py-3 rounded-xl border-2 bg-white focus:outline-none ${errors.time ? 'border-red-400' : 'border-secondary-200 focus:border-primary-500'}`}>
                      <option value="">Pilih jam</option>
                      {timeSlots.map(time => (<option key={time} value={time}>{time}</option>))}
                    </select>
                    {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
                  </div>
                </div>
                <div>
                  <label className="block text-secondary-700 font-medium mb-2">Catatan Tambahan</label>
                  <textarea name="notes" value={formData.notes} onChange={handleChange} rows={4} className="w-full px-4 py-3 rounded-xl border-2 border-secondary-200 bg-white focus:outline-none focus:border-primary-500 resize-none" placeholder="Ada permintaan khusus? Ceritakan kepada kami..." />
                </div>

                {/* Terms and Conditions */}
                <div className="bg-white rounded-xl p-4 border border-secondary-200">
                  <button type="button" onClick={() => setShowTerms(!showTerms)} className="w-full flex items-center justify-between text-left">
                    <span className="font-medium text-secondary-900">Syarat dan Ketentuan</span>
                    <svg className={`w-5 h-5 text-secondary-500 transition-transform ${showTerms ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {showTerms && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} className="mt-4 space-y-2">
                      {terms.map((term, index) => (
                        <p key={index} className="text-sm text-secondary-600 flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          {term}
                        </p>
                      ))}
                    </motion.div>
                  )}
                </div>

                {/* Checkbox Accept Terms */}
                <div className="flex items-start gap-3">
                  <input type="checkbox" id="acceptTerms" checked={acceptedTerms} onChange={(e) => setAcceptedTerms(e.target.checked)} className="mt-1 w-5 h-5 text-primary-500 border-secondary-300 rounded focus:ring-primary-500" />
                  <label htmlFor="acceptTerms" className="text-sm text-secondary-600">
                    Saya setuju dengan syarat dan ketentuan yang berlaku
                  </label>
                </div>
                {errors.terms && <p className="text-red-500 text-sm">{errors.terms}</p>}
              </div>
              <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full btn-primary text-lg mt-8">
                Buat Reservasi
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {[{ title: 'Lokasi', desc: 'Jl. Citra Grand Cibubur CBD No.35 & 36 BLOK FR 01, Jatirangga, Kec. Jatisampurna, Kota Bks, Jawa Barat 17435' }, { title: 'Jam Buka', desc: 'Buka Setiap Hari, WeekDay : 07.30 - 22.00 WIB & WeekEnd : 06.30 - 22.00 WIB' }, { title: 'Kontak', desc: 'Hubungi admin kami untuk informasi lebih lanjut dan reservasi: 0814-1242-8997' }].map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white rounded-2xl p-6 text-center shadow-soft">
                <h3 className="font-bold text-secondary-900 mb-2">{item.title}</h3>
                <p className="text-secondary-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}