import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { TbRubberStamp } from "react-icons/tb";

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading,setLoading] = useState(true)

  const createUserWithEmailAndPasswordFunc = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInWithEmailAndPasswordFunc = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  const updateProfileFunc = (displayName, photoURL) => {
    setLoading(true)
    return updateProfile(auth.currentUser, {
      displayName,
      photoURL,
    });
  };
  const signOutFunc = () => {
    setLoading(true)
    return signOut(auth);
  };
  const signInWithPopupFunc = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  };
  const sendEmailVerificationFunc = () => {
    setLoading(true)
    return sendEmailVerification(auth.currentUser);
  };
  const sendPasswordResetEmailFunc = (email) => {
    setLoading(true)
    return sendPasswordResetEmail(auth,email);
  };
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
        setLoading(false)
    })
    return ()=>{
        unSubscribe();
    }
  })

  const authInfo = {
    setUser,
    user,
    createUserWithEmailAndPasswordFunc,
    signInWithEmailAndPasswordFunc,
    updateProfileFunc,
    signOutFunc,
    signInWithPopupFunc,
    sendEmailVerificationFunc,
    sendPasswordResetEmailFunc,
    loading
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
