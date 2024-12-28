import { Heart, HeartOff } from 'lucide-react';

interface StudyHeartProps {
  completed: boolean;
  onClick?: () => void;
}

export function StudyHeart({ completed, onClick }: StudyHeartProps) {
  return (
    <button
      onClick={onClick}
      className={`transition-colors ${
        completed 
          ? 'text-red-500 hover:text-red-600' 
          : 'text-gray-300 hover:text-gray-400'
      }`}
    >
      {completed ? (
        <Heart className="w-8 h-8 fill-current" />
      ) : (
        <HeartOff className="w-8 h-8" />
      )}
    </button>
  );
}