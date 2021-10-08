import React from "react";
import Layout from "../../components/Layout";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as styles from "./{mdx.slug}.module.css";

const BlogPost = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);
  return (
    <Layout title={data.mdx.frontmatter.title}>
      <div className={styles.textContent}>
        <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
        <p>
          Photo Credit:{" "}
          <a href={data.mdx.frontmatter.hero_image_credit_link}>
            {data.mdx.frontmatter.hero_image_credit_text}
          </a>
        </p>
        <h3>{data.mdx.frontmatter.date}</h3>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
        <Link to="/blog" className={styles.blogsLink}>
          Back to Posts
        </Link>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`;
export default BlogPost;
