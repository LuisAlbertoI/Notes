import React, { Component } from 'react';
import { connect } from 'react-redux';
import Main from './components/Main';
import Intro from './components/Intro';
import Items from './components/Items';
import AddNota from './components/AddNota';
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Ubuntu', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
    background-color: #fff;
  }
`;

class App extends Component{
  render(){
    return (
      <Main>
        <GlobalStyle/>
          {this.props.notes.length === 0 ? <Intro intro={this.props.intro}/> :
            <Items/>
          }
          <AddNota/>
      </Main>
    );
  }
}

const mapState = (state) =>{
  return {
    notes: state.addNotes,
    intro: state.intro
  }
}

export default connect(mapState)(App);