import React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

// markup
const IndexPage = () => {
  return (
    <Layout title="Ned Flander's Blog">
      <h1>Welcome to my Gatsby Site</h1>

      <StaticImage src="../images/nice-guy.jpg" alt="Ned Flanders" />

      <p>Well hi there, it's positutely wonderful to see you!</p>
      <p>Come on in and check out my blog!</p>
    </Layout>
  );
};

export default IndexPage;
