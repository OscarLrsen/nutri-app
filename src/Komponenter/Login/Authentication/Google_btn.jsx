// src/GoogleSignIn.js
import React from 'react';
import { auth } from './firebase-config';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const GoogleSignIn = () => {
  // This function is called when the Google sign-in button is clicked
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider(); // Create a Google provider instance
    try {
      // Trigger the Google sign-in popup
      const result = await signInWithPopup(auth, provider);

      // The result contains user information
      const user = result.user;

      // Log user information to the console (for debugging)
      console.log('User Info:', user);
      console.log('Name:', user.displayName);
      console.log('Email:', user.email);
      console.log('Profile Picture:', user.photoURL);
      console.log('User ID:', user.uid);

      // Here you could store the user info in your app's state or context if needed
    } catch (error) {
      console.error('Error during Google login:', error.message);
    }
  };

  return (
    <div>
      {/* The button triggers the Google login */}
      <button onClick={handleGoogleLogin}>
        Sign in with Google
      </button>
    </div>
  );
};

export default GoogleSignIn;
