import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import TestButton from './testButton';



const Header = ({ state }) => (
  <>
    <Container>
      <StyledLink link="/">
        <div className="titleSearch">
          <div>
            <Title>{state.frontity.title}</Title>
          </div>
          <div className="searchFrontPage">
            <TestButton/>
          </div>
        </div>
        
        
      </StyledLink>
      <Description>{state.frontity.description}</Description>

      

    </Container>
    <Nav />
  </>
);

export default connect(Header);


const Container = styled.div`
  width: 848px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 24px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 16px;
  color:#fff;
`;

const Description = styled.h4`
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

