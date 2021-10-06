import React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

// markup
const IndexPage = () => {
  return (
    <Layout title="Home Page">
      <h1>Welcome to my Gatsby Site</h1>

      <StaticImage src="../images/nice-guy.jpg" alt="some guy" />

      <p>I'm making this following the Gatsby tutorial!</p>
    </Layout>
  );
};

export default IndexPage;
