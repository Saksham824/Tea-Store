'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const chaiMenu = [
  {
    name: 'Masala Chai',
    image: 'https://www.thespicehouse.com/cdn/shop/articles/Chai_Masala_Tea_1200x1200.jpg?v=1606936195',
    
  },
  {
    name: 'Elaichi Chai',
    image: 'https://shiatea.com/cdn/shop/files/cardamomchai9.jpg?v=1706084387&width=1445',
   
  },
  {
    name: 'Adrak Chai',
    image: 'https://budleaf.com/wp-content/uploads/2023/08/Adrak-masala-chai-scaled.jpeg',
    
  },
  {
    name: 'Kesar Chai',
    image: 'https://www.livehindustan.com/lh-img/uploadimage/library/2022/12/17/16_9/16_9_6/kesar_ki_chai_recipe_1671280489.jpg',
    
  },
];

const loadRazorpay = async (chai) => {
  const res = await fetch('/api/payment', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: chai.name,
      amount: chai.price * 100,
    }),
  });

  const data = await res.json();

  const options = {
    key: 'YOUR_RAZORPAY_KEY_ID',
    amount: data.amount,
    currency: 'INR',
    name: 'Get Me A Chai',
    description: chai.name,
    image: 'https://i.imgur.com/LXl8LRG.png',
    order_id: data.id,
    handler: (response) => {
      alert('Payment Successful 🎉');
      console.log(response);
    },
    prefill: {
      name: 'Chai Lover',
      email: 'user@example.com',
      contact: '9000090000',
    },
    theme: { color: '#f97316' },
  };

  const razor = new window.Razorpay(options);
  razor.open();
};

const Username = ({ params }) => {
  const username = params.username;

  return (
    <>

    <motion.div
      key="username"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="mt-5 mb-5 rounded-2xl bg-gradient-to-br from-blue-950 via-gray-950 to-gray-900 text-white px-4 sm:px-6 lg:px-10 py-10 min-h-screen"
    >
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3">
          Welcome from {username}, Buy your chai and show some love to the developer! 🍵
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-300">
          Every sip you enjoy helps us brew more features. Thank you for being part of the journey! 💛
        </p>
      </div>

      {/* Chai Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {chaiMenu.map((chai, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl shadow-md hover:scale-105 transition overflow-hidden"
          >
            <img
              src={chai.image}
              alt={chai.name}
              className="w-full h-48 sm:h-44 md:h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg text-center mb-5 sm:text-xl font-semibold text-white">{chai.name}</h3>
              
              <Link
              href={'/buy'}
                onClick={() => loadRazorpay(chai)}
                className="px-4 flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-full text-sm font-medium"
              >
                Buy Now
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Why Us Section */}
      <div className="max-w-3xl mx-auto text-center mt-16 bg-white/5 rounded-xl px-6 py-8 shadow-xl backdrop-blur-md">
        <h2 className="text-2xl font-bold text-white mb-4">Why Get Chai From Us?</h2>
        <ul className="text-gray-300 space-y-2">
          <li>🌿 100% natural ingredients with authentic Indian flavors</li>
          <li>🚚 Fast delivery and contactless experience</li>
          <li>💳 Secure online payments & wallet-friendly pricing</li>
          <li>🧡 Made with love, served with care</li>
        </ul>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-10">
        <Link
          href="/shop"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg"
        >
          Explore Full Menu
        </Link>
      </div>

      {/* Socials */}
      <div className="mt-12 flex justify-center gap-6 text-white text-2xl">
        <Link
          href="https://github.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <FaGithub />
        </Link>
        <Link
          href="https://linkedin.com/in/your-username"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          <FaLinkedin />
        </Link>
        <Link
          href="https://twitter.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-sky-400"
        >
          <FaTwitter />
        </Link>
      </div>

      {/* Thank You Message */}
      <div className="max-w-3xl mx-auto mb-10 text-center mt-16 bg-white/5 rounded-xl px-6 py-8 shadow-xl backdrop-blur-md">
        <h2 className="text-2xl font-bold text-white mb-4">Thanks for supporting {username} 🙏</h2>
        <p className="text-gray-300 mb-2">
          Your chai purchase means a lot to us — not just as a transaction, but as a shared love for something simple and special. 🍵
        </p>
        <p className="text-gray-300 mb-2">
          Every cup you buy helps us grow, improve the platform, and bring smiles to more chai lovers across the country. 🇮🇳
        </p>
        <p className="text-gray-300 mb-2">
          From the bottom of our hearts, thank you for supporting a small indie developer. You make this dream possible. 💛
        </p>
        <p className="text-gray-300">Stay warm, stay caffeinated, and stay awesome!</p>
      </div>
    </motion.div>
    </>
  );
};

export default Username;
