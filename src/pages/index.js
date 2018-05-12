import React from 'react'
import Link from 'gatsby-link';
import PostListing from '../components/Posts/PostListing';
import './index.css'


const IndexPage = ({ data }) => (
  <div>
    <div className="section">
      <h2>MY WORK</h2>
      <h5>Case Studies, Design Process, and Design Systems</h5>
    </div>
    <div className="section">
    <h2>MY WRITING</h2>
    <h5>My thoughts, my design process, and career</h5>
    {data.allContentfulBlogPost.edges.map(({node}) => (
     <PostListing key={node.id} post={node} />
   ))}
   </div>
  </div>
);

export default IndexPage

export const query = graphql `
  query SiteMeta {
    site {
    siteMetadata {
      title
      desc
    }
  }
  allContentfulBlogPost {
    edges {
      node {
        title
        body {
    				childMarkdownRemark {
             excerpt
           }
         }
        createdAt(formatString: "MM DD, YYYY")
        slug
        id
      }
    }
  }
}
`;
