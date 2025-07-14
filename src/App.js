
export default function App() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-12 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">EZMobileHomesTX.com</h1>
        <p className="text-xl">We Buy Mobile Homes & Mobile Home Parks — Fast, Fair, and Hassle-Free</p>
        <p className="text-lg mt-2">Call Now: <a href="tel:+1-800-555-1234" className="underline font-semibold">1-800-555-1234</a></p>
      </section>

      {/* Section 1: Sell Your Mobile Home */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold mb-4 text-center">Need to Sell Your Mobile Home?</h2>
        <p className="max-w-3xl mx-auto text-center text-lg mb-6">
          Whether you're relocating, upgrading, or just need cash fast, we’ll give you a fair offer with zero hassle. We buy single wides, double wides — even homes that need work.
        </p>
        <div className="flex justify-center">
          <a href="tel:+1-800-555-1234" className="bg-green-600 text-white px-6 py-3 rounded-2xl shadow-xl hover:bg-green-700 transition">Call Now to Get an Offer</a>
        </div>
      </section>

      {/* Section 2: Selling a Mobile Home Park */}
      <section className="py-12 px-6 bg-white">
        <h2 className="text-3xl font-bold mb-4 text-center">Own a Mobile Home Park?</h2>
        <p className="max-w-3xl mx-auto text-center text-lg mb-6">
          We’re actively buying mobile home communities across Texas. Whether you’re ready to exit or just exploring options, we’re serious buyers who move quickly and close smoothly.
        </p>
        <div className="flex justify-center">
          <a href="tel:+1-800-555-1234" className="bg-green-600 text-white px-6 py-3 rounded-2xl shadow-xl hover:bg-green-700 transition">Call Now to Discuss</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 text-center text-sm text-gray-600">
        <p>© {new Date().getFullYear()} EZMobileHomesTX.com. All rights reserved.</p>
        <p>We are not realtors — we are direct buyers based in Texas.</p>
      </footer>
    </main>
  );
}
