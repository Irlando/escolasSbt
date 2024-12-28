import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { LessonCard } from './LessonCard';
import type { Lesson } from '@/types/lesson';

interface LessonsCarouselProps {
  lessons: Lesson[];
  onLessonSelect: (lesson: Lesson) => void;
}

export function LessonsCarousel({ lessons, onLessonSelect }: LessonsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const navigate = (direction: 'prev' | 'next') => {
    if (isAnimating) return;

    setIsAnimating(true);
    const newIndex = direction === 'prev' 
      ? Math.max(0, currentIndex - 1)
      : Math.min(lessons.length - 1, currentIndex + 1);
    
    setCurrentIndex(newIndex);
    onLessonSelect(lessons[newIndex]);

    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <div className="relative">
      {currentIndex > 0 && (
        <button 
          onClick={() => navigate('prev')}
          disabled={isAnimating}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/30 p-2 rounded-full
                   hover:bg-black/40 transition-colors disabled:opacity-50"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
      )}

      <div className="overflow-hidden">
        <div 
          className="transition-transform duration-300 ease-out will-change-transform"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          <div className="flex">
            {lessons.map((lesson) => (
              <div 
                key={lesson.id}
                className="flex-none w-full"
              >
                <div className="mx-auto max-w-[300px]">
                  <LessonCard {...lesson} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {currentIndex < lessons.length - 1 && (
        <button 
          onClick={() => navigate('next')}
          disabled={isAnimating}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/30 p-2 rounded-full
                   hover:bg-black/40 transition-colors disabled:opacity-50"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      )}
    </div>
  );
}