import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Header from "./header";
import List from "./list";
import Post from "./post";
import Page404 from "./page404.js";
import Loading from "./loading";
import FrontImage from "./frontImage";
import customStyles from '../../css/style.css';
//import bootstrapStyles from 'bootstrap/dist/css/bootstrap.min.css';

const backColor = "#3a151c";
const backColor2 = "#805f58";


const globalStyles = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
      background-image: linear-gradient(to bottom right, ${backColor}, ${backColor2});
      background-repeat: no-repeat;
      
  }
  a,
  a:visited {
    color: white;
    text-decoration: none;
  }
`;

const Theme = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    <>
    
      <Head>
        <title>{state.frontity.title}</title>
        <meta name="description" content={state.frontity.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <html lang="en" />

      </Head>
      {/* <Global styles={css(globalStyles, customStyles, bootstrapStyles)} /> */}
      <Global styles={css(globalStyles, customStyles)} />
      <HeadContainer>
        <Header />
         {data.isHome && (
          <FrontImage /> 
       )}  
        
      </HeadContainer>
      <Body>
          
        {data.isFetching && <Loading />}
        {data.isArchive && <List />}
        {data.isPostType && <Post />}
        {data.is404 && <Page404 />}
      </Body>
    
      
    </>
  );
};

export default connect(Theme);


const HeadContainer = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  
  
`;

const Body = styled.div`
  display: flex;
  flex-direction:row;
  justify-content: center;
   
`;

