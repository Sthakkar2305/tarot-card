import React, { useState } from 'react';
import { CreditCard, Building2, Truck } from 'lucide-react';

interface PaymentFormProps {
  amount: number;
  onSuccess: () => void;
  showCOD?: boolean;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ amount, onSuccess, showCOD = false }) => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [bankName, setBankName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, handle payment processing here
    onSuccess();
  };

  return (
    <div className="bg-black/20 backdrop-blur-md rounded-xl p-6">
      <h3 className="text-xl font-semibold mb-6">Payment Details</h3>
      
      <div className="grid grid-cols-1 gap-4 mb-6">
        <button
          className={`p-4 rounded-lg flex items-center gap-3 transition-colors ${
            paymentMethod === 'card' ? 'bg-purple-600 text-white' : 'bg-white/10 hover:bg-white/20'
          }`}
          onClick={() => setPaymentMethod('card')}
        >
          <CreditCard className="h-5 w-5" />
          <span>Debit/Credit Card</span>
        </button>

        <button
          className={`p-4 rounded-lg flex items-center gap-3 transition-colors ${
            paymentMethod === 'netbanking' ? 'bg-purple-600 text-white' : 'bg-white/10 hover:bg-white/20'
          }`}
          onClick={() => setPaymentMethod('netbanking')}
        >
          <Building2 className="h-5 w-5" />
          <span>Net Banking</span>
        </button>

        {showCOD && (
          <button
            className={`p-4 rounded-lg flex items-center gap-3 transition-colors ${
              paymentMethod === 'cod' ? 'bg-purple-600 text-white' : 'bg-white/10 hover:bg-white/20'
            }`}
            onClick={() => setPaymentMethod('cod')}
          >
            <Truck className="h-5 w-5" />
            <span>Cash on Delivery</span>
          </button>
        )}
      </div>

      {paymentMethod && paymentMethod !== 'cod' && (
        <form onSubmit={handleSubmit} className="space-y-4">
          {paymentMethod === 'card' ? (
            <>
              <div>
                <label className="block text-sm font-medium mb-2">Card Number</label>
                <input
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  placeholder="1234 5678 9012 3456"
                  className="w-full bg-white/10 rounded-lg p-3 focus:ring-2 focus:ring-purple-400 outline-none"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Expiry Date</label>
                  <input
                    type="text"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    placeholder="MM/YY"
                    className="w-full bg-white/10 rounded-lg p-3 focus:ring-2 focus:ring-purple-400 outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">CVV</label>
                  <input
                    type="text"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    placeholder="123"
                    className="w-full bg-white/10 rounded-lg p-3 focus:ring-2 focus:ring-purple-400 outline-none"
                    required
                  />
                </div>
              </div>
            </>
          ) : (
            <div>
              <label className="block text-sm font-medium mb-2">Select Bank</label>
              <select
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
                className="w-full bg-white/10 rounded-lg p-3 focus:ring-2 focus:ring-purple-400 outline-none"
                required
              >
                <option value="">Select a bank</option>
                <option value="sbi">State Bank of India</option>
                <option value="hdfc">HDFC Bank</option>
                <option value="icici">ICICI Bank</option>
                <option value="axis">Axis Bank</option>
              </select>
            </div>
          )}

          <div className="mt-6">
            <div className="flex justify-between mb-4">
              <span>Amount to Pay:</span>
              <span className="font-semibold">${amount.toFixed(2)}</span>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 py-4 rounded-lg font-semibold transition-colors"
            >
              Pay Now
            </button>
          </div>
        </form>
      )}

      {paymentMethod === 'cod' && (
        <div className="mt-6">
          <div className="flex justify-between mb-4">
            <span>Amount to Pay on Delivery:</span>
            <span className="font-semibold">${amount.toFixed(2)}</span>
          </div>
          <button
            onClick={onSuccess}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 py-4 rounded-lg font-semibold transition-colors"
          >
            Place Order
          </button>
        </div>
      )}
    </div>
  );
};

export default PaymentForm;