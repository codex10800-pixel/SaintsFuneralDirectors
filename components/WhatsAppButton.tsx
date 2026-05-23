"use client";
import { FaWhatsapp } from "react-icons/fa"
import { motion } from "framer-motion"

export default function WhatsAppButton() {
  const whatsappNumber = "+27656201771"
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}`

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 group"
    >
      {/* Pulsing background ring */}
      <div className="absolute -inset-2 sm:-inset-3 bg-green-500/20 rounded-full animate-pulse" />
      
      {/* Main button (responsive) */}
      <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center group-hover:from-green-500 group-hover:to-green-700">
        <FaWhatsapp className="text-white w-6 h-6 sm:w-7 sm:h-7" />
      </div>

      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-gray-900 text-white text-xs font-semibold px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
          Chat on WhatsApp
        </div>
        <div className="absolute top-full right-3 w-2 h-2 bg-gray-900 transform rotate-45" />
      </div>
    </motion.a>
  )
}
