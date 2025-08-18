import { FaWhatsapp } from "react-icons/fa"

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/551145655210"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors z-50"
      aria-label="Contato via WhatsApp"
    >
      <FaWhatsapp className="w-6 h-6" />
    </a>
  )
}
