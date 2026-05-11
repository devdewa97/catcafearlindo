import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const socialLinks = [
  { name: 'Instagram', href: '#' },
  { name: 'Facebook', href: '#' },
  { name: 'TikTok', href: '#' },
]

const quickLinks = [
  { name: 'About Us', path: '/about' },
  { name: 'Menu', path: '/menu' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Reservation', path: '/reservation' },
]

const foodDeliveryLinks = [
  { name: 'Grab Food', href: 'https://r.grab.com/g/6-20260423_143348_b80ae82be8e04574b79b7e3d393ee328_MEXMPS-6-C7MADADVLEVXGN', logo: 'https://res.cloudinary.com/dmdl9p7do/image/upload/v1777007729/grepud_zwzbl9.png' },
  { name: 'Shopee Food', href: 'https://shopee.co.id/universal-link/now-food/shop/22384866?deep_and_deferred=1&shareChannel=copy_link', logo: 'https://res.cloudinary.com/dmdl9p7do/image/upload/v1777007729/sopipod_qfifme.png' },
  { name: 'Go Food', href: 'https://gofood.link/a/RfCvW9Y', logo: 'https://res.cloudinary.com/dmdl9p7do/image/upload/v1777007729/Gopud_i3ajv1.png' },
]

export default function Footer() {
  return (
    <footer className="bg-secondary-900 text-secondary-100">
      <div className="py-10 md:py-14 bg-pattern">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            <div className="lg:col-span-1">
              <Link to="/" className="inline-block mb-4">
                <img
                  src="https://medivacare.com/wp-content/uploads/2026/04/LOGO-WEB-CAFE-ARLINDO-FOOTER.png"
                  alt="Cat Cafe Logo"
                  className="h-20 md:h-24 w-auto object-contain"
                />
              </Link>
              <p className="text-secondary-300 mb-6 text-sm md:text-base leading-relaxed">
                Tempat sempurna untuk bersantai sambil menikmati kopi berkualitas dan bermain dengan kucing-kucing menggemaskan.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-9 h-9 md:w-10 md:h-10 bg-secondary-800 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors"
                    aria-label={social.name}
                  >
                    {social.name === 'Instagram' && (
                      <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    )}
                    {social.name === 'Facebook' && (
                      <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.637H7.078v-3.609h3.054V9.463c0-3.099 1.894-4.888 4.683-4.888 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.795.715-1.795 1.761v2.286h3.859l-.986 3.609h-2.873v8.737c5.736-.9 10.124-5.864 10.124-11.854z"/>
                      </svg>
                    )}
                    {social.name === 'TikTok' && (
                      <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                      </svg>
                    )}
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-white text-lg mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-secondary-300 hover:text-primary-400 transition-colors text-sm md:text-base">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Food Delivery Links - Icon Placeholders */}
              <div className="mt-6">
                <h4 className="font-bold text-white text-base mb-3">Pesan Makanan</h4>
                <div className="flex gap-3 items-center">
                  {foodDeliveryLinks.map((food) => (
                    <motion.a
                      key={food.name}
                      href={food.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 md:w-14 md:h-14 bg-white/10 flex items-center justify-center hover:bg-primary-500/30 transition-colors"
                      aria-label={food.name}
                    >
                      <img
                        src={food.logo}
                        alt={food.name}
                        className="w-full h-full object-contain p-1"
                      />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-white text-lg mb-4">Jam Operasional</h4>
              <ul className="space-y-2 text-secondary-300 text-sm md:text-base">
                <li className="flex justify-between"><span>Senin - Jumat</span><span>10:00 - 21:00</span></li>
                <li className="flex justify-between"><span>Sabtu - Minggu</span><span>09:00 - 22:00</span></li>
                <li className="flex justify-between"><span>Hari Libur</span><span>09:00 - 20:00</span></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white text-lg mb-4">Kontak</h4>
              <ul className="space-y-3 text-secondary-300 text-sm md:text-base">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Jl. Citra Grand Cibubur CBD No.35 & 36 BLOK FR 01, Jatirangga, Kec. Jatisampurna, Kota Bks, Jawa Barat 17435</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 flex-shrink-0 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>0814-1242-8997</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 flex-shrink-0 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>catcafebyarlindo@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-secondary-800">
        <div className="container-custom py-6">
          <div className="text-center">
            <p className="text-secondary-400 text-sm">
              © 2026 Cat Cafe by Arlindo. Semua konten dilindungi Undang-Undang.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}