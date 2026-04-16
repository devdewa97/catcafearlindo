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
  { id: 1, src: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600', alt: 'Persian Cat', category: 'cats' },
  { id: 2, src: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=600', alt: 'Scottish Fold', category: 'cats' },
  { id: 3, src: 'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=600', alt: 'British Shorthair', category: 'cats' },
  { id: 4, src: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=600', alt: 'Orange Tabby', category: 'cats' },
  { id: 5, src: 'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=600', alt: 'Cat Playing', category: 'cats' },
  { id: 6, src: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600', alt: 'Cafe Interior', category: 'interior' },
  { id: 7, src: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=600', alt: 'Cat Sleeping', category: 'cats' },
  { id: 8, src: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=600', alt: 'Cute Cat', category: 'cats' },
  { id: 9, src: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=600', alt: 'White Cat', category: 'cats' },
  { id: 10, src: 'https://images.unsplash.com/photo-1561948955-570b270e7c36?w=600', alt: 'Munchkin Cat', category: 'cats' },
  { id: 11, src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600', alt: 'Cafe Interior 2', category: 'interior' },
  { id: 12, src: 'https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=600', alt: 'Cozy Corner', category: 'interior' },
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
            {filteredImages.slice(0, 12).map((image, index) => (
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