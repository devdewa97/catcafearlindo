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

// Gallery Images - organized grid
const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600', alt: 'Persian Cat' },
  { id: 2, src: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=600', alt: 'Scottish Fold' },
  { id: 3, src: 'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=600', alt: 'British Shorthair' },
  { id: 4, src: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=600', alt: 'Orange Tabby' },
  { id: 5, src: 'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=600', alt: 'Cat Playing' },
  { id: 6, src: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600', alt: 'Cafe Interior' },
  { id: 7, src: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=600', alt: 'Cat Sleeping' },
  { id: 8, src: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=600', alt: 'Cute Cat' },
]

// Menu items - 8 best sellers with images only
const menuItems = [
  { id: 1, name: 'Cappuccino', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400' },
  { id: 2, name: 'Matcha Latte', image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=400' },
  { id: 3, name: 'Latte', image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400' },
  { id: 4, name: 'Croissant', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400' },
  { id: 5, name: 'Americano', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400' },
  { id: 6, name: 'Blueberry Muffin', image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400' },
  { id: 7, name: 'Mocha', image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=400' },
  { id: 8, name: 'Cheesecake', image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400' },
]

// Testimonials - static 3 cards
const testimonials = [
  { id: 1, name: 'Siti Rahayu', role: 'Customer', text: 'Tempatnya sangat nyaman! Kopinya enak dan kucing-kucingnya super friendly. Pasti akan kembali lagi.' },
  { id: 2, name: 'Budi Santoso', role: 'Customer', text: 'Pengalaman yang luar biasa. Anak-anak sangat senang bermain dengan kucing. Staffnya juga ramah.' },
  { id: 3, name: 'Dewi Lestari', role: 'Customer', text: 'Suka banget sama suasananya. Cocok buat nongkrong sama teman atau kerja santai. Sangat direkomendasikan!' },
]

export default function Home() {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900">
          <div className="absolute inset-0 opacity-30 bg-pattern" />
          <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=1920" alt="Cat Cafe Background" className="w-full h-full object-cover opacity-20" />
        </div>

        <div className="relative z-10 container-custom text-center px-4">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl mx-auto">
            <motion.p variants={fadeInUp} className="text-primary-300 font-medium text-base md:text-lg mb-3 md:mb-4">Welcome to Cat Cafe by Arlindo</motion.p>
            <motion.h1 variants={fadeInUp} className="text-2xl md:text-4xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
              <b>Santai Bersama Kucing Dan Nikmati Hidangan Lezat<br />
              <span className="text-gradient">di Cat Cafe Arlindo</span></b>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-secondary-200 text-sm md:text-lg max-w-xl mx-auto mb-6 md:mb-10">
              Nikmati suasana yang nyaman dengan pilihan hidangan dan minuman berkualitas, ditemani kucing-kucing yang ramah dan terawat untuk melengkapi waktu santai Anda.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Link to="/reservation" className="btn-primary text-sm md:text-base px-6 md:px-7 py-2.5 md:py-3">Reservasi Sekarang</Link>
              <Link to="/menu" className="bg-primary-500 text-white px-6 md:px-7 py-2.5 md:py-3 rounded-2xl font-semibold transition-all hover:bg-primary-600 hover:shadow-lg hover:scale-105 text-sm md:text-base">Lihat Menu</Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2">
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-5 h-8 md:w-6 md:h-10 border-2 border-white/50 rounded-full flex justify-center pt-1 md:pt-2">
            <div className="w-1 h-2 md:h-3 bg-white/70 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* ABOUT US SECTION */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4 md:mb-6"><b>Tentang Kami</b> <span className="text-primary-500"></span></h2>
              <p className="text-secondary-600 text-sm md:text-lg mb-4 md:mb-6 leading-relaxed">
                <b>Cat Cafe by Arlindo</b> adalah tempat bersantai yang menghadirkan suasana nyaman dengan perpaduan hidangan berkualitas dan interaksi menyenangkan bersama kucing-kucing yang terawat.
                Berlokasi di Cibubur, kami berkomitmen untuk menciptakan pengalaman yang tenang, bersih, dan ramah bagi setiap pengunjung yang datang.
              </p>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {[{ title: 'Cozy Place', desc: 'Suasana Hangat dan Nyaman' }, { title: 'Friendly Cats', desc: 'Kucing Terlatih dan Sehat' }, { title: 'Hygienic', desc: 'Kebersihan Prioritas Utama' }, { title: 'Unique Experience', desc: 'Pengalaman tak terlupakan' }].map((item, index) => (
                  <motion.div key={index} whileHover={{ scale: 1.05 }} className="bg-secondary-50 p-3 md:p-4 rounded-xl">
                    <h4 className="font-semibold text-secondary-900 text-sm md:text-base">{item.title}</h4>
                    <p className="text-xs md:text-sm text-secondary-600">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative mt-6 lg:mt-0">
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="space-y-3 md:space-y-4">
                  <img src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=400" alt="Cat 1" className="rounded-xl md:rounded-2xl shadow-card w-full h-36 md:h-48 object-cover" />
                  <img src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=400" alt="Cat 2" className="rounded-xl md:rounded-2xl shadow-card w-full h-48 md:h-64 object-cover" />
                </div>
                <div className="space-y-3 md:space-y-4 pt-6 md:pt-8">
                  <img src="https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=400" alt="Cat 3" className="rounded-xl md:rounded-2xl shadow-card w-full h-48 md:h-64 object-cover" />
                  <img src="https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=400" alt="Cat 4" className="rounded-xl md:rounded-2xl shadow-card w-full h-36 md:h-48 object-cover" />
                </div>
              </div>
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute -bottom-3 md:-bottom-4 -right-3 md:-right-4 bg-white p-3 md:p-4 rounded-xl md:rounded-2xl shadow-card">
                <p className="text-xl md:text-2xl font-bold text-primary-500">500+</p>
                <p className="text-xs md:text-sm text-secondary-600">Happy Customers</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW SECTION */}
      <section className="py-10 md:py-16 bg-secondary-50">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-2 md:mb-3"><b>Galeri</b> <span className="text-primary-500">Kami</span></h2>
            <p className="text-secondary-600 text-sm md:text-base max-w-xl mx-auto">Menampilkan berbagai momen kebersamaan dengan kucing serta gambaran suasana dan fasilitas yang kami hadirkan.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {galleryImages.map((image, index) => (
              <motion.div key={image.id} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ scale: 1.02 }} className="aspect-square overflow-hidden rounded-lg md:rounded-xl">
                <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-8 md:mt-10">
            <Link to="/gallery" className="btn-secondary text-sm md:text-base px-6 md:px-8 py-2.5 md:py-3">Lihat Foto Lainnya</Link>
          </motion.div>
        </div>
      </section>

      {/* MENU PREVIEW SECTION */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-2 md:mb-3"><b>Menu</b> <span className="text-primary-500">Kami</span></h2>
            <p className="text-secondary-600 text-sm md:text-base max-w-xl mx-auto">Temukan berbagai pilihan kopi dan hidangan yang diracik dengan kualitas terbaik untuk menemani waktu santai Anda.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {menuItems.map((item, index) => (
              <motion.div key={item.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ y: -5 }} className="bg-white rounded-lg md:rounded-xl overflow-hidden shadow-soft hover:shadow-card transition-all">
                <div className="aspect-square overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-3 md:p-4 text-center">
                  <h3 className="font-semibold text-secondary-900 text-sm md:text-base">{item.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-8 md:mt-10">
            <Link to="/menu" className="btn-primary text-sm md:text-base px-6 md:px-8 py-2.5 md:py-3">Lihat Menu Lainnya</Link>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      <section className="py-10 md:py-16 bg-primary-50">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-2 md:mb-3"><b>Apa Kata Pelanggan</b> <span className="text-primary-500">Kami</span></h2>
            <p className="text-secondary-600 text-sm md:text-base max-w-xl mx-auto">Pendapat dan pengalaman pelanggan menjadi bagian penting dalam menjaga kualitas layanan kami.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div key={testimonial.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-soft">
                <p className="text-secondary-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 md:w-12 h-10 md:h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-primary-600 font-semibold text-sm md:text-base">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900 text-sm md:text-base">{testimonial.name}</h4>
                    <p className="text-xs md:text-sm text-secondary-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-10 md:py-16 bg-gradient-to-br from-primary-500 via-primary-600 to-accent-500 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl" />
        <div className="absolute bottom-0 right-0 w-40 h-40 md:w-56 md:h-56 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2 blur-2xl" />
        <div className="absolute top-1/2 right-1/4 w-20 h-20 md:w-32 md:h-32 bg-white/5 rounded-full blur-xl" />

        {/* Pattern overlay */}
        <div className="absolute inset-0 bg-pattern opacity-10" />

        {/* Floating cat paw decorations */}
        <div className="absolute top-10 left-[10%] opacity-10">
          <svg className="w-8 h-8 md:w-12 md:h-12 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M4.5 9.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0"/><path d="M9.5 5.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0"/><path d="M14.5 5.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0"/><path d="M19.5 9.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0"/><path d="M12 14.5c2 0 3.5-1.5 3.5-3.5 0-1.5-1-2.5-2-3 1 0 2 .5 2 1.5 0 1-.5 2-1.5 2s-1.5-1-1.5-2c0-1 .5-1.5 1.5-1.5s1.5.5 2 2c-1 .5-2 1.5-2 3 0 2 1.5 3.5 3.5 3.5"/></svg>
        </div>
        <div className="absolute bottom-10 right-[15%] opacity-10 rotate-12">
          <svg className="w-10 h-10 md:w-14 md:h-14 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M4.5 9.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0"/><path d="M9.5 5.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0"/><path d="M14.5 5.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0"/><path d="M19.5 9.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0"/><path d="M12 14.5c2 0 3.5-1.5 3.5-3.5 0-1.5-1-2.5-2-3 1 0 2 .5 2 1.5 0 1-.5 2-1.5 2s-1.5-1-1.5-2c0-1 .5-1.5 1.5-1.5s1.5.5 2 2c-1 .5-2 1.5-2 3 0 2 1.5 3.5 3.5 3.5"/></svg>
        </div>

        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center px-4">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6 drop-shadow-sm"><b>Reservasi Waktu Santai Anda Bersama Kami</b></h2>
            <p className="text-white/90 text-sm md:text-lg max-w-xl md:max-w-2xl mx-auto mb-6 md:mb-8 drop-shadow">Nikmati pengalaman bersantai yang nyaman bersama kucing-kucing kami. Lakukan reservasi sekarang untuk mengamankan waktu kunjungan Anda.</p>
            <Link to="/reservation" className="inline-block bg-white text-primary-600 px-6 md:px-8 py-2.5 md:py-3 rounded-xl md:rounded-2xl font-semibold hover:shadow-lg hover:scale-105 transition-all text-sm md:text-base">Reservai Sekarang</Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}