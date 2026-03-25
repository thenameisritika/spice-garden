function Home() {
  return (
    <div>

      {/* Hero Section */}
      <div className="bg-orange-100 flex flex-col items-center justify-center py-24 px-6 text-center">

        <h1 className="text-5xl font-bold text-orange-500 mb-4">
          Welcome to Spice Garden 🍛
        </h1>

        <p className="text-gray-600 text-xl mb-8 max-w-xl">
          Authentic South Indian flavors made with love.
          Order fresh, hot meals delivered to your door.
        </p>

        <div className="flex gap-4">
          <a href="/menu" className="bg-orange-500 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition">
            View Menu
          </a>
          <a href="/order" className="border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-full font-bold hover:bg-orange-100 transition">
            Order Now
          </a>
        </div>

      </div>

      {/* Features Section */}
      <div className="py-16 px-6 bg-white">

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Why Choose Us?
        </h2>

        <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">

          <div className="flex-1 bg-orange-100 rounded-2xl shadow-md p-8 text-center">
            <div className="text-5xl mb-4">🍽️</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Fresh Food</h3>
            <p className="text-gray-500">Cooked fresh every day with finest ingredients</p>
          </div>

          <div className="flex-1 bg-orange-100 rounded-2xl shadow-md p-8 text-center">
            <div className="text-5xl mb-4">🚚</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Fast Delivery</h3>
            <p className="text-gray-500">Hot food delivered within 30 minutes</p>
          </div>

          <div className="flex-1 bg-orange-100 rounded-2xl shadow-md p-8 text-center">
            <div className="text-5xl mb-4">💰</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Best Price</h3>
            <p className="text-gray-500">Amazing food at pocket friendly prices</p>
          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="bg-orange-500 text-white text-center py-6">
        <p className="font-medium">© 2024 Spice Garden. Made with ❤️ in India</p>
      </div>

    </div>
  )
}

export default Home