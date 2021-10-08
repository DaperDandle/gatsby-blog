import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import {
  nav,
  footer,
  link,
  container,
  heading,
} from "../components/layout.module.css";
import { StaticImage } from "gatsby-plugin-image";

const Layout = ({ title, children }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <>
      <title>
        {data.site.siteMetadata.title} | {title}{" "}
      </title>

      <ul className={nav} style={{ listStyle: "none" }}>
        <li>
          <StaticImage src="../images/logo.png" style={{ width: "100px" }} />
        </li>
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
        <li>
          <Link to="/blog" className={link}>
            Blog Posts
          </Link>
        </li>
      </ul>

      <main className={container}>
        <h1 className={heading}>{title}</h1>
        {children}
      </main>
      <footer className={footer}>
        <h3>Contact Us!</h3>
        <a href="mailto:danielweber4420@gmail.com" className={link}>
          danielweber4420@gmail.com
        </a>
      </footer>
    </>
  );
};

export default Layout;
