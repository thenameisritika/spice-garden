import { Link } from 'react-router-dom'

function Navbar() {
  return (
    
     <nav className='bg-gray-950 flex px-6 py-6  justify-between items-center'>

       {/* Logo */}
      <div className="text-yellow-400 text-2xl font-bold"> 
        🍛 Spice Garden
      </div>

      {/* Links */}
      <div className='flex gap-6'>
        <Link  to="/" className='text-white hover:text-yellow-400'>Home</Link>
        <Link  to="/menu" className='text-white hover:text-yellow-400'>Menu</Link>
        <Link  to="/order" className='text-white hover:text-yellow-400'>Order</Link>
         <Link to="/admin" className='text-white hover:text-yellow-400'>Admin</Link>
      </div>

     </nav>
      
  )
}

export default Navbar