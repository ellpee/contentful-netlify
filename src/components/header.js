import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Img from 'gatsby-image';


// import logo from '../images/logo.svg';

const HeaderWrapper = styled.div`
background: transparent;
overflow: hidden;
position: relative;
margin-bottom: 1.45rem;
height: 120vh;
h1 {
  img {
    height: 50px;
  }
}
`;

const HeaderContainer = styled.div`
margin: 0 auto;
maxWidth: 960px;
padding: 1.45rem 1.0875rem;
z-index: 2;
position: relative;
`;

const Header = ({ siteTitle, data }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          // logo
        </Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
    <Img
    style={{
      position: 'absolute',
      left: 0,
      top: 0,
      height: '100%',
      width: '100%',
    }}
    sizes={data.background.sizes} />
  </HeaderWrapper>
)

export default Header;
