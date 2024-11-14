import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ShoppingBag, Calendar } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-black/20 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Sparkles className="h-8 w-8 text-purple-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Mystic Tarot
            </span>
          </Link>
          <div className="flex space-x-8">
            <Link to="/shop" className="flex items-center space-x-1 hover:text-purple-400 transition-colors">
              <ShoppingBag className="h-5 w-5" />
              <span>Shop</span>
            </Link>
            <Link to="/booking" className="flex items-center space-x-1 hover:text-purple-400 transition-colors">
              <Calendar className="h-5 w-5" />
              <span>Book Reading</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;