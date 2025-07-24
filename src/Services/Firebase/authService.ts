import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  type User,
  getIdToken,
} from 'firebase/auth';
import { auth } from './firebaseClient';

const googleProvider = new GoogleAuthProvider();

export const loginWithGoogle = async (): Promise<User | null> => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error('Google login error:', error);
    return null;
  }
};

export const registerWithEmail = async (email: string, password: string): Promise<User | null> => {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    return result.user;
  } catch (error) {
    console.error('Registration error:', error);
    return null;
  }
};

export const loginWithEmail = async (email: string, password: string): Promise<User | null> => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result.user;
  } catch (error) {
    console.error('Email login error:', error);
    return null;
  }
};

export const logout = async (): Promise<void> => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Logout error:', error);
  }
};

export const getCurrentUser = (): User | null => {
  return auth.currentUser;
};

export const getIdTokenHeader = async (): Promise<{ Authorization: string } | null> => {
  const user = auth.currentUser;
  if (user) {
    const token = await getIdToken(user, true);
    return { Authorization: `Bearer ${token}` };
  }
  return null;
};

export const subscribeToAuthChanges = (callback: (user: User | null) => void): void => {
  onAuthStateChanged(auth, (user) => {
    callback(user);
  });
};
