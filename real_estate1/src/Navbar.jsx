import { useState } from 'react'; // Import state hook

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between bg-white px-6 py-4 shadow-md">
      {/* Logo Section */}
      <div className="flex items-center">
        <img
          src="https://t3.ftcdn.net/jpg/04/08/78/12/360_F_408781239_SioZtkPoH8lRZuL0MHG4oa2C2IyHJx0c.jpg"
          alt="Logo"
          className="h-10 w-10 rounded-3xl"
        />
      </div>

      {/* Hamburger Icon (Visible only on small screens) */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-3xl focus:outline-none">
          ☰
        </button>
      </div>

      {/* Desktop Links and Buttons (Hidden on small screens) */}
      <div className="hidden md:flex items-center space-x-6">
        <a href="/" className="text-lg text-gray-700 hover:text-blue-500">Home</a>
        <a href="/about" className="text-lg text-gray-700 hover:text-blue-500">About</a>
        <a href="/contacts" className="text-lg text-gray-700 hover:text-blue-500">Contacts</a>
        <button className="bg-primary text-white px-4 py-2 rounded hover:bg-purple-600">
          Sign Up
        </button>
        <button className="text-blue-500 border border-purple-500 px-4 py-2 rounded hover:bg-purple-600 hover:text-white hover:border-transparent">
          Sign In
        </button>
      </div>

      {/* Mobile Menu (Slide-in from Left) */}
      <div
        className={`fixed inset-y-0 left-0 w-2/3 bg-white shadow-lg z-50 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex flex-col space-y-6 p-6">
          <a href="/" className="text-lg text-gray-700 hover:text-blue-500">Home</a>
          <a href="/about" className="text-lg text-gray-700 hover:text-blue-500">About</a>
          <a href="/contacts" className="text-lg text-gray-700 hover:text-blue-500">Contacts</a>
          <button className="bg-primary text-purple px-4 py-2 rounded hover:bg-purple-600">
            Sign Up
          </button>
          <button className="text-blue-500 border border-purple-500 px-4 py-2 rounded hover:bg-purple-600 hover:text-white hover:border-transparent">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
