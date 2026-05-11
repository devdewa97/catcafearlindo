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

const cats = [
  {
    id: 1,
    image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778485987/Katniss_4_Agustus_2023_British_Short_Hair_Betina_hirdm8.webp',
    name: 'Katniss',
    birthDate: '4 Agustus 2023',
    breed: 'British Short Hair',
    gender: 'Female'
  },
  {
    id: 2,
    image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778485984/Nala_10_September_2022_Domestic_Betina_ipp2nr.webp',
    name: 'Nala',
    birthDate: '10 September 2022',
    breed: 'Domestic',
    gender: 'Female'
  },
  {
    id: 3,
    image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778485982/Kartono_1_Juli_2024_British_Short_Hair_Jantan_xkyigr.webp',
    name: 'Kartono',
    birthDate: '1 Juli 2024',
    breed: 'British Short Hair',
    gender: 'Male'
  },
  {
    id: 4,
    image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778485980/Shabrina_11_September_2022_British_Short_Hair_Betina_typfva.webp',
    name: 'Shabrina',
    birthDate: '11 September 2022',
    breed: 'British Short Hair',
    gender: 'Female'
  },
  {
    id: 5,
    image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778485978/Benito_17_Agustus_2022_British_Short_Hair_Jantan_tlpntx.webp',
    name: 'Benito',
    birthDate: '17 Agustus 2022',
    breed: 'British Short Hair',
    gender: 'Male'
  },
  {
    id: 6,
    image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778485976/Molly_26_Maret_2024_Persia_Peaknose_Longhair_Betina_wrodb8.webp',
    name: 'Molly',
    birthDate: '26 Maret 2024',
    breed: 'Persia Peaknose Longhair',
    gender: 'Female'
  },
  {
    id: 7,
    image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778485973/Nemo_15_Januari_2022_Domestic_Jantan_e3tjgk.webp',
    name: 'Nemo',
    birthDate: '15 Januari 2022',
    breed: 'Domestic',
    gender: 'Male'
  },
  {
    id: 8,
    image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778485971/Junior_16_Februari_2024_Persia_Peaknose_Longhair_Jantan_rav7or.webp',
    name: 'Junior',
    birthDate: '16 Februari 2024',
    breed: 'Persia Peaknose Longhair',
    gender: 'Male'
  },
  {
    id: 9,
    image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778485969/Hugo_9_Januari_2023_British_Short_Hair_Jantan_cpc1mn.webp',
    name: 'Hugo',
    birthDate: '9 Januari 2023',
    breed: 'British Short Hair',
    gender: 'Male'
  },
  {
    id: 10,
    image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778485967/Hilya_Persia_Peaknose_Longhair_Betina_og7fdq.webp',
    name: 'Hilya',
    birthDate: '—',
    breed: 'Persia Peaknose Longhair',
    gender: 'Female'
  },
  {
    id: 11,
    image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778485965/Chanakya_Puspa_6_Februari_2023_Exotic_ShortHair_Peaknose_Betina_rss4it.webp',
    name: 'Chanakya Puspa',
    birthDate: '6 Februari 2023',
    breed: 'Exotic ShortHair Peaknose',
    gender: 'Female'
  },
  {
    id: 12,
    image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778485963/Boni_10_Desember_2016_Dom_Mix_Persia_Persia_Medium__Betina_rxxlwf.webp',
    name: 'Boni',
    birthDate: '10 Desember 2016',
    breed: 'Persia Medium',
    gender: 'Female'
  },
  {
    id: 13,
    image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778485961/Xavia_16_Maret_2024_Persia_Peaknose_Longhair_Betina_ligniq.webp',
    name: 'Xavia',
    birthDate: '16 Maret 2024',
    breed: 'Persia Peaknose Longhair',
    gender: 'Female'
  },
  {
    id: 14,
    image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778485959/Sadiya_5_Mei_2024_British_Short_Hair_Betina_sjylws.webp',
    name: 'Sadiya',
    birthDate: '5 Mei 2024',
    breed: 'British Short Hair',
    gender: 'Female'
  },
  {
    id: 15,
    image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778485957/Princes_7_Juni_2025_Ragdoll_Betina_htyffp.webp',
    name: 'Princes',
    birthDate: '7 Juni 2025',
    breed: 'Ragdoll',
    gender: 'Female'
  },
  {
    id: 16,
    image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778485954/Prince_10_Agustus_2025_Ragdoll_Jantan_omnzlb.webp',
    name: 'Prince',
    birthDate: '10 Agustus 2025',
    breed: 'Ragdoll',
    gender: 'Male'
  },
  {
    id: 17,
    image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778485952/Olivia_27_April_2018_Persia_Peaknose_Longhair_Betina_dphhpb.webp',
    name: 'Olivia',
    birthDate: '27 April 2018',
    breed: 'Persia Peaknose Longhair',
    gender: 'Female'
  },
  {
    id: 18,
    image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778485950/Milo_30_Juni_2019_Persia_Peaknose_Longhair_Jantan_hfo2pd.webp',
    name: 'Milo',
    birthDate: '30 Juni 2019',
    breed: 'Persia Peaknose Longhair',
    gender: 'Male'
  },
  {
    id: 19,
    image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778485948/Milea_Persia_Peaknose_Longhair_Betina_qywgqz.webp',
    name: 'Milea',
    birthDate: '—',
    breed: 'Persia Peaknose Longhair',
    gender: 'Female'
  },
  {
    id: 20,
    image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778485946/Kiko_Persia_Peaknose_Longhair_Jantan_pnsri0.webp',
    name: 'Kiko',
    birthDate: '—',
    breed: 'Persia Peaknose Longhair',
    gender: 'Male'
  },
  {
    id: 21,
    image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778485944/Goldie_6_Desember_2024_Scottish_Fold_Betina_bidon5.webp',
    name: 'Goldie',
    birthDate: '6 Desember 2024',
    breed: 'Scottish Fold',
    gender: 'Female'
  },
  {
    id: 22,
    image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778485942/Garfield_18_April_2025_Maincone_Jantan_f5gye9.webp',
    name: 'Garfield',
    birthDate: '18 April 2025',
    breed: 'Maincone',
    gender: 'Male'
  },
  {
    id: 23,
    image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778485940/Zoe_Snowy_29_Maret_2025_Maincone_Betina_fd5rrv.webp',
    name: 'Zoe Snowy',
    birthDate: '29 Maret 2025',
    breed: 'Maincone',
    gender: 'Female'
  },
  {
    id: 24,
    image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778485939/Fla_26_Oktober_2024_British_Short_Hair_Jantan_jpticf.webp',
    name: 'Fla',
    birthDate: '26 Oktober 2024',
    breed: 'British Short Hair',
    gender: 'Male'
  },
  {
    id: 25,
    image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778485937/Beruang_7_September_2025_Himalaya_Jantan_hsbxmh.webp',
    name: 'Beruang',
    birthDate: '7 September 2025',
    breed: 'Himalaya',
    gender: 'Male'
  }
]

const interiors = [
  {
    id: 26,
    image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778490833/IMG_2019_n8hzvf.webp',
    title: 'Front View'
  },
  {
    id: 27,
    image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778490831/IMG_2024_jfuoaw.webp',
    title: 'Indoor Lounge'
  },
  {
    id: 28,
    image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778490829/IMG_2021_hxwckj.webp',
    title: 'Cat Friendly Area'
  },
  {
    id: 29,
    image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778490826/IMG_3075_bp26qb.webp',
    title: 'Outdoor Lounge'
  },
  {
    id: 30,
    image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778490825/IMG_3078_mhjpse.webp',
    title: 'Prayer Room'
  },
  {
    id: 31,
    image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/f_auto,q_auto,w_800/v1778490825/IMG_3076_fohmyf.webp',
    title: 'Fun Corner'
  }
]

const filters = [
  { id: 'all', name: 'All Photos' },
  { id: 'cats', name: 'Kucing' },
  { id: 'interior', name: 'Interior' },
]

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredCats = activeFilter === 'all' || activeFilter === 'cats' ? cats : []
  const filteredInteriors = activeFilter === 'all' || activeFilter === 'interior' ? interiors : []

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
          {(() => {
            const catsToRender = filteredCats.slice(0, 31)
            const interiorsToRender = filteredInteriors.slice(0, 31)

            const showCats = activeFilter === 'all' || activeFilter === 'cats'
            const showInteriors = activeFilter === 'all' || activeFilter === 'interior'
            const hasAny = (catsToRender.length > 0) || (interiorsToRender.length > 0)

            if (!hasAny) {
              return (
                <div className="text-center py-20">
                  <p className="text-secondary-500 text-lg">Tidak ada foto dalam kategori ini</p>
                </div>
              )
            }

            return (
              <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {showCats && catsToRender.map((item) => (
                  <motion.article
                    key={item.id}
                    variants={fadeInUp}
                    layout
                    className="group bg-white rounded-2xl shadow-soft overflow-hidden transition-all duration-300 hover:shadow-card hover:-translate-y-1"
                  >
                    <div className="relative aspect-square overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name || 'Foto Kucing'}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03] pointer-events-none select-none"
                        draggable={false}
                      />

                      <div className="absolute top-3 left-3 right-3 flex flex-wrap gap-2 pointer-events-none">
                        <span className="bg-primary-500 text-white text-[10px] md:text-[11px] font-semibold px-2 py-1 rounded-[5px] shadow-sm">
                        {item.breed}
                        </span>
                        <span className="bg-primary-500 text-white text-[10px] md:text-[11px] font-semibold px-2 py-1 rounded-[5px] shadow-sm">
                        {item.gender}
                        </span>
                      </div>
                    </div>

                    <div className="p-3 md:p-4 space-y-1">
                      <h3 className="font-semibold text-secondary-900 text-sm md:text-base">{item.name}</h3>
                      <p className="text-xs md:text-sm text-secondary-600">{item.birthDate}</p>
                    </div>
                  </motion.article>
                ))}

                {showInteriors && interiorsToRender.map((item) => (
                  <motion.article
                    key={item.id}
                    variants={fadeInUp}
                    layout
                    className="bg-white rounded-2xl shadow-soft overflow-hidden transition-all duration-300"
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title || 'Foto Interior'}
                        className="w-full h-full object-cover pointer-events-none select-none"
                        draggable={false}
                      />
                    </div>
                    <div className="p-3 md:p-4">
                      <h3 className="font-semibold text-secondary-900 text-sm md:text-base">{item.title}</h3>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            )
          })()}
        </div>
      </section>
    </div>
  )
}