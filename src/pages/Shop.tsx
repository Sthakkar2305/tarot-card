import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import Cart from '../components/Cart';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface CartItem extends Product {
  quantity: number;
}

const products = [
  {
    id: 1,
    name: 'Mystic Tarot Deck',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1632767037838-957db2832af3?q=80&w=500',
    description: 'Hand-illustrated premium tarot deck with gold foil details'
  },
  {
    id: 2,
    name: 'Crystal Bundle',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1632767155230-72c319e7902b?q=80&w=500',
    description: 'Set of 5 healing crystals for enhanced readings'
  },
  {
    id: 3,
    name: 'Silk Reading Cloth',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1632767037461-db5c29ea87c1?q=80&w=500',
    description: 'Luxurious silk cloth with celestial design'
  }
];

const Shop = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    setCartItems(prev =>
      quantity === 0
        ? prev.filter(item => item.id !== id)
        : prev.map(item =>
            item.id === id ? { ...item, quantity } : item
          )
    );
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-[#1a1a2e] to-[#16162a]">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-16">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Mystic Shop
          </h1>
          <button
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-colors"
          >
            <ShoppingCart className="h-5 w-5" />
            <span>Cart ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-black/20 rounded-xl overflow-hidden backdrop-blur-sm hover:transform hover:scale-105 transition-transform duration-300">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-400 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-purple-400">
                    ${product.price}
                  </span>
                  <button
                    onClick={() => addToCart(product)}
                    className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-colors"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isCartOpen && (
        <Cart
          items={cartItems}
          onClose={() => setIsCartOpen(false)}
          onRemoveItem={removeFromCart}
          onUpdateQuantity={updateQuantity}
        />
      )}
    </div>
  );
};

export default Shop;