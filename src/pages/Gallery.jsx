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

const galleryImages = [
  { id: 1, src: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778485987/Katniss_4_Agustus_2023_British_Short_Hair_Betina_hirdm8.webp', category: 'cats' },
  { id: 2, src: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778485984/Nala_10_September_2022_Domestic_Betina_ipp2nr.webp', category: 'cats' },
  { id: 3, src: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778485982/Kartono_1_Juli_2024_British_Short_Hair_Jantan_xkyigr.webp', category: 'cats' },
  { id: 4, src: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778485980/Shabrina_11_September_2022_British_Short_Hair_Betina_typfva.webp', category: 'cats' },
  { id: 5, src: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778485978/Benito_17_Agustus_2022_British_Short_Hair_Jantan_tlpntx.webp', category: 'cats' },
  { id: 6, src: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778485976/Molly_26_Maret_2024_Persia_Peaknose_Longhair_Betina_wrodb8.webp', category: 'cats' },
  { id: 7, src: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778485973/Nemo_15_Januari_2022_Domestic_Jantan_e3tjgk.webp', category: 'cats' },
  { id: 8, src: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778485971/Junior_16_Februari_2024_Persia_Peaknose_Longhair_Jantan_rav7or.webp', category: 'cats' },
  { id: 9, src: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778485969/Hugo_9_Januari_2023_British_Short_Hair_Jantan_cpc1mn.webp', category: 'cats' },
  { id: 10, src: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778485967/Hilya_Persia_Peaknose_Longhair_Betina_og7fdq.webp', category: 'cats' },
  { id: 11, src: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778485965/Chanakya_Puspa_6_Februari_2023_Exotic_ShortHair_Peaknose_Betina_rss4it.webp', category: 'cats' },
  { id: 12, src: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778485963/Boni_10_Desember_2016_Dom_Mix_Persia_Persia_Medium__Betina_rxxlwf.webp', category: 'cats' },
  { id: 13, src: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778485961/Xavia_16_Maret_2024_Persia_Peaknose_Longhair_Betina_ligniq.webp', category: 'cats' },
  { id: 14, src: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778485959/Sadiya_5_Mei_2024_British_Short_Hair_Betina_sjylws.webp', category: 'cats' },
  { id: 15, src: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778485957/Princes_7_Juni_2025_Ragdoll_Betina_htyffp.webp', category: 'cats' },
  { id: 16, src: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778485954/Prince_10_Agustus_2025_Ragdoll_Jantan_omnzlb.webp', category: 'cats' },
  { id: 17, src: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778485952/Olivia_27_April_2018_Persia_Peaknose_Longhair_Betina_dphhpb.webp', category: 'cats' },
  { id: 18, src: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778485950/Milo_30_Juni_2019_Persia_Peaknose_Longhair_Jantan_hfo2pd.webp', category: 'cats' },
  { id: 19, src: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778485948/Milea_Persia_Peaknose_Longhair_Betina_qywgqz.webp', category: 'cats' },
  { id: 20, src: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778485946/Kiko_Persia_Peaknose_Longhair_Jantan_pnsri0.webp', category: 'cats' },
  { id: 21, src: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778485944/Goldie_6_Desember_2024_Scottish_Fold_Betina_bidon5.webp', category: 'cats' },
  { id: 22, src: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778485942/Garfield_18_April_2025_Maincone_Jantan_f5gye9.webp', category: 'cats' },
  { id: 23, src: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778485940/Zoe_Snowy_29_Maret_2025_Maincone_Betina_fd5rrv.webp', category: 'cats' },
  { id: 24, src: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778485939/Fla_26_Oktober_2024_British_Short_Hair_Jantan_jpticf.webp', category: 'cats' },
  { id: 25, src: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778485937/Beruang_7_September_2025_Himalaya_Jantan_hsbxmh.webp', category: 'cats' },
  { id: 26, src: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778490833/IMG_2019_n8hzvf.webp', category: 'interior' },
  { id: 27, src: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778490831/IMG_2024_jfuoaw.webp', category: 'interior' },
  { id: 28, src: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778490829/IMG_2021_hxwckj.webp', category: 'interior' },
  { id: 29, src: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778490826/IMG_3075_bp26qb.webp', category: 'interior' },
  { id: 30, src: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778490825/IMG_3078_mhjpse.webp', category: 'interior' },
  { id: 31, src: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778490825/IMG_3076_fohmyf.webp', category: 'interior' },
]

const filters = [
  { id: 'all', name: 'All Photos' },
  { id: 'cats', name: 'Kucing' },
  { id: 'interior', name: 'Interior' },
]

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)

  const filteredImages = activeFilter === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeFilter)

  return (
    <div>
      <section className="relative pt-24 pb-12 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-center">
            <motion.p variants={fadeInUp} className="text-primary-500 font-medium mb-4">Gallery</motion.p>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">Galeri <span className="text-primary-500">Foto</span></motion.h1>
            <motion.p variants={fadeInUp} className="text-secondary-600 text-lg max-w-2xl mx-auto">Temukan berbagai momen istimewa bersama kucing-kucing kami, lengkap dengan suasana dan fasilitas cafe yang dirancang untuk kenyamanan Anda.</motion.p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white sticky top-16 z-30 shadow-sm">
        <div className="container-custom py-4">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {filters.map((filter) => (
              <motion.button key={filter.id} onClick={() => setActiveFilter(filter.id)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={`px-4 py-2 text-sm md:px-6 md:py-2 md:text-base rounded-full font-medium whitespace-nowrap transition-all ${activeFilter === filter.id ? 'bg-primary-500 text-white shadow-md' : 'bg-secondary-100 text-secondary-700 hover:bg-primary-50'}`}>
                {filter.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {filteredImages.slice(0, 31).map((image, index) => (
              <motion.div key={image.id} variants={fadeInUp} layout whileHover={{ scale: 1.03 }} onClick={() => setSelectedImage(image)} className="aspect-square overflow-hidden rounded-xl cursor-pointer">
                <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </motion.div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-secondary-500 text-lg">Tidak ada foto dalam kategori ini</p>
            </div>
          )}
        </div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
            <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }} className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setSelectedImage(null)} className="absolute -top-10 right-0 text-white text-sm hover:text-primary-400 transition-colors">Tutup</button>
              <img src={selectedImage.src} alt={selectedImage.alt} className="w-full h-auto max-h-[80vh] object-contain rounded-2xl" />
              <p className="text-white text-center mt-4 text-lg">{selectedImage.alt}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}