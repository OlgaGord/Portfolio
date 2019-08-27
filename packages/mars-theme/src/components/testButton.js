import React from 'react';
import { connect, styled } from "frontity";


class TestButton extends React.Component {

    constructor(props){
        super(props);
        this.testWrite = this.testWrite.bind(this);
        this.testStop = this.testStop.bind(this);
        this.testClear = this.testClear.bind(this);
        this.myRef = React.createRef();
        this.state = {
            value: '',
            intervalId: null,
            i: 0

        }
    }

    testWrite() {
      //alert("Great Write!");
      
        var i=this.state['i'];
          var txt = ' Search the photos of you favorite things';
          var speed = 50;
               function write(){
                if (i < txt.length) {
                    this.myRef.current.value += txt.charAt(i);
                        i++;
                        this.setState({i:i});
                } else {
                    this.myRef.current.value ='';
                    i=0;
                    this.setState({i:i});
                }
              //setTimeout(write, speed);
            }
              write = write.bind(this);
              this.setState({
                intervalId: setInterval(write, speed)
              });
    }

    testStop(){

        clearInterval(this.state['intervalId']);
        
    } 

    testClear(){
        clearInterval(this.state['intervalId']);
        this.myRef.current.value = "";
        // const isClicked = this.state.isClicked;
    } 

    
    render() {
      return (
        <Container>
            <input type="text" ref={this.myRef} onMouseOver={this.testWrite} onMouseLeave={this.testStop} onClick = {this.testClear}/>
 
            {/* <button onClick={this.testWrite}>Submit</button> */}
        </Container>

      );
    }
  }
  
export default connect(TestButton);

const Container = styled.div`
margin: 1%;
  & > input {
      width: 18rem;
  }
  
 
`;