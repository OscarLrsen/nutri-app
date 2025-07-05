import React from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import "./Login.css";

function Login() {
  return (
    <>
      <Header />

      <main className="login-container">

        <h1 className="login-title">Logga in till din hälsosamma framtid</h1>

        <form className="login-form">
          <input
            type="email"
            className="login-input"
            placeholder="Email"
            required
          />
          <input
            type="password"
            className="login-input"
            placeholder="Password"
            required
          />
          <button type="submit" className="login-button">
            Logga in
          </button>
        </form>

        <div className="divider">
          <span>Eller logga in med</span>
        </div>

        <div className="social-login">
          <button className="social-button">Google</button>
          <button className="social-button">Apple</button>
        </div>
      </main>

      <div className="signup-container">
        <span className="signup-text">Inte medlem?</span>
        <button className="signup-button">Skapa konto</button>
      </div>
      <Footer />
    </>
  );
}

export default Login;
