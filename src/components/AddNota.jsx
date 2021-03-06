import React, { Component } from 'react';
import styled from 'styled-components';
import CreateNote from './CreateNote';
import { connect } from 'react-redux';
import { openNewNote } from '../actions/index';

const AddStyle = styled.div`
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
`;

const AddContainer = styled.div`
    max-width: 1270px;
    margin: 0 auto;
    padding: 0 10px;
`;

const AddButton = styled.div`
    width: 50px;
    height: 50px;
    color: white;
    background: #FF9D1F;
    font-size: 1.5rem;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    float: right;
    position: relative;
    bottom: 5px;
    transition-duration: .5s;
    :active{
        transform: scale(.8);
    }
`;

class AddNota extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        this.props.openNewNote();   
    }
    render(){
        return(
            <div className="AddNote">
                <AddStyle>
                    <AddContainer>
                        <AddButton onClick={this.handleClick}>
                            <i className="fas fa-plus"></i>
                        </AddButton>
                    </AddContainer>
                </AddStyle>
                {this.props.active &&
                    <CreateNote />
                }
            </div>
        );
    }
}

function mapState (state){
    return{
        active: state.active
    }
}

function mapDispatch (dispatch){
    return{
        openNewNote: ()=>{dispatch(openNewNote())}
    }
}

export default connect(mapState, mapDispatch)(AddNota);