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
  { id: 'makanan', name: 'Makanan' },
  { id: 'snacks', name: 'Snacks' },
  { id: 'drinks', name: 'Drinks' },
]

const menuItems = {
  snacks: [
    { id: 1, name: 'Burger Blepotan', image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778471648/Burger_Blepotan_m0kf97.jpg' },
    { id: 2, name: 'Chicken Teriyaki Pizza', image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778471642/Chicken_Teriyaki_Pizza_ldgtyr.jpg' },
    { id: 3, name: 'Smoked Beef Pizza', image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778471641/Smoked_Beef_Pizza_qnv2mz.jpg' },
    { id: 4, name: 'Mac Cheese', image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778471640/Mac_Cheese_vharxg.jpg' },
    { id: 5, name: 'Tahu Raja', image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778471639/Tahu_Raja_dtr8zp.jpg' },
    { id: 6, name: 'Panini', image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778471639/Panini_llulne.jpg' },
    { id: 7, name: 'Pisang Manja', image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778471566/Pisang_Manja_grxstm.jpg' },
    { id: 8, name: 'Rib Eye Steak', image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778471544/Rib_Eye_Steak_gefjyh.jpg' },
    { id: 9, name: 'Chicken Ball', image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778471538/Chicken_Ball_vhrw7s.jpg' },
    { id: 10, name: 'Pussy Coklat', image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778471523/Pussy_Coklat_mfyq2p.jpg' },
    { id: 11, name: 'Cheese French Fries', image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778471512/Cheese_French_Fries_lfb3gt.jpg'},
  ],
  makanan: [
    { id: 1, name: 'Cat Curry Fried Rice', image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778471644/Cat_Curry_Fried_Rice_s86ms3.jpg' },
    { id: 2, name: 'Beef Katsu Curry', image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778471640/Beef_Katsu_Curry_uxaoei.jpg' },
    { id: 3, name: 'Beef Blackpaper', image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778471638/Beef_Blackpapper_btgpot.jpg' },
    { id: 4, name: 'Seafood Fried Noodle', image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778471588/Seafood_Fried_Noodle_ilbrvm.jpg' },
    { id: 5, name: 'Telur Pecah', image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778471571/Telur_pecah_rasa_bydwjm.jpg' },
    { id: 6, name: 'Spaghetti Oglio Olio', image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778471559/Spaghetti_Oglio_Olio_hzwrkp.jpg' },
    { id: 7, name: 'Fish Mentai', image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778471548/Fish_Mentai_wniqmj.jpg' },
    { id: 8, name: 'Beef Teriyaki', image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778471543/Beef_Teriyaki_nwimsg.jpg' },
    { id: 9, name: 'Chicken Kunpao', image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778471543/Chicken_Kunpao_yqfqjc.jpg' },
    { id: 10, name: 'Soto Ayam', image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778471543/Soto_Ayam_hz6pbi.jpg' },
    { id: 11, name: 'Saikoro Suka Suka', image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778471542/Saikoro_Suka_Suka_nfoafx.jpg' },
    { id: 12, name: 'Rawon', image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778471541/Rawon_szn47a.jpg' },
    { id: 13, name: 'Konro Iga', image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778471537/Konro_Iga_ztqfev.jpg' },
    { id: 14, name: 'Tomyoum Cream Soup', image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778471536/Tomyum_Cream_Soup_elqd7g.jpg' },
    { id: 15, name: 'Indomie Original', image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778471532/Indomie_Ori_gf3a0q.jpg' },
    { id: 16, name: 'Chicken Teriyaki', image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778471534/Chicken_Teriyaki_vdfqkp.jpg' },

  ],
  drinks: [
    { id: 1, name: 'Pandan Coffee', badge: 'Best Seller', image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778471640/Pandan_Coffee_t8yohh.jpg' },
    { id: 2, name: 'Americano', image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778471639/Americano_cd5u4a.jpg' },
    { id: 3, name: 'Ice Capucino', image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778471639/Ice_Cappucino_jnnvnk.jpg' },
    { id: 4, name: 'Hot Capucino', badge: 'Popular', image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778471638/Hot_Cappucino_pn5jcd.jpg' },
    { id: 5, name: 'Wafer Shake', badge: 'Popular', image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778471560/Wafer_Shake_indsho.jpg' },
    { id: 6, name: 'Oreo Shake',  image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778471555/Oreo_Shake_raqkga.jpg' },
    { id: 7, name: 'Magnum Milkshake', image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778471546/Magnum_Milkshake_wxlcli.jpg' },
    { id: 8, name: 'Strauberry Juice', image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778471540/Strawberry_Juice_ks4exz.jpg'},
    { id: 9, name: 'Strauberry Smoothies', image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778471540/Strawberry_Smoothies_sdlr2e.jpg'},
    { id: 10, name: 'Mango Smoothies', image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778471539/Mango_Smoothies_lf4vgr.jpg'},
    { id: 11, name: 'Avocado Juice', image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778471538/Avocado_Juice_ihdq2y.jpg'},
    { id: 12, name: 'Soursop Juice', image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778471538/Soursop_Juice_io5uhs.jpg'},
    { id: 13, name: 'Fresh Orange', image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778471537/Fresh_Orange_b8d8er.jpg'},
    { id: 14, name: 'Ice Lemon Tea', image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778471535/Ice_Lemon_Tea_wmhmf8.jpg'},
    { id: 15, name: 'Lemon Mint Mojito', image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778471534/Lemon_Mint_Mojito_xwxfnt.jpg'},
  ]
}

// Flatten all items for "All" category
const allMenuItems = [
  ...menuItems.makanan,
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
                    <div className="aspect-square overflow-hidden relative">
                      {item.badge && (
                        <span className="absolute top-3 left-3 z-10 bg-primary-100 text-primary-600 text-xs font-semibold px-2 py-0.5 rounded-[5px]">
                          {item.badge}
                        </span>
                      )}
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-bold text-secondary-900 text-sm">{item.name}</h3>
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