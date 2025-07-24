import { useEffect } from 'react';
import { onAuthStateChanged, getIdToken } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { auth } from '../Services/Firebase/firebaseClient';
import { clearUser, setLoading, setUser } from '../Store/Slices/authSlice';

export const useFirebaseAuthListener = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const token = await getIdToken(user);
          dispatch(
            setUser({
              uid: user.uid,
              displayName: user.displayName,
              email: user.email,
              token,
            })
          );
        } catch (error) {
          console.error('Token error:', error);
          dispatch(clearUser());
        }
      } else {
        dispatch(clearUser());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);
};
