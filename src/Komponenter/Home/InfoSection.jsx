import React from "react";
import imageMap from "../../imageMap";
import "./Home.css"; // om du har dina stilar där

export default function InfoSection() {
  return (
    <section className="InfoSection">
      <h2>How the Delivery Works</h2>
      <div className="info-content">
        <div className="steps-column">
          <div className="step-item">
            <div className="step-icon">
              <img src={imageMap["Ordering.png"]} alt="Step 1" />
            </div>
            <div className="step-text">
              <p><strong>1.</strong> Order through our website</p>
            </div>
          </div>

          <div className="step-item">
            <div className="step-icon">
              <img src={imageMap["Food-Drone.png"]} alt="Step 2" />
            </div>
            <div className="step-text">
              <p><strong>2.</strong> Food is dispatched by drone</p>
            </div>
          </div>

          <div className="step-item">
            <div className="step-icon">
              <img src={imageMap["Delivered.png"]} alt="Step 3" />
            </div>
            <div className="step-text">
              <p><strong>3.</strong> Delivered to your front door</p>
            </div>
          </div>
        </div>

        <div className="info-image">
          <img src={imageMap["droneChat.png"]} alt="Drone delivery process" />
        </div>
      </div>
    </section>
  );
}
