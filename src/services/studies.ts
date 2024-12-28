import { 
  collection,
  doc,
  setDoc,
  getDoc,
  query,
  where,
  getDocs
} from 'firebase/firestore';
import { db } from '@/config/firebase';
import type { StudyDay } from '@/types/study';

export interface WeeklyStudy {
  id: string;
  userId: string;
  lessonId: string;
  weekStartDate: string;
  days: StudyDay[];
  createdAt: string;
  updatedAt: string;
}

export async function createWeeklyStudy(
  userId: string,
  lessonId: string,
  days: StudyDay[]
): Promise<WeeklyStudy> {
  const weeklyStudy: WeeklyStudy = {
    id: `${userId}-${lessonId}-${new Date().toISOString()}`,
    userId,
    lessonId,
    weekStartDate: new Date().toISOString(),
    days,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  await setDoc(doc(db, 'weeklyStudies', weeklyStudy.id), weeklyStudy);
  return weeklyStudy;
}

export async function updateStudyDay(
  studyId: string,
  dayId: string,
  completed: boolean
): Promise<void> {
  const studyRef = doc(db, 'weeklyStudies', studyId);
  const study = await getDoc(studyRef);
  
  if (!study.exists()) {
    throw new Error('Study not found');
  }

  const data = study.data() as WeeklyStudy;
  const updatedDays = data.days.map(day => 
    day.id === dayId ? { ...day, completed } : day
  );

  await setDoc(studyRef, {
    ...data,
    days: updatedDays,
    updatedAt: new Date().toISOString()
  });
}

export async function getUserWeeklyStudies(userId: string): Promise<WeeklyStudy[]> {
  const q = query(
    collection(db, 'weeklyStudies'),
    where('userId', '==', userId)
  );
  
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => doc.data() as WeeklyStudy);
}