import React from 'react';
import styled, {keyframes} from 'styled-components';
import { connect } from 'react-redux';

const Note = styled.div`
    width: 100%;
    padding: 20vh 0;
    background-color: rgba(0, 0, 0, .8);
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 3;
`;

const iniciar = keyframes`
    0%{
        transform: scale(0);
    }
    100%{
        transform: scale(1);
    }
`;

const NoteContainer = styled.div`
    max-width: 576px;
    height: 350px;
    margin: 0 auto;
    padding: 10px;
    transform: scale(0);
    animation: ${iniciar} .2s linear forwards;
    overflow: hidden;
    text-align: center;
    background: white;
`;

const Textarea = styled.textarea`
    width: 99%;
    height: 260px;
    resize: none;
`;

const Input = styled.input`
    width: 99%;
    height: 30px;
    padding: 0 1px;
    margin: 0 0 15px 0;
`;

const Button = styled.button`
    width: 100%;
    height: 30px;
`;

const CreateNota = ()=>{
    return(
        <Note>
            <NoteContainer>
                <form action="">
                    <Textarea name="nota" placeholder="Agrega tu nota Aqui" required></Textarea>
                    <Input type="text" placeholder="Agrega un nombre para tu nota" required/>
                    <Button>Enviar</Button>
                </form>
            </NoteContainer>
        </Note>
    );
}

export default CreateNota;