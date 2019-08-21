import React from "react";
import { connect, styled } from "frontity";
import { getRegisteredStyles } from "@emotion/utils";

const frontImage = () => 
    <Container> 
        <Container1>
            <Frame1>
                <Door1>

                </Door1>
                
            </Frame1>

        </Container1>
        <Container2>
            <Frame2>
                <Door2>

                </Door2>
            </Frame2>
            
        </Container2>
        <Container3>
            <Frame3>
                <Door3>

                </Door3>
            </Frame3>
        </Container3>


    </Container>

export default connect (frontImage);

const Container = styled.div`
    display:flex;
    flex-direction:row;
    background:white;
    color: black;
    height:400px;
    width:100%;
    
`;

const Container1 = styled.div`
    display:flex;
    flex-direction:row;
    background:red;
    width:33.33333%;
    color: white;
    height:400px;

`;
const Container2 = styled.div`
    display:flex;
    flex-direction:row;
    background:black;
    width:33.33333%;
    color: white;
    height:400px;

`;

const Container3 = styled.div`
    display:flex;
    flex-direction:row;
    background:grey;
    color: white;
    height:400px;
    width:33.33333%;

`;

const Frame1 = styled.div`
perspective:@size;
position:absolute;
width:33.3333%;
height:400px;
background-color: #fff;

`;

const Frame2 = styled.div`
perspective:@size;
position:absolute;
width:33.3333%;
height:400px;
background-color: #fff;

`;

const Frame3 = styled.div`
perspective:@size;
position:absolute;
width:33.3333%;
height:400px;
background-color: #fff;

`;

const Door1 = styled.div`
      transition: transform 1s;
      transform-style: preserve-3d;
      transform-origin: right center;
      width: 100%;
      height: 100%;
      background-color:red;
      :hover {
          transform:rotateY(-90deg);
      }
`;
const Door2 = styled.div`
      transition: transform 1s;
      transform-style: preserve-3d;
      transform-origin: right center;
      width: 100%;
      height: 100%;
      background-color:black;
      :hover {
          transform:rotateY(-90deg);
      }
`;

const Door3 = styled.div`
      transition: transform 1s;
      transform-style: preserve-3d;
      transform-origin: right center;
      width: 100%;
      height: 100%;
      background-color:grey;
      :hover {
          transform:rotateY(-90deg);
      }
`;


