import React from 'react';
import { ShoppingBag, X } from 'lucide-react';
import PaymentForm from './PaymentForm';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartProps {
  items: CartItem[];
  onClose: () => void;
  onRemoveItem: (id: number) => void;
  onUpdateQuantity: (id: number, quantity: number) => void;
}

const Cart: React.FC<CartProps> = ({ items, onClose, onRemoveItem, onUpdateQuantity }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const [showPayment, setShowPayment] = React.useState(false);

  const handlePaymentSuccess = () => {
    // In a real app, handle order completion here
    alert('Order placed successfully!');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-end">
      <div className="w-full max-w-md bg-[#1a1a2e] h-full overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <ShoppingBag className="h-6 w-6 text-purple-400" />
              <h2 className="text-xl font-semibold">Your Cart</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {!showPayment ? (
            <>
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 bg-black/20 p-4 rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-purple-400">${item.price}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                          className="px-2 py-1 bg-white/10 rounded hover:bg-white/20 transition-colors"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-1 bg-white/10 rounded hover:bg-white/20 transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="p-2 hover:bg-white/10 rounded-full transition-colors h-fit"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                ))}
              </div>

              {items.length > 0 ? (
                <div>
                  <div className="flex justify-between mb-4">
                    <span>Total:</span>
                    <span className="font-semibold">${total.toFixed(2)}</span>
                  </div>
                  <button
                    onClick={() => setShowPayment(true)}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 py-4 rounded-lg font-semibold transition-colors"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              ) : (
                <p className="text-center text-gray-400">Your cart is empty</p>
              )}
            </>
          ) : (
            <PaymentForm amount={total} onSuccess={handlePaymentSuccess} showCOD={true} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;