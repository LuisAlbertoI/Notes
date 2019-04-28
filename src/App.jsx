import React, { Component } from 'react';
import { connect } from 'react-redux';
import Main from './components/Main';
import Intro from './components/Intro';
import Items from './components/Items';
import AddNota from './components/AddNota';
import CreateNota from './components/CreateNote';

class App extends Component{
  constructor(props) {
    super(props);
    this.estado = this.props.state.estado,
    this.intro = this.props.state.intro
  }

  render(){
    return (
      <Main>
        {! this.estado ? <Intro intro={this.intro}/> :
          <Items/>
        }
        <AddNota/>
      </Main>
    );
  }
}

const mapState = (state) =>{
  return {
    state: state
  }
}

export default connect(mapState)(App);