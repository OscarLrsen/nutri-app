import React from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import "./Login.css";

function Login() {
  return (
    <>
      <Header />

      <main className="login-container">
        <h1>Logga in</h1>
        <p>Detta är din nya inloggningssida.</p>

        <form className="login-form">
          <input
            type="email"
            className="input-field"
            placeholder="Email"
            required
          />
          <input
            type="password"
            className="input-field"
            placeholder="Password"
            required
          />
          <button type="submit" className="login-button">
            Logga in
          </button>
        </form>

        <div className="divider">
          <span>eller logga in med</span>
        </div>

        <div className="social-login">
          <button className="social-button google-button">Google</button>
          <button className="social-button apple-button">Apple</button>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Login;
