'use client'
import Image from "next/image";
import { ChevronsDown } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";


export default function Home() {
  const router = useRouter();

  const route =()=>{
    router.push('/read')
  }

  
  return (
    <>
      <div className="relative rounded-xl mt-10 w-full bg-gradient-to-b from-blue-950 via-black to-gray-900 py-16">
        <div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 flex flex-col items-center justify-center px-6 text-center"
        >
          <div className="flex flex-col items-center justify-center px-6 text-center mt-16 md:mt-20">
            {/* Heading */}
            <div className="text-4xl md:text-5xl font-extrabold text-gray-100 mb-4 tracking-wide drop-shadow-lg hover:scale-105 transition-transform duration-300">
              Welcome to <span className="text-purple-500">Get Me A Chai</span>
            </div>

            {/* Subheading with GIF */}
            <div className="flex items-center justify-center mb-4">
              <span className="mt-5 text-gray-200 text-2xl font-medium hover:text-yellow-300 transition">
                Buy your favourite chai
              </span>
              <Image
              width={50}
              height={50}
                className=" hover:scale-110 transition duration-300"
                src="/tea.gif"
                alt="Chai GIF"
              />
            </div>

            {/* Description */}
            <div className="text-gray-400 mb-8 text-base md:text-lg max-w-xl leading-relaxed">
              Your favorite chai delivered to your doorstep — freshly brewed, soul-soothing, and just a click away! 🚚 🍵<br />
              <span className="text-yellow-200">Hot sips, happy vibes.</span>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href={'/buy'} className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-semibold text-gray-900 rounded-xl group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-600 group-hover:to-pink-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 shadow-lg transition">
                <span className="relative px-8 py-3 transition-all ease-in duration-150 bg-white dark:bg-gray-900 rounded-lg group-hover:bg-transparent group-hover:dark:bg-transparent">
                  Start Ordering
                </span>
              </Link>

              <button onClick={route} className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-semibold text-gray-900 rounded-xl group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-700 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg transition">
                <span className="relative px-8 py-3 transition-all ease-in duration-150 bg-white dark:bg-gray-900 rounded-lg group-hover:bg-transparent group-hover:dark:bg-transparent">
                  Read More
                </span>
              </button>
            </div>
          </div>
          <ChevronsDown className="w-6 h-6 text-yellow-400 animate-bounce mt-10" />
        </div>
      </div>

      <div className="bg-white h-1 opacity-10 w-[100%] mx-auto rounded-2xl mt-20"></div>

      {/* New Section */}
      <section className="w-full mb-10 rounded-xl mt-20 px-6 md:px-20 py-12 bg-gradient-to-b from-blue-950 via-black to-gray-900 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose <span className="text-yellow-300">Get Me A Chai?</span></h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg mb-10 leading-relaxed">
          At <span className="text-pink-400 font-semibold">Get Me A Chai</span>, we believe chai is more than just a drink — it&apos;s a feeling. Whether you're pulling an all-nighter, chilling with friends, or taking a much-needed break, our carefully crafted blends are designed to soothe, energize, and satisfy.
          <br className="hidden md:block" />We deliver premium-quality, piping hot chai made with love, straight to your doorstep — faster than you can say &quot;One cutting, please!&quot; 
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-10">
          <div className="p-6 bg-gradient-to-b from-blue-900 via-black to-gray-800 rounded-xl shadow-lg hover:shadow-pink-500/30 transition">
            <h3 className="text-xl font-semibold text-pink-400 mb-2">Fresh Ingredients</h3>
            <p className="text-gray-400">We use handpicked tea leaves, natural spices, and zero preservatives for that authentic, homemade taste.</p>
          </div>
          <div className="p-6 bg-gradient-to-b from-blue-900 via-black to-gray-800 rounded-xl shadow-lg hover:shadow-yellow-300/30 transition">
            <h3 className="text-xl font-semibold text-yellow-300 mb-2">Fast Delivery</h3>
            <p className="text-gray-400">We ensure your chai is delivered hot and fresh, exactly when you need it — no delays, no compromises.</p>
          </div>
          <div className="p-6 bg-gradient-to-b from-blue-900 via-black to-gray-800 rounded-xl shadow-lg hover:shadow-blue-400/30 transition">
            <h3 className="text-xl font-semibold text-blue-400 mb-2">Eco-Friendly</h3>
            <p className="text-gray-400">We care for the planet. Our cups, packaging, and delivery practices are sustainable and planet-friendly.</p>
          </div>
        </div>
      </section>

      <div className="bg-white h-1 opacity-10 w-[100%] mx-auto rounded-2xl mt-20"></div>

      {/* How It Works Section */}
      <section className="w-full mt-20 rounded-xl mb-10 px-6 md:px-20 py-12 bg-gradient-to-b from-blue-950 via-black to-gray-900 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          How <span className="text-purple-400">It Works</span>
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg mb-10 leading-relaxed">
          Ordering your favorite chai is as easy as sipping it. Just follow these simple steps and get your cup of happiness delivered to your doorstep.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-10">
          <div className="p-6 bg-gray-900 rounded-xl shadow-lg hover:shadow-purple-500/30 transition">
            <h3 className="text-xl font-semibold text-purple-300 mb-2">1. Choose Your Chai</h3>
            <p className="text-gray-400">Browse through our menu and pick your favorite blend — masala, ginger, elaichi, or even iced chai.</p>
          </div>
          <div className="p-6 bg-gray-900 rounded-xl shadow-lg hover:shadow-pink-400/30 transition">
            <h3 className="text-xl font-semibold text-pink-300 mb-2">2. Place Your Order</h3>
            <p className="text-gray-400">With just a few clicks, your chai order is placed! You can even schedule it for later.</p>
          </div>
          <div className="p-6 bg-gray-900 rounded-xl shadow-lg hover:shadow-yellow-400/30 transition">
            <h3 className="text-xl font-semibold text-yellow-300 mb-2">3. Sip and Relax</h3>
            <p className="text-gray-400">We deliver it hot and fresh, right to your door — now all that's left is to enjoy every sip!</p>
          </div>
        </div>
      </section>
      <div className="bg-white mb-20 h-1 opacity-10 w-[100%] mx-auto rounded-2xl mt-20"></div>
      {/* Why Choose Us Section */}
      <section className="w-full rounded-2xl px-6 md:px-20 py-16 bg-gradient-to-b from-blue-950 via-black to-gray-900 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Why <span className="text-yellow-300">Choose Us?</span>
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg mb-10 leading-relaxed">
          We&apos;re not just delivering tea — we&apos;re delivering comfort, connection, and care in every cup. Here's why chai lovers trust us.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-10">
          <div className="p-6 bg-gray-900 rounded-xl shadow-lg hover:shadow-yellow-400/30 transition">
            <h3 className="text-xl font-semibold text-yellow-300 mb-2">Fresh & Authentic</h3>
            <p className="text-gray-400">
              Each cup is brewed fresh with hand-picked ingredients and traditional recipes that honor the soul of Indian chai.
            </p>
          </div>
          <div className="p-6 bg-gray-900 rounded-xl shadow-lg hover:shadow-pink-400/30 transition">
            <h3 className="text-xl font-semibold text-pink-400 mb-2">Quick Delivery</h3>
            <p className="text-gray-400">
              Get your chai delivered hot and fast — just like your local tapri, but smarter and cleaner.
            </p>
          </div>
          <div className="p-6 bg-gray-900 rounded-xl shadow-lg hover:shadow-purple-400/30 transition">
            <h3 className="text-xl font-semibold text-purple-300 mb-2">Affordable Indulgence</h3>
            <p className="text-gray-400">
              Premium quality at pocket-friendly prices. Sip stress-free without breaking the bank.
            </p>
          </div>
        </div>
      </section>
      {/* Final Call to Action Section */}
      <section className="w-full mt-20 mb-10 rounded-2xl px-6 md:px-20 py-16 bg-gradient-to-b from-blue-950 to-black text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to <span className="text-pink-400">Sip Some Chai?</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
          Whether you&apos;re working late, chilling with friends, or just need a break — your perfect cup is just a click away.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/buy"
            className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition shadow-lg"
          >
            Order Now
          </Link>
          <Link
            href="/learn"
            className="inline-block px-6 py-3 rounded-lg bg-transparent border border-gray-500 text-white hover:text-yellow-300 hover:border-yellow-300 transition"
          >
            Learn More
          </Link>
        </div>
      </section>

    </>
  );
}
