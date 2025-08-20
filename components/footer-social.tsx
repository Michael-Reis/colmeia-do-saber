"use client"
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa"

export function FooterSocial() {
    return (
        <div className="flex gap-4">
            <FaFacebookF size={20} className="cursor-pointer"/>
            <FaInstagram size={20} className="cursor-pointer" onClick={() => {
                window.open("https://www.instagram.com/colegiocolmeiadosaber/", "_blank");
            }}/>
            <FaWhatsapp size={20} className="cursor-pointer"/>
        </div>
    )
}
