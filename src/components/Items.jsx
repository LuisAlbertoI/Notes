import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNote } from '../actions/index';
import styled from 'styled-components';

const ItemsStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
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
    overflow-y: auto;
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
    cursor: pointer;
    text-align: center;
    font-size: 1.5rem;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 2;
`;

class Items extends Component{
    render(){
        const item = this.props.state.map((item, index)=>{
            return(
                <ItemStyle key={index}>
                    <ItemContent className="ItemContent">
                        <P>{item.note}</P>
                    </ItemContent>
                    <ItemName>
                        <H4>{item.name}</H4>
                        <ItemDelete>
                            <i className="fas fa-trash-alt"></i>
                        </ItemDelete>
                    </ItemName>
                </ItemStyle>
            );
        });
        return(
            <ItemsStyle>
                {item}
                {item}
                {item}
                {item}
                {item}
                {item}
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

const mapDispatch = ( dispatch ) =>{
    return{
        addNote: dispatch(addNote({id: 1, name: 'luis ausdyyaudsai asdsayd sjdasdhd ', note: 'hola me llamo luis y soy genial mhgdhfgdjhf msjhfdggdjf dsfgjhsdgf sdfgjshdfds s sd sfd gsg tg str sg  gf g dg dg sdf  df g df g dfg df g df df  g fdsg d f gd gdsfg  fds g fddfgsdhjfgjsfd dsfghjsdfsdf sdfjsdf sdfhjgsfsd sdfjhsgdf dsfjhgsdfhjsdf sdfhgsdjfsdf jhsdgfjhdfgsd fsdfg hsdhfjgjdsfds fsd fgjds hjfghjdsf dsf sdhfjdfdsfds fdjfghdsfds jfgjhds fsdjfsdjhf ds gfhsjdfjhsgd fkjdshfksdh fsd fhksdhfherifkfksbfsjhdfjhsdf dfsdh jkfh jdfdfksd fd fds kfdjsfh'}))
    }
}


export default connect(mapState, mapDispatch)(Items);