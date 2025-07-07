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
      <section className="py-14">
        <div className='container max-w-7xl mx-auto px-4'>
          <h1
            className='text-center text-5xl font-extrabold mb-12 text-[#0F3D3E]'
            data-aos="fade"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Our Story
          </h1>

          <div className='flex flex-col md:flex-row items-center gap-10'>
            <div
              className='md:w-1/2 bg-gradient-to-br from-[#0F3D3E] to-[#14532d] p-8 rounded-3xl shadow-2xl'
              data-aos="fade-right"
            >
              <p
                className='text-[20px] text-[#E8F5E9] leading-relaxed'
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis tempore numquam excepturi architecto pariatur similique commodi deleniti eius consectetur corrupti dignissimos repudiandae ea quis quia officiis, doloremque minima maxime? Facilis.
                Sit harum officiis magni vel nemo, illum amet doloribus voluptatibus numquam fugit ea id iusto distinctio? Nihil fuga esse eveniet! Et assumenda eum dolores maxime veniam dolorem nihil ipsa ea.
                Commodi placeat, voluptatem nemo quas corporis magni possimus vero hic voluptas corrupti saepe fuga neque incidunt repellendus consequatur perferendis ipsam quisquam soluta sequi. Culpa quisquam dignissimos repellendus. Error, veritatis sit.
              </p>
            </div>

            <div className='md:w-1/2 flex justify-center' data-aos="fade-left">
              <div className="w-[90%] h-[300px] bg-[#D1FAE5] rounded-3xl shadow-2xl flex items-center justify-center text-[#0F3D3E] text-2xl font-semibold">
                Image
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-14">
        <div className='container max-w-7xl mx-auto px-4'>
          <h1
            className='text-center text-5xl font-extrabold mb-12 text-[#0F3D3E]'
            data-aos="fade"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            About
          </h1>

          <div className='flex flex-col md:flex-row items-center gap-10'>
            <div className='md:w-1/2 flex justify-center' data-aos="fade-right">
              <div className="w-[90%] h-[300px] bg-[#D1FAE5] rounded-3xl shadow-2xl flex items-center justify-center text-[#0F3D3E] text-2xl font-semibold">
                Image
              </div>
            </div>
            <div
              className='md:w-2/3 bg-gradient-to-br from-[#14532d] to-[#0F3D3E] p-8 rounded-3xl shadow-2xl'
              data-aos="fade-left"
            >
              <p
                className='text-[20px] leading-relaxed text-[#E8F5E9]'
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate odit voluptatum veniam accusamus quia quidem, inventore autem iste iusto corrupti, vel dolore natus libero. Perferendis temporibus quo nostrum adipisci dolor!
                Molestiae animi architecto dolor adipisci eum corrupti repellendus consequuntur aspernatur accusantium cumque voluptas facere excepturi vero, nam atque provident? Animi consectetur obcaecati quam minima sint reprehenderit! Iusto veritatis rem aliquam.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Events */}
      <section className="py-14">
        <div className='container max-w-7xl mx-auto px-4'>
          <h1
            className='text-center text-5xl font-extrabold mb-12 text-[#0F3D3E]'
            data-aos="fade"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Events
          </h1>

          <div className='flex flex-col md:flex-row items-center gap-10'>
            <div
              className='md:w-1/2 bg-gradient-to-br from-[#0F3D3E] to-[#14532d] p-8 rounded-3xl shadow-2xl'
              data-aos="fade-right"
            >
              <p
                className='text-[20px] leading-relaxed text-[#E8F5E9]'
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sint quo voluptas, aliquid soluta expedita? Deserunt ipsa necessitatibus iusto? Exercitationem modi atque velit, accusantium corporis tempora rerum odit totam ratione?
                Voluptatum dolor sed quidem, mollitia asperiores est cumque quis voluptatem sapiente cupiditate deserunt illum aspernatur eius, veritatis nobis architecto. Minima cum quo sapiente neque nobis ducimus debitis earum ab alias.
                Nobis cupiditate aut accusantium, architecto, blanditiis fuga alias maxime dolor iure doloribus mollitia obcaecati corrupti dolore ex veniam dolores delectus repellendus, beatae quaerat hic. Corporis ab deleniti odit sequi veniam.
              </p>
            </div>
            <div className='md:w-1/2 flex justify-center' data-aos="fade-left">
              <div className="w-[90%] h-[300px] bg-[#D1FAE5] rounded-3xl shadow-2xl flex items-center justify-center text-[#0F3D3E] text-2xl font-semibold">
                Image
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Message */}
      <div className='text-center px-4 md:px-0 my-14 font-bold text-[22px] leading-relaxed text-[#0F3D3E]'>
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
