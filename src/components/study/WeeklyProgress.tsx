import { Share2 } from 'lucide-react';
import { StudyHeart } from './StudyHeart';
import { ProgressBar } from './ProgressBar';
import { Button } from '../ui/Button';
import type { StudyDay, WeekProgress } from '@/types/study';

interface WeeklyProgressProps {
  days: StudyDay[];
  progress: WeekProgress;
  onToggleDay: (id: string) => void;
  onShare: () => void;
}

export function WeeklyProgress({ 
  days, 
  progress, 
  onToggleDay, 
  onShare 
}: WeeklyProgressProps) {
  const progressPercentage = Math.round(
    (progress.completedDays / progress.totalDays) * 100
  );

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Weekly Progress</h2>
        <Button variant="outline" onClick={onShare}>
          <Share2 className="w-4 h-4 mr-2" />
          Share Progress
        </Button>
      </div>

      <div className="grid grid-cols-7 gap-4 mb-8">
        {days.map((day) => (
          <div key={day.id} className="text-center">
            <StudyHeart
              completed={day.completed}
              onClick={() => onToggleDay(day.id)}
            />
            <p className="mt-2 text-sm text-gray-600">
              {new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' })}
            </p>
            <p className="text-xs text-gray-500">
              {day.lessonsDone} lessons
            </p>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <ProgressBar
          label="Weekly Completion"
          progress={progressPercentage}
        />
        <ProgressBar
          label="Lessons Completed"
          progress={(progress.lessonsCompleted / (7 * 7)) * 100}
        />
      </div>
    </div>
  );
}