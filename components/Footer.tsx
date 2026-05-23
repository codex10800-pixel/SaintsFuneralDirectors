"use client";
import Link from "next/link"
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"

export default function SiteFooter() {
  return (
    <footer className="bg-surface text-muted py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-semibold soft-gold">SAINTS FUNERAL DIRECTORS</h3>
          <p className="mt-3 text-sm">Honouring Lives With Dignity & Compassion. Serving families with care.</p>
        </div>
        <div>
          <h4 className="font-medium">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#" className="hover:text-accent">Home</a></li>
            <li><a href="#plans" className="hover:text-accent">Funeral Plans</a></li>
            <li><a href="#services" className="hover:text-accent">Services</a></li>
            <li><a href="#about" className="hover:text-accent">About Us</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium">Contact</h4>
          <p className="mt-2 text-sm">65 Smith St,<br/>Molteno 5500, Eastern Cape</p>
          <p className="mt-2 text-sm">Tel: <a href="tel:+27656201771" className="text-paper">065 620 1771</a></p>
          <p className="mt-1 text-sm">Customer Care: <a href="tel:+27656201771" className="text-paper">065 620 1771</a></p>
        </div>
        <div>
          <h4 className="font-medium">Follow & Payments</h4>
          <div className="flex gap-3 mt-3 mb-3">
            <a href="#" aria-label="facebook" className="p-2 bg-white/5 rounded"><FaFacebookF/></a>
            <a href="#" aria-label="instagram" className="p-2 bg-white/5 rounded"><FaInstagram/></a>
            <a href="#" aria-label="twitter" className="p-2 bg-white/5 rounded"><FaTwitter/></a>
          </div>
          <div className="mt-2">
            <img src="/amathole/assets/img/payment.png" alt="payments" className="h-8 object-contain" />
          </div>
        </div>
      </div>
      <div className="border-t border-white/3 mt-8 pt-6 text-center text-xs text-muted">
        © {new Date().getFullYear()} Saints Funeral Directors — All rights reserved. <br/>
        Saints Funeral Directors is Underwritten by Vodacom Life Assurance | FSP No: 46450
      </div>
    </footer>
  )
}
