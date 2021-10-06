import React from "react";
import Layout from "../../components/layout";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

const BlogPage = ({ data }) => {
  return (
    <Layout title="Blog Posts">
      {data.allMdx.nodes.map((node) => {
        const {
          id,
          frontmatter: { title, date },
        } = node;
        return (
          <article key={id}>
            <Link to={`/blog/${node.slug}`}>
              <h2>{title}</h2>
            </Link>
            <h3>Posted: {date}</h3>
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
        slug
      }
    }
  }
`;
export default BlogPage;
