import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNote } from '../actions/index';
import ViewNote from './ViewNote';

class Items extends Component{
    render(){
        const item = this.props.state.map((item, index)=>{
            return(
                <div className="Item" key={index}>
                    <p>{item.note}</p>
                    <div className="Item-Name">
                        <h4>{item.name}</h4>
                    </div>
                </div>
            );
        });
        return(
            <div className="Items">
                {item}
            </div>
        );
    }
}

const mapState = (state) =>{
    return{
        state: state.addNotes
    }
}

const mapDispatch = ( dispatch ) =>{
    return{
        addNote: dispatch(addNote({id: 1, name: 'luis', note: 'hola me llamo luis y soy genial'}))
    }
}


export default connect(mapState, mapDispatch)(Items);