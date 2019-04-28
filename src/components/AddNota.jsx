import React, { Component } from 'react';
import styled from 'styled-components';

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

const AddIcon = styled.i`
    color: white;
`;

class AddNota extends Component{
    render(){
        const handleClick =()=> {

        }
        return(
            <AddStyle>
                <AddContainer>
                    <AddButton onClick={handleClick}>
                        <AddIcon className="fas fa-plus"></AddIcon>
                    </AddButton>
                </AddContainer>
            </AddStyle>
        );
    }
}

export default AddNota;