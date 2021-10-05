import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

const BlogPage = ({ data }) => {
  return (
    <Layout title="Blog Posts">
      {data.allMdx.nodes.map((node) => {
        const {
          id,
          frontmatter: { title, date },
          body,
        } = node;
        return (
          <article key={id}>
            <h2>{title}</h2>
            <h3>Posted: {date}</h3>
            <MDXRenderer>{body}</MDXRenderer>
          </article>
        );
      })}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date
          title
        }
        id
        body
      }
    }
  }
`;
export default BlogPage;
