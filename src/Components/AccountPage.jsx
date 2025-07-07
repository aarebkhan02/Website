import React, { useState } from "react";
import { FaUserCircle, FaEdit, FaTrash, FaPlus } from "react-icons/fa";

const AccountPage = () => {
    const [profile, setProfile] = useState({
        name: "John Doe",
        email: "johndoe@example.com",
        phone: "+91 9876543210",
        image: "", // You can use a placeholder image URL if needed
    });

    const [addresses, setAddresses] = useState([
        {
            street: "123 Green Avenue",
            city: "Mumbai",
            state: "Maharashtra",
            zip: "400001",
        },
        {
            street: "456 Market Road",
            city: "Bangalore",
            state: "Karnataka",
            zip: "560001",
        },
    ]);

    const [newAddress, setNewAddress] = useState({
        street: "",
        city: "",
        state: "",
        zip: "",
    });

    const [editing, setEditing] = useState(false);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onloadend = () => {
            setProfile({ ...profile, image: reader.result });
        };
        reader.readAsDataURL(file);
    };

    const handleAddressAdd = () => {
        if (newAddress.street && newAddress.city && newAddress.state && newAddress.zip) {
            setAddresses([...addresses, newAddress]);
            setNewAddress({ street: "", city: "", state: "", zip: "" });
        }
    };

    const handleAddressDelete = (index) => {
        const updated = addresses.filter((_, i) => i !== index);
        setAddresses(updated);
    };

    const handleProfileUpdate = (e) => {
        e.preventDefault();
        setEditing(false);
    };

    return (
        <div className="max-w-6xl mx-auto px-6 py-12 font-sans">
            <h1 className="text-5xl font-extrabold text-[#0F3D3E] mb-12 text-center tracking-tight">
                My Account
            </h1>

            {/* Profile Card */}
            <div className="bg-white rounded-3xl p-10 mb-12 shadow-2xl border border-[#e2e8f0]">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    {profile.image ? (
                        <img
                            src={profile.image}
                            alt="Profile"
                            className="w-40 h-40 rounded-full object-cover border-4 border-[#14532d] shadow-lg"
                        />
                    ) : (
                        <FaUserCircle className="text-8xl text-[#14532d]" />
                    )}
                    <div className="flex-1 w-full">
                        {editing ? (
                            <form onSubmit={handleProfileUpdate} className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#14532d]"
                                    value={profile.name}
                                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#14532d]"
                                    value={profile.email}
                                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                                />
                                <input
                                    type="text"
                                    placeholder="Phone"
                                    className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#14532d]"
                                    value={profile.phone}
                                    onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                                />
                                <div className="flex items-center gap-4">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                        className="text-sm"
                                    />
                                    <button
                                        type="submit"
                                        className="bg-[#14532d] text-white px-6 py-2 rounded-xl hover:bg-[#0F3D3E] transition shadow"
                                    >
                                        Save
                                    </button>
                                </div>
                            </form>
                        ) : (
                            <>
                                <h2 className="text-2xl font-semibold text-[#0F3D3E]">
                                    {profile.name}
                                </h2>
                                <p className="text-[#14532d]">{profile.email}</p>
                                <p className="text-[#14532d]">{profile.phone}</p>
                                <button
                                    onClick={() => setEditing(true)}
                                    className="mt-2 text-[#14532d] flex items-center gap-1 hover:underline"
                                >
                                    <FaEdit /> Edit Profile
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>

            {/* Address Section */}
            <div className="bg-white rounded-3xl p-10 shadow-2xl border border-[#e2e8f0]">
                <h2 className="text-3xl font-bold text-[#0F3D3E] mb-6 flex items-center gap-3">
                    <FaUserCircle /> Address Book
                </h2>
                <div className="space-y-4 mb-6">
                    {addresses.map((addr, i) => (
                        <div
                            key={i}
                            className="bg-[#F8FAF9] p-5 rounded-xl flex justify-between items-start gap-4 shadow-sm border border-gray-200"
                        >
                            <div>
                                <p className="font-semibold text-[#0F3D3E]">{addr.street}, {addr.city}</p>
                                <p className="text-[#14532d]">{addr.state}, {addr.zip}</p>
                            </div>
                            <button
                                onClick={() => handleAddressDelete(i)}
                                className="text-red-600 hover:text-red-800"
                            >
                                <FaTrash />
                            </button>
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input
                        type="text"
                        placeholder="Street Address"
                        className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#14532d]"
                        value={newAddress.street}
                        onChange={(e) => setNewAddress({ ...newAddress, street: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="City"
                        className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#14532d]"
                        value={newAddress.city}
                        onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="State"
                        className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#14532d]"
                        value={newAddress.state}
                        onChange={(e) => setNewAddress({ ...newAddress, state: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Zip Code"
                        className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#14532d]"
                        value={newAddress.zip}
                        onChange={(e) => setNewAddress({ ...newAddress, zip: e.target.value })}
                    />
                </div>
                <button
                    onClick={handleAddressAdd}
                    className="bg-[#14532d] text-white px-8 py-3 rounded-xl flex items-center gap-3 hover:bg-[#0F3D3E] transition shadow"
                >
                    <FaPlus /> Add Address
                </button>
            </div>
        </div>
    );
};

export default AccountPage;
