import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Work from "../images/work.png";
import Journal from "../images/Journal.png";
import Resources from "../images/Resources.png";
import Contact from "../images/Contact.png";


// import logo from '../images/logo.svg';

const HeaderWrapper = styled.div`
background: transparent;
overflow: hidden;
position: relative;
margin-bottom: 1.45rem;
height: ${({isHome}) => (isHome ? '120vh' : '20vh')};
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
display: flex;
justify-content: space-between;
`;

const MainNav = styled.nav`
ul {
  list-style: none;
  display: flex;
  li {
    margin-left: 10px;
    font-family: san-serif;
    a {
      text-decoration: none;
      color: white;
      &:hover {
        border-bottom: 3px solid white;
      }
    }
  }
}
`;

const HeroContent = styled.nav`
padding-top: 200px;
padding-left: 25px;
width: 600px;
h1 {
  font-family: 'Crimson Text', serif;
  font-weight: 400;
  letter-spacing: 1px;
  font-size: 45px;
  color: #333333;
}
h4 {
  font-family: 'Crimson Text', serif;
  font-weight: 400;
  letter-spacing: 2px;
  font-size: 24px;
  color: #333333;
}
h5 {
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  letter-spacing: 2px;
  font-size: 18px;
  color: #ECC54C;
}
h6 {
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  letter-spacing: 1px;
  font-size: 10px;
  color: #333333;
  text-align: center;
}
.intro-text {
  margin-bottom: 132px;
}
.sub-menu {
  display: inline;
}
.sub-menu-text{
  float: left;
  margin-top: 16px;
}
ul li {
  display: inline-block;
}
li {
  padding-left: 36px;
}
img {
  margin-bottom: 6px;
}
`;



export default class Header extends Component {
  componentDidUpdate = (prevProps, prevState) => {
    const { location } = this.props;
    if(location.pathname != prevProps.location.pathname) {
      if(this.props.location.pathname === '/') {
        this.wrapper.animate([
          { height: "20vh" },
          { height: "120vh" }
        ], {
          duration: 300,
          fill: "forwards",
          easing: "cubic-bezier(0.86, 0, 0.07, 1)",
          iterations: 1
        })
      // Come back here an use the reverse function in the
      // web animation API later
      } else {
        this.wrapper.animate([
          { height: "120vh" },
          { height: "20vh" }
        ], {
          duration: 300,
          fill: "forwards",
          easing: "cubic-bezier(0.86, 0, 0.07, 1)",
          iterations: 1
        })
      }
    }
  };

  render() {
    const { data, location } = this.props;
    return (
      <HeaderWrapper
      isHome={location.pathname === '/'}
      ref={wrapper => (this.wrapper = ReactDOM.findDOMNode(wrapper))}
      >
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
            <HeroContent>
              <div className="intro-text">
                <h1>Hello! I’m Lenora Porter and I am a Product Designer based in Miami, Florida.</h1>
                <h5>READ MORE</h5>
              </div>
              <div className="sub-menu">
                <h4 className="sub-menu-text">Skip To:</h4>
                  <ul>
                    <li>
                      <img src={Work} class="sub-menu-icons" />
                      <h6>WORK</h6>
                    </li>
                    <li>
                      <img src={Journal} class="sub-menu-icons" />
                      <h6>JOURNAL</h6>
                    </li>
                    <li>
                      <img src={Resources} class="sub-menu-icons" />
                      <h6>RESOURCES</h6>
                    </li>
                    <li>
                      <img src={Contact} class="sub-menu-icons" />
                      <h6>CONTACT</h6>
                    </li>
                  </ul>
              </div>
            </HeroContent>
          </h1>
          <MainNav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </MainNav>
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
  }
}
