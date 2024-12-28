import { useLocalStorage } from './useLocalStorage';
import type { LessonProgress, StudyDay } from '@/types/study';
import type { Lesson } from '@/types/lesson';

export function useLessonProgress(lessons: Lesson[]) {
  const [progress, setProgress] = useLocalStorage<LessonProgress[]>('lesson-progress', 
    lessons.map(lesson => ({
      lessonId: lesson.id,
      days: Array.from({ length: 7 }, (_, i) => ({
        id: `${lesson.id}-day-${i}`,
        date: new Date(new Date().setDate(new Date().getDate() - i)).toISOString(),
        completed: false,
        lessonsDone: 0
      }))
    }))
  );

  const toggleDay = (lessonId: string, dayId: string) => {
    setProgress(current =>
      current.map(lessonProgress => {
        if (lessonProgress.lessonId !== lessonId) return lessonProgress;
        
        return {
          ...lessonProgress,
          days: lessonProgress.days.map(day => {
            if (day.id !== dayId) return day;
            return {
              ...day,
              completed: !day.completed,
              lessonsDone: !day.completed ? 7 : 0
            };
          })
        };
      })
    );
  };

  const getLessonProgress = (lessonId: string) => 
    progress.find(p => p.lessonId === lessonId)?.days || [];

  return { toggleDay, getLessonProgress };
}