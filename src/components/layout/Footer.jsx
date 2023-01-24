import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>CS Food Wala</h2>

        <p>We are trying to give you the best taste possible.</p>
        <br />

        <em>We give attention to genuine feedback.</em>

        <strong>All right received @CSFoodwala</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>
        <a href="https://www.linkedin.com/in/shubham-vishwakarma-6b22b0206">
          < AiFillLinkedin />
        </a>
        <a href="https://github.com/SHUBHAM77108">
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
