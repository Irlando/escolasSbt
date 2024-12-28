import { StudyHeart } from './StudyHeart';

interface StudyDayProps {
  date: string;
  completed: boolean;
  onClick: () => void;
}

export function StudyDay({ date, completed, onClick }: StudyDayProps) {
  const dayDate = new Date(date);
  const formattedDate = new Intl.DateTimeFormat('pt-BR', { 
    weekday: 'short',
    day: 'numeric'
  }).format(dayDate);

  return (
    <div className="flex flex-col items-center gap-1">
      <StudyHeart completed={completed} onClick={onClick} />
      <span className="text-xs text-gray-400 capitalize">
        {formattedDate}
      </span>
    </div>
  );
}