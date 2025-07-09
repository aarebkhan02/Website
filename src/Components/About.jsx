import Footer from '../Routes/Footer';
import Navbar from '../Routes/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className='bg-[#F4F7F5]'>
      <Navbar />
      <div className='mt-20'></div>

      {/* Section 1: Our Story */}
      <section className="py-14 px-4 sm:px-6">
        <div className='max-w-7xl mx-auto'>
          <h1
            className='text-center text-3xl sm:text-4xl md:text-5xl font-extrabold mb-10 text-[#0F3D3E]'
            data-aos="fade"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Our Story
          </h1>

          <div className='flex flex-col md:flex-row items-center gap-10'>
            <div
              className='w-full md:w-1/2 bg-gradient-to-br from-[#0F3D3E] to-[#14532d] p-6 md:p-8 rounded-3xl shadow-2xl'
              data-aos="fade-right"
            >
              <p
                className='text-base sm:text-lg md:text-xl text-[#E8F5E9] leading-relaxed'
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis tempore numquam
                excepturi architecto pariatur similique commodi deleniti eius consectetur corrupti
                dignissimos repudiandae ea quis quia officiis, doloremque minima maxime? Facilis.
              </p>
            </div>

            <div className='w-full md:w-1/2 flex justify-center' data-aos="fade-left">
              <div className="w-full max-w-md h-[250px] sm:h-[300px] bg-[#D1FAE5] rounded-3xl shadow-2xl flex items-center justify-center text-[#0F3D3E] text-xl sm:text-2xl font-semibold">
                Image
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: About */}
      <section className="py-14 px-4 sm:px-6">
        <div className='max-w-7xl mx-auto'>
          <h1
            className='text-center text-3xl sm:text-4xl md:text-5xl font-extrabold mb-10 text-[#0F3D3E]'
            data-aos="fade"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            About
          </h1>

          <div className='flex flex-col md:flex-row items-center gap-10'>
            <div className='w-full md:w-1/2 flex justify-center' data-aos="fade-right">
              <div className="w-full max-w-md h-[250px] sm:h-[300px] bg-[#D1FAE5] rounded-3xl shadow-2xl flex items-center justify-center text-[#0F3D3E] text-xl sm:text-2xl font-semibold">
                Image
              </div>
            </div>
            <div
              className='w-full md:w-1/2 bg-gradient-to-br from-[#14532d] to-[#0F3D3E] p-6 md:p-8 rounded-3xl shadow-2xl'
              data-aos="fade-left"
            >
              <p
                className='text-base sm:text-lg md:text-xl leading-relaxed text-[#E8F5E9]'
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate odit voluptatum
                veniam accusamus quia quidem, inventore autem iste iusto corrupti, vel dolore natus
                libero. Perferendis temporibus quo nostrum adipisci dolor!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Events */}
      <section className="py-14 px-4 sm:px-6">
        <div className='max-w-7xl mx-auto'>
          <h1
            className='text-center text-3xl sm:text-4xl md:text-5xl font-extrabold mb-10 text-[#0F3D3E]'
            data-aos="fade"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Events
          </h1>

          <div className='flex flex-col md:flex-row items-center gap-10'>
            <div
              className='w-full md:w-1/2 bg-gradient-to-br from-[#0F3D3E] to-[#14532d] p-6 md:p-8 rounded-3xl shadow-2xl'
              data-aos="fade-right"
            >
              <p
                className='text-base sm:text-lg md:text-xl leading-relaxed text-[#E8F5E9]'
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sint quo voluptas,
                aliquid soluta expedita? Deserunt ipsa necessitatibus iusto? Exercitationem modi
                atque velit, accusantium corporis tempora rerum odit totam ratione?
              </p>
            </div>

            <div className='w-full md:w-1/2 flex justify-center' data-aos="fade-left">
              <div className="w-full max-w-md h-[250px] sm:h-[300px] bg-[#D1FAE5] rounded-3xl shadow-2xl flex items-center justify-center text-[#0F3D3E] text-xl sm:text-2xl font-semibold">
                Image
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Message */}
      <div className='text-center px-4 sm:px-6 my-14 font-bold text-lg sm:text-xl md:text-[22px] leading-relaxed text-[#0F3D3E]'>
        <h4 style={{ fontFamily: 'Playfair Display, serif' }}>
          Thank you for being part of <span className='text-emerald-700'>AM Store</span>.<br />
          We're committed to bringing you elegant fashion and unforgettable cultural experiences.
        </h4>
      </div>

      {/* Footer */}
      <section id='contact'>
        <Footer />
      </section>
    </div>
  );
}
