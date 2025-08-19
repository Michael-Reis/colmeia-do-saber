"use client"
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa"

export function FooterSocial() {
    return (
        <div className="flex gap-4">
            <FaFacebookF size={20} className="cursor-pointer"/>
            <FaInstagram size={20} className="cursor-pointer"/>
            <FaWhatsapp size={20} className="cursor-pointer"/>
        </div>
    )
}
