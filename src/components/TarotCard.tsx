import React from 'react';
import { useSpring, animated } from '@react-spring/web';

interface TarotCardProps {
  image: string;
  name: string;
  isFlipped?: boolean;
}

const TarotCard: React.FC<TarotCardProps> = ({ image, name, isFlipped = false }) => {
  const [props, set] = useSpring(() => ({
    transform: 'perspective(1000px) rotateY(0deg)',
    config: { mass: 5, tension: 500, friction: 80 },
  }));

  const handleHover = (flipped: boolean) => {
    set({
      transform: `perspective(1000px) rotateY(${flipped ? 180 : 0}deg)`,
    });
  };

  return (
    <animated.div
      className="relative w-64 h-96 cursor-pointer"
      style={props}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      <div className="absolute w-full h-full rounded-xl shadow-xl bg-gradient-to-br from-purple-600 to-pink-500 transform preserve-3d backface-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-xl opacity-90"
        />
        <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent rounded-b-xl">
          <h3 className="text-xl font-semibold text-white">{name}</h3>
        </div>
      </div>
    </animated.div>
  );
};

export default TarotCard;