export interface StudyDay {
  id: string;
  date: string;
  completed: boolean;
  lessonsDone: number;
}

export interface LessonProgress {
  lessonId: string;
  days: StudyDay[];
}