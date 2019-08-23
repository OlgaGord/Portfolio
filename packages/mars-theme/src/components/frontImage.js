import React from "react";
import { connect, styled } from "frontity";
import Loading from './loading';

const frontImage = ({state}) => {

const data = state.source.get(state.router.link);
  // Get the the post.
  const post = state.source[data.type][data.id];
  
  return  (
    <Container> 
        <Container1>
                 <Door1>
                    <img src={post.acf.img1.url}></img>
                </Door1>
    
         </Container1>
        <Container2>
                <Door2>
                    <img src={post.acf.img2.url}></img>
                </Door2>
                  
        </Container2>
        <Container3>
                <Door3>
                    <img src={post.acf.img3.url}></img> 
                </Door3>
        </Container3>


    </Container>
 ) 
};
export default connect (frontImage);

const Container = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    height:auto;
    width:100%;

`;

const Container1 = styled.div`
    display:flex;
    flex-direction:row;
 

`;
const Container2 = styled.div`
    display:flex;
    flex-direction:row;

    :hover {
        background-color:lightgrey;
    }
`;

const Container3 = styled.div`
    display:flex;
    flex-direction:row;

`;

const Door1 = styled.div`
      max-width: 100%;
      height: auto;
      
`;
const Door2 = styled.div`
      transition: transform 1s;
      transform-style: preserve-3d;
      transform-origin: right center;
      max-width: 100%;
      height: auto;
            
      :hover {
          transform:rotateY(-90deg);
          
      }

      .centerImage {
          
      }
`;

const Door3 = styled.div`
      max-width: 100%;
      height: auto;
      opacity:0.9;

`;
    


