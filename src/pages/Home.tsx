import React from 'react';
import { useNavigate } from 'react-router-dom';
import TarotCard from '../components/TarotCard';
import { Sparkles } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1632765854612-9b02b6ec2b15?q=80&w=2000')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Discover Your Destiny
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Unlock the mysteries of your future through ancient tarot wisdom
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/booking')}
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <Sparkles className="h-5 w-5" />
              Book a Reading
            </button>
          </div>
        </div>
      </div>

      {/* Featured Cards Section */}
      <div className="py-20 bg-gradient-to-b from-[#1a1a2e] to-[#16162a]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Tarot Cards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            <TarotCard
              image="https://astromatrix.app/images/astrotarot/Tarot%20Major%20Arcana/The%20Moon.jpg"
              name="The Moon"
            />
            <TarotCard
              image="https://m.media-amazon.com/images/I/81LsF7XJDiL._AC_UF1000,1000_QL80_.jpg"
              name="The Star"
            />
            <TarotCard
              image="https://i.pinimg.com/736x/88/01/f9/8801f9e749d0a41a63c44e6420d73ee3.jpg"
              name="The Sun"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;