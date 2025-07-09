// src/Komponenter/Login/Login.jsx
import React, { useState, useEffect } from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import { auth } from "./firebase-config"; // Correct relative path
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, FacebookAuthProvider, setPersistence, browserSessionPersistence } from "firebase/auth"; // Corrected import
import "./Login.css";

function Login() {
  const [error, setError] = useState("");
  const [user, setUser] = useState(null); // State to store the authenticated user

  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user); // Update the state when the user logs in or logs out
    });

    // Cleanup on component unmount
    return () => unsubscribe();
  }, []);

  // Handle Google login
  const handleGoogleLogin = async () => {
    const googleProvider = new GoogleAuthProvider(); // Firebase Google provider

    try {
      await setPersistence(auth, browserSessionPersistence);  // Ensure session persistence is set to session-only
      const result = await signInWithPopup(auth, googleProvider); // Show Google login popup
      const user = result.user;
      console.log("User Info:", user);
    } catch (error) {
      setError("Failed to sign in with Google.");
      console.error(error);
    }
  };

  // Handle Facebook login
  const handleFacebookLogin = async () => {
    const fbProvider = new FacebookAuthProvider(); // Firebase Facebook provider

    try {
      await setPersistence(auth, browserSessionPersistence);  // Ensure session persistence is set to session-only
      const result = await signInWithPopup(auth, fbProvider); // Show Facebook login popup
      const user = result.user;
      console.log("User Info:", user);
    } catch (error) {
      setError("Failed to sign in with Facebook.");
      console.error(error);
    }
  };

  // Handle user logout
  const handleLogout = async () => {
    try {
      // Sign out the user
      await signOut(auth);
      console.log("User logged out");

      // Explicitly clear Firebase session cookies, localStorage, and sessionStorage
      // Clear localStorage and sessionStorage
      localStorage.clear();
      sessionStorage.clear();

      // Remove Firebase session cookies
      document.cookie.split(";").forEach((cookie) => {
        document.cookie = cookie
          .replace(/^ +/, "")
          .replace(/(.+)$/, "$1=;expires=" + new Date().toUTCString() + ";path=/");
      });

      // Force reload of the page to ensure all session data is cleared
      window.location.reload(); // Refresh to ensure the session is reset
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <>
      <Header />

      <main className="login-container">
        <h1>Välkommen till Nutri</h1>
        <p>Var vänlig ange email/användarnamn</p>

        <form className="login-form">
          <input type="email" className="input-field" placeholder="Email" required />
          <input type="password" className="input-field" placeholder="Password" required />
          <button type="submit" className="login-button">
            Logga in
          </button>
        </form>

        {error && <p className="error-message">{error}</p>}

        <div className="divider">
          <span>eller logga in med</span>
        </div>

        <div className="social-login">
          <button className="social-button google-button" onClick={handleGoogleLogin}>
            <img src="/google-icon.png" alt="Google" className="social-icon" />
            Continue with Google
          </button>
        </div>

        <div className="social-login">
          <button className="social-button facebook-button" onClick={handleFacebookLogin}>
            <img src="/facebook-icon.png" alt="Facebook" className="social-icon" />
            Continue with Facebook
          </button>
        </div>

        {/* Show the user's name if logged in */}
        {user ? (
          <div>
            <p>Hello, {user.displayName}!</p> {/* Display the user's name */}
            <button className="logout-button" onClick={handleLogout}>Log Out</button> {/* Log out button */}
          </div>
        ) : (
          <div>
            <p>Please log in to see your name here.</p>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}


export default Login;
