import React from 'react';
import Link from 'gatsby-link';
import PostListing from '../components/Posts/PostListing';
import './index.css';
import Sato from '../images/sato.png';
import Fynd from '../images/fynd.png';
import Liveninja from '../images/liveninja.png';
import Devnoir from '../images/devnoir.png';


const IndexPage = ({ data }) => (
  <div>
    <div className="section">
      <h2>MY WORK</h2>
      <h5>Case Studies, Design Process, and Design Systems</h5>
      <ul>
        <li className="portfolio-entry">
          <img src={Sato} className="portfolio-img" />
          <div className="portfolio-entry-text">
            <h5>From Agency to Platform Product</h5>
            <h6>How we evolved our one-off solutions into enterprise software</h6>
          </div>
        </li>

      <li className="portfolio-entry">
        <img src={Fynd} className="portfolio-img" />
        <div className="portfolio-entry-text">
          <h5>User Experience Design Team of One</h5>
          <h6>Juggling UX, Marketing, and Web Development</h6>
        </div>
      </li>

      <li className="portfolio-entry">
        <img src={Liveninja} className="portfolio-img" />
        <div className="portfolio-entry-text">
          <h5>Evolving from startup to an acquired company</h5>
          <h6>Applying design thinking to design team management</h6>
        </div>
      </li>

      <li className="portfolio-entry">
        <img src={Devnoir} className="portfolio-img" />
        <div className="portfolio-entry-text">
          <h5>Growing a Miami Tech Community</h5>
          <h6>How Two Techies Immersed themselves in the needs of the commmunity</h6>
        </div>
      </li>
      </ul>
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
