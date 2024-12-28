import { 
  signInWithEmailAndPassword,
  signOut as firebaseSignOut
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '@/config/firebase';
import { DEMO_USER } from '@/config/constants';

export interface UserProfile {
  email: string;
  church: string;
  name?: string;
  age?: number;
  title?: string;
  photoURL?: string;
}

export async function signIn(email: string, password: string): Promise<UserProfile> {
  // Demo user check
  if (email === DEMO_USER.email && password === DEMO_USER.password) {
    return {
      email: DEMO_USER.email,
      church: DEMO_USER.church
    };
  }

  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  const userDoc = await getDoc(doc(db, 'users', userCredential.user.uid));
  
  if (!userDoc.exists()) {
    // Create user profile if it doesn't exist
    const newProfile: UserProfile = {
      email: userCredential.user.email!,
      church: '',
    };
    await setDoc(doc(db, 'users', userCredential.user.uid), newProfile);
    return newProfile;
  }

  return userDoc.data() as UserProfile;
}

export async function signOut(): Promise<void> {
  await firebaseSignOut(auth);
}

export async function updateProfile(userId: string, data: Partial<UserProfile>): Promise<void> {
  await setDoc(doc(db, 'users', userId), data, { merge: true });
}