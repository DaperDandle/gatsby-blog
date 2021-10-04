import React from "react";
import { Link } from "gatsby";
import {
  navFooter,
  link,
  container,
  heading,
} from "../components/layout.module.css";

const Layout = ({ title, children }) => {
  return (
    <>
      <nav className={navFooter}>
        <ul style={{ listStyle: "none" }}>
          <li>
            <Link to="/" className={link}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={link}>
              About
            </Link>
          </li>
        </ul>
      </nav>
      <main className={container}>
        <title>{title}</title>
        <h1 className={heading}>{title}</h1>
        {children}
      </main>
      <footer className={navFooter}>
        <h3>Contact Us!</h3>
        <a href="mailto:danielweber4420@gmail.com" className={link}>
          danielweber4420@gmail.com
        </a>
      </footer>
    </>
  );
};

export default Layout;
