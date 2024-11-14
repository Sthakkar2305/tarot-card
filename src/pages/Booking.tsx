import React, { useState } from 'react';
import { Calendar, Clock, Video, Phone } from 'lucide-react';
import PaymentForm from '../components/PaymentForm';

const timeSlots = [
  '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM'
];

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [showPayment, setShowPayment] = useState(false);

  const handlePaymentSuccess = () => {
    // In a real app, handle booking confirmation here
    alert('Booking confirmed successfully!');
    setShowPayment(false);
    setSelectedDate('');
    setSelectedTime('');
    setSelectedType('');
  };

  const getPrice = () => {
    return selectedType === 'video' ? 85 : 60;
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-[#1a1a2e] to-[#16162a]">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Book Your Tarot Reading
        </h1>

        {!showPayment ? (
          <div className="bg-black/20 rounded-xl p-8 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-purple-400" />
                  Select Date
                </h3>
                <input
                  type="date"
                  className="w-full bg-white/10 rounded-lg p-3 focus:ring-2 focus:ring-purple-400 outline-none"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-purple-400" />
                  Select Time
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      className={`p-2 rounded-lg transition-colors ${
                        selectedTime === time
                          ? 'bg-purple-600 text-white'
                          : 'bg-white/10 hover:bg-white/20'
                      }`}
                      onClick={() => setSelectedTime(time)}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Select Reading Type</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  className={`p-4 rounded-lg flex items-center gap-3 transition-colors ${
                    selectedType === 'video'
                      ? 'bg-purple-600 text-white'
                      : 'bg-white/10 hover:bg-white/20'
                  }`}
                  onClick={() => setSelectedType('video')}
                >
                  <Video className="h-5 w-5" />
                  <div className="text-left">
                    <div className="font-semibold">Video Call</div>
                    <div className="text-sm opacity-75">45 minutes - $85</div>
                  </div>
                </button>

                <button
                  className={`p-4 rounded-lg flex items-center gap-3 transition-colors ${
                    selectedType === 'phone'
                      ? 'bg-purple-600 text-white'
                      : 'bg-white/10 hover:bg-white/20'
                  }`}
                  onClick={() => setSelectedType('phone')}
                >
                  <Phone className="h-5 w-5" />
                  <div className="text-left">
                    <div className="font-semibold">Phone Call</div>
                    <div className="text-sm opacity-75">30 minutes - $60</div>
                  </div>
                </button>
              </div>
            </div>

            <button
              className="w-full mt-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 py-4 rounded-lg font-semibold transition-colors"
              disabled={!selectedDate || !selectedTime || !selectedType}
              onClick={() => setShowPayment(true)}
            >
              Proceed to Payment
            </button>
          </div>
        ) : (
          <PaymentForm
            amount={getPrice()}
            onSuccess={handlePaymentSuccess}
            showCOD={false}
          />
        )}
      </div>
    </div>
  );
};

export default Booking;