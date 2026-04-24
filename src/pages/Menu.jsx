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

const categories = [
  { id: 'all', name: 'All Menu' },
  { id: 'coffee', name: 'Coffee' },
  { id: 'non-coffee', name: 'Non-Coffee' },
  { id: 'snacks', name: 'Snacks' },
  { id: 'drinks', name: 'Drinks' },
]

const menuItems = {
  coffee: [
    { id: 1, name: 'Cappuccino Classic', desc: 'Kopi espresso dengan susu creamy', price: 'Rp 25.000', badge: 'Best Seller', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400' },
    { id: 2, name: 'Americano', desc: 'Espresso dengan air panas', price: 'Rp 22.000', badge: null, image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400' },
    { id: 3, name: 'Latte', desc: 'Espresso dengan steamed milk', price: 'Rp 26.000', badge: null, image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400' },
    { id: 4, name: 'Mocha', desc: 'Espresso, cokelat, dan susu', price: 'Rp 28.000', badge: 'Popular', image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=400' },
  ],
  'non-coffee': [
    { id: 1, name: 'Matcha Latte', desc: 'Matcha premium dengan susu', price: 'Rp 28.000', badge: 'Best Seller', image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=400' },
    { id: 2, name: 'Thai Tea', desc: 'Teh Thailand dengan susu', price: 'Rp 25.000', badge: null, image: 'https://images.unsplash.com/photo-1558857563-b371033873b8?w=400' },
    { id: 3, name: 'Chocolate Milkshake', desc: 'Cokelat shake dengan ice cream', price: 'Rp 30.000', badge: null, image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400' },
    { id: 4, name: 'Strawberry Smoothie', desc: 'Strawberry segar dengan yogurt', price: 'Rp 28.000', badge: null, image: 'https://images.unsplash.com/photo-1502741224143-90386d7f8c82?w=400' },
  ],
  snacks: [
    { id: 1, name: 'Croissant', desc: 'Roti mentega lembut', price: 'Rp 18.000', badge: null, image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400' },
    { id: 2, name: 'Cinnamon Roll', desc: 'Roti kayu manis dengan glaze', price: 'Rp 20.000', badge: null, image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=400' },
    { id: 3, name: 'Blueberry Muffin', desc: 'Muffin blueberry homemade', price: 'Rp 22.000', badge: 'Popular', image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400' },
    { id: 4, name: 'Cheese Cake', desc: 'Kue cheese lembut', price: 'Rp 25.000', badge: null, image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400' },
  ],
  drinks: [
    { id: 1, name: 'Signature Latte', desc: 'Signature drink andalan kami', price: 'Rp 30.000', badge: 'Best Seller', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400' },
    { id: 2, name: 'Caramel Macchiato', desc: 'Macchiato dengan karamel', price: 'Rp 28.000', badge: null, image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=400' },
    { id: 3, name: 'Fresh Lemonade', desc: 'Lemonade segar', price: 'Rp 22.000', badge: null, image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400' },
    { id: 4, name: 'Hot Chocolate', desc: 'Hot cokelat dengan marshmallow', price: 'Rp 26.000', badge: 'Popular', image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=400' },
  ]
}

// Flatten all items for "All" category
const allMenuItems = [
  ...menuItems.coffee,
  ...menuItems['non-coffee'],
  ...menuItems.snacks,
  ...menuItems.drinks
]

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('all')

  const displayItems = activeCategory === 'all' ? allMenuItems : menuItems[activeCategory]

  return (
    <div>
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-center">
            <motion.p variants={fadeInUp} className="text-primary-500 font-medium mb-4">Our Menu</motion.p>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">Menu <span className="text-primary-500">Cafe</span></motion.h1>
            <motion.p variants={fadeInUp} className="text-secondary-600 text-lg max-w-2xl mx-auto">Kami menghadirkan pilihan kopi, minuman, dan hidangan ringan berkualitas untuk menemani setiap momen bersantai Anda.</motion.p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white sticky top-16 z-30 shadow-soft">
        <div className="container-custom py-4">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <motion.button key={category.id} onClick={() => setActiveCategory(category.id)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={`px-4 py-2 text-sm md:px-6 md:py-3 md:text-base rounded-full font-medium whitespace-nowrap transition-all ${activeCategory === category.id ? 'bg-primary-500 text-white shadow-md' : 'bg-secondary-100 text-secondary-700 hover:bg-primary-50'}`}>
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatePresence mode="wait">
            <motion.div key={activeCategory} initial="hidden" animate="visible" exit="hidden" variants={staggerContainer}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {displayItems.map((item, index) => (
                  <motion.div key={item.id} variants={fadeInUp} whileHover={{ y: -5 }} className="bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-card transition-all">
                    <div className="aspect-square overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-bold text-secondary-900 text-sm">{item.name}</h3>
                        {item.badge && <span className="bg-primary-100 text-primary-600 text-xs font-semibold px-2 py-0.5 rounded-full">{item.badge}</span>}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-primary-500 via-primary-600 to-accent-500 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-1/2 translate-y-1/2 blur-2xl" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-xl" />

        {/* Pattern overlay */}
        <div className="absolute inset-0 bg-pattern opacity-10" />

        {/* Floating coffee cup icon */}
        <div className="absolute top-8 right-[20%] opacity-10">
          <svg className="w-10 h-10 md:w-14 md:h-14 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M2 21h18v-2H2v2zm18-9v-2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm-4 0c0-1.1.9-2 2-2s2 .9 2 2h-2v2h-2zM4 3h14v2H4V3zm2 4h10v2H6V7zm3 4h7v2H9v-2z"/></svg>
        </div>
        <div className="absolute bottom-8 left-[15%] opacity-10 -rotate-12">
          <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M18.5 3H6c-1.1 0-2 .9-2 2v5.71c0 3.83 2.95 7.18 6.78 7.29 3.96.12 7.22-3.06 7.22-7v-1h.5c1.93 0 3.5-1.57 3.5-3.5S20.43 3 18.5 3zM16 5v3H6V5h10zm2.5 3H18V5h.5c.83 0 1.5.67 1.5 1.5S19.33 8 18.5 8zM4 19h16v2H4v-2z"/></svg>
        </div>

        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-sm">Ingin Mengadakan Event?</h2>
            <p className="text-white/90 mb-6 drop-shadow">Kami menerima pemesanan untuk berbagai acara, seperti ulang tahun, gathering, dan event khusus lainnya dengan suasana yang hangat dan berkesan.</p>
            <a href="/event-paket" className="inline-block bg-white text-primary-600 px-8 py-3 rounded-2xl font-semibold hover:shadow-lg hover:scale-105 transition-all">Paket Event Cat Cafe</a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}