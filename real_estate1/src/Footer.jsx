import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';
import { MdLocationOn, MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 md:px-20">
      {/* Footer Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Real Estate Co.</h3>
          <p className="text-gray-400">
            Helping you find the perfect property for your dream home or investment.
          </p>
        </div>

        {/* Contact Info Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <FaPhoneAlt className="mr-2" /> <span>+254 712 345 678</span>
            </li>
            <li className="flex items-center">
              <MdEmail className="mr-2" /> <span>info@realestate.com</span>
            </li>
            <li className="flex items-center">
              <MdLocationOn className="mr-2" /> <span>Nairobi, Kenya</span>
            </li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="text-gray-400 hover:text-white">Home</a>
            </li>
            <li>
              <a href="/about" className="text-gray-400 hover:text-white">About Us</a>
            </li>
            <li>
              <a href="/listings" className="text-gray-400 hover:text-white">Listings</a>
            </li>
            <li>
              <a href="/contact" className="text-gray-400 hover:text-white">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Social Media Links Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-gray-400 hover:text-white text-2xl" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-gray-400 hover:text-white text-2xl" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-gray-400 hover:text-white text-2xl" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-gray-400 hover:text-white text-2xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center">
        <p className="text-gray-500">
          © {new Date().getFullYear()} Real Estate Co. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
