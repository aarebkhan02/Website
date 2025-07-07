import React, { useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Footer from '../Routes/Footer';
import Navbar from '../Routes/Navbar';
import { scroller } from "react-scroll";

export default function Home() {
    const navigate = useNavigate();

    const handleCategoryClick = (category) => {
        navigate("/ProductPage", { state: { selectedCategory: category } });
    };
    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace("#", "");
            scroller.scrollTo(id, {
                duration: 500,
                smooth: true,
                offset: -80,
            });
        }
    }, [location]);

    return (
        <div className="bg-[#F4F7F5]">
            <Navbar />
            <div className="mt-20"></div>

            <section
                id="home"
                className="relative h-[90vh] bg-cover bg-center flex items-center text-white"
                style={{ backgroundImage: "url('/HeroImage.WebP')" }}
            >
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                    <div className="max-w-xl">
                        <h1 className="text-5xl font-extrabold mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                            Welcome to Store
                        </h1>
                        <p className="text-xl leading-relaxed mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            Discover timeless collections curated for elegance, comfort, and confidence.
                        </p>
                        <Link to="/ProductPage">
                            <button className="bg-gradient-to-r from-[#14532d] to-[#0F3D3E] hover:scale-105 transition-transform px-8 py-3 rounded-3xl text-white font-semibold shadow-xl" onClick={() => navigate('/ProductPage')}>
                                Explore Collections
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            <section id="categories" className="py-20">
                <h1 className="text-center text-5xl font-extrabold mb-16 text-[#0F3D3E]" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Our Categories
                </h1>


                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                    {["Clothes", "Sneakers", "Fashion", "Topwear"].map((category) => (
                        <div
                            key={category}
                            className="bg-gradient-to-br from-[#0F3D3E] to-[#14532d] rounded-3xl shadow-xl overflow-hidden hover:scale-105 transition-all cursor-pointer"
                            onClick={() => handleCategoryClick(category)}
                        >
                            <div className="h-[230px] bg-[#D1FAE5] flex items-center justify-center">
                                <img
                                    src={`/${category}.WebP`}
                                    alt={category}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>



            </section>

            <section id="featured" className="py-20 bg-white">
                <h1 className="text-center text-5xl font-extrabold mb-16 text-[#0F3D3E]" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Best Sellers
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {["Shoe1.WebP", "Clothes1.WebP", "Jacket.WebP"].map((item, index) => (
                        <div
                            key={item}
                            className="bg-[#F4F7F5] shadow-xl overflow-hidden rounded-3xl hover:scale-105 transition"
                        >
                            <div className="h-[260px] bg-[#D1FAE5] flex items-center justify-center">
                                <img
                                    src={`/${item}`}
                                    alt={`Featured product ${index + 1}`}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h2 className="text-2xl font-semibold text-[#0F3D3E] mb-2">Elegant XYZ {item.replace('.jpg', '')}</h2>
                                <p className="text-[#14532d] mb-4">Comfortable, adorable, and timeless design.</p>
                                <button className="bg-gradient-to-r from-[#14532d] to-[#0F3D3E] px-6 py-2 rounded-2xl text-white">
                                    Shop Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h1
                        className="text-center text-4xl md:text-5xl font-extrabold mb-16 text-[#0F3D3E]"
                        style={{ fontFamily: "Playfair Display, serif" }}
                    >
                        Special Product
                    </h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            {
                                img: "/Clothes1.WebP",
                                title: "Product Name",
                                price: "$60.00 - $90.00",
                            },
                            {
                                img: "/Topwear.WebP",
                                title: "Product Name",
                                price: "$80.00 - $120.00",
                            },
                            {
                                img: "/Shoe1.WebP",
                                title: "Product Name",
                                price: "$170.00 - $200.00",
                            },
                            {
                                img: "/Fashion.WebP",
                                title: "Product Name",
                                price: "$60.00 - $90.00",
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="bg-white border border-[#E2E8F0] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                            >
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-[260px] object-cover rounded-t-2xl"
                                />
                                <div className="p-5">
                                    <div className="flex items-center gap-1 text-yellow-400 mb-2">
                                        {[...Array(5)].map((_, star) => (
                                            <svg
                                                key={star}
                                                className="w-5 h-5 fill-current"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.004 3.096a1 1 0 00.95.69h3.25c.969 0 1.371 1.24.588 1.81l-2.63 1.91a1 1 0 00-.364 1.118l1.004 3.096c.3.921-.755 1.688-1.538 1.118l-2.63-1.91a1 1 0 00-1.175 0l-2.63 1.91c-.783.57-1.838-.197-1.538-1.118l1.004-3.096a1 1 0 00-.364-1.118L2.27 8.523c-.783-.57-.38-1.81.588-1.81h3.25a1 1 0 00.95-.69l1.004-3.096z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <h3 className="text-lg font-bold text-[#0F3D3E] mb-1">
                                        {item.title}
                                    </h3>
                                    <p className="text-[#14532d]">{item.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="about" className="py-20">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
                    <div className="md:w-1/2">
                        <h1 className="text-5xl font-extrabold mb-8 text-[#0F3D3E]" style={{ fontFamily: 'Playfair Display, serif' }}>
                            Our Story
                        </h1>
                        <p className="text-[21px] leading-relaxed text-[#14532d]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad omnis quam asperiores nobis inventore, ea nemo eaque ratione aperiam odit et deleniti nesciunt maiores quas officia dolorum molestias ut! Velit!
                        </p>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <img src="/HeroImage.WebP" alt="" className="w-[90%] h-[380px] bg-[#D1FAE5] rounded-3xl shadow-2xl" />
                    </div>
                </div>
            </section>

            <section id="testimonials" className="py-20 bg-white">
                <h1 className="text-center text-5xl font-extrabold mb-16 text-[#0F3D3E]" style={{ fontFamily: 'Playfair Display, serif' }}>
                    What Our Customers Say
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {["Beautiful quality!", "Fast delivery and gorgeous styles.", "Feels elegant and comfortable."].map((review, i) => (
                        <div
                            key={i}
                            className="bg-[#F4F7F5] p-7 rounded-3xl shadow-xl hover:scale-[1.02] transition-transform"
                        >
                            <p className="text-[#14532d] text-lg mb-4">"{review}"</p>
                            <div className="font-bold text-[#0F3D3E]">- Customer {i + 1}</div>
                        </div>
                    ))}
                </div>
            </section>

            <section id='contact'  >
                <Footer />
            </section>
        </div>
    );
}
