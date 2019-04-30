import React, { Component } from 'react';
import { connect } from 'react-redux';
import Main from './components/Main';
import Intro from './components/Intro';
import Items from './components/Items';
import AddNota from './components/AddNota';

class App extends Component{
  render(){
    return (
      <Main>
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