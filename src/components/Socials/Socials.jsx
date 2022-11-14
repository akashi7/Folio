import React from "react";
import "./Socials.css";

const Socials = () => {
  return (
    <section className="padding" id="social-section">
      <h3 className="section-title">Follow Me</h3>
      <div id="socials">
        <div className="linkedin">
          <a
            href="https://www.linkedin.com/in/nseko/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/social/linkedin2x.png" alt="LinkedIn" />
          </a>
        </div>
        <div className="facebook">
          <a
            href="https://www.facebook.com/christian.nseko/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/social/facebook2x.png" alt="Facebook" />
          </a>
        </div>
        <div className="instagram">
          <a
            href="https://www.instagram.com/akashi__chris/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/social/instagram2x.png" alt="Instagram" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Socials;
