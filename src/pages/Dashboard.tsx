import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { LessonsCarousel } from '@/components/study/LessonsCarousel';
import { StudyDay } from '@/components/study/StudyDay';
import { MissionaryActions } from '@/components/study/MissionaryActions';
import { useLessonProgress } from '@/hooks/useLessonProgress';
import { lessons } from '@/data/lessons';
import type { Lesson } from '@/types/lesson';

export function Dashboard() {
  const [selectedLesson, setSelectedLesson] = useState<Lesson>(lessons[0]);
  const { toggleDay, getLessonProgress } = useLessonProgress(lessons);
  
  const currentProgress = getLessonProgress(selectedLesson.id);

  return (
    <div className="min-h-screen bg-[#1c1f26] text-white">
      <Header />
      
      <main className="p-4">
        <div className="max-w-4xl mx-auto">
          <LessonsCarousel 
            lessons={lessons}
            onLessonSelect={setSelectedLesson}
          />

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-center mb-2">
              {selectedLesson.weekTheme}
            </h2>
            <h3 className="text-lg text-center text-gray-400 mb-6">
              Meu estudo da semana
            </h3>
            
            <div className="grid grid-cols-7 gap-4 justify-items-center">
              {currentProgress.map((day) => (
                <StudyDay
                  key={day.id}
                  date={day.date}
                  completed={day.completed}
                  onClick={() => toggleDay(selectedLesson.id, day.id)}
                />
              ))}
            </div>
          </div>

          <MissionaryActions />
        </div>
      </main>
    </div>
  );
}