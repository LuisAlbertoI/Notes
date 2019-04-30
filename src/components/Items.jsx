import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { removeNote } from '../actions/index';

const ItemsStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const ItemStyle = styled.div`
    max-width: 232px;
    min-width: 200px;
    height: 300px;
    margin: 5px 5px;
    padding: 5px;
    background-color: #FFE684;
    position: relative;
    overflow: hidden;
`;

const ItemContent = styled.div`
    width: 100%;
    height: 88%;
    overflow: auto;
    ::-webkit-scrollbar{
        width: 8px;
        height: 8px;
    }
    ::-webkit-scrollbar-thumb{
        background: #ccc;
        border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb:hover{
        background: #b3b3b3;
    }
`;

const P = styled.p`
    margin: 0;
`;

const ItemName = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: #FFD74F;
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
`;

const H4 = styled.h4`
    margin: 0;
    padding: 0 4px;
`;

const ItemDelete = styled.div`
    width: 40px;
    height: inherit;
    line-height: 40px;
    color: #2A2B4A;
    background: #FFD74F;
    cursor: pointer;
    text-align: center;
    font-size: 1.5rem;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 2;
    transition-duration: .2s;
    :active{
        transform: scale(.9);
    }
`;

class Items extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(id){
        this.props.removeNote(id)
    }
    render(){
        const item = this.props.state.map((item, index)=>{
            return(
                <ItemStyle key={index}>
                    <ItemContent className="ItemContent">
                        <P>{item.note}</P>
                    </ItemContent>
                    <ItemName>
                        <H4>{item.name}</H4>
                        <ItemDelete onClick={()=>{this.handleClick(item.id)}}>
                            <i className="fas fa-trash-alt"></i>
                        </ItemDelete>
                    </ItemName>
                </ItemStyle>
            );
        });
        return(
            <ItemsStyle>
                {item}
            </ItemsStyle>
        );
    }
}

const mapState = (state) =>{
    return{
        state: state.addNotes
    }
}

const mapDispatch = (dispatch)=>{
    return{
        removeNote: (id)=> {dispatch(removeNote(id))}
    }
}

export default connect(mapState, mapDispatch)(Items);