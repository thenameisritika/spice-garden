import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-orange-500 px-6 py-4 flex justify-between items-center shadow-md">

      {/* Logo */}
      <div className="text-white text-2xl font-bold">
        🍛 Spice Garden
      </div>

      {/* Links */}
      <div className="flex gap-6">
        <Link to="/" className="text-white font-medium hover:text-orange-200">
          Home
        </Link>
        <Link to="/menu" className="text-white font-medium hover:text-orange-200">
          Menu
        </Link>
        <Link to="/order" className="text-white font-medium hover:text-orange-200">
          Order Now
        </Link>
        <Link to="/admin" className="text-white font-medium hover:text-orange-200">
          Admin
        </Link>
      </div>

    </nav>
  )
}

export default Navbar