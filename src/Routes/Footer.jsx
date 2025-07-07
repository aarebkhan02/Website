import React from 'react';
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#0F3D3E] to-[#14532d] text-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Store Name */}
          <div>
            <h3 className="text-3xl font-extrabold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
              AM Store
            </h3>
            <p className="text-sm text-gray-200">
              Bringing elegance and quality to your doorstep.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>

            <div className="mb-3 flex items-center gap-3">
              <FaWhatsapp className="text-xl" />
              <a href="#" className="hover:underline">
                WhatsApp: +91-1234567890
              </a>
            </div>

            <div className="mb-3 flex items-center gap-3">
              <FaEnvelope className="text-xl" />
              <a href="mailto:contact@amstore.com" className="hover:underline">
                Email: contact@amstore.com
              </a>
            </div>

            <div className="mb-3 flex items-center gap-3">
              <FaInstagram className="text-xl" />
              <a href="#" className="hover:underline">
                Instagram: @amstore
              </a>
            </div>

            <div className="mb-3 flex items-center gap-3">
              <BsFillTelephoneFill className="text-xl" />
              <a href="tel:+911234567890" className="hover:underline">
                Phone: +91-1234567890
              </a>
            </div>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Registered Office</h4>
            <p>123, Elegant Street</p>
            <p>New Delhi, India</p>
            <p>Pin Code: 110001</p>
          </div>

        </div>

        <hr className="my-8 border-gray-500" />

        <div className="text-center text-sm text-gray-300">
          <p>{new Date().getFullYear()} AM Store. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
