import React from "react";
import { FaGithub, FaLinkedin, FaInstagramSquare } from "react-icons/fa";

export default function Footer() {
    return (
      <footer style={styles.footer}>
        <a href="https://github.com/shmuushmuu" target="_blank" rel="noreferrer">
          <FaGithub style={styles.a} />
        </a>
        <a
          href="https://www.linkedin.com/in/samfcraig/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin style={styles.a} />
        </a>
        <a
          href="https://www.instagram.com/shmuushmuu/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagramSquare style={styles.a} />
        </a>
      </footer>
    );
  }