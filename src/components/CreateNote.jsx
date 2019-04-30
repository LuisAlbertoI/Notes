import React, {Component} from 'react';
import styled, {keyframes} from 'styled-components';
import { addNote, closeNewNote } from '../actions/index';
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
    height: 400px;
    margin: 0 auto;
    overflow: hidden;
    padding: 0px 10px 10px 10px;
    position: relative;
    transform: scale(0);
    animation: ${iniciar} .2s linear forwards;
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

const CloseNoteCont = styled.div`
    width: 100%;
    height: 40px;
    padding: 2px 0;
    display: flex;
    justify-content: center;
`;

const CloseNote = styled.div`
    width: 40px;
    height: 40px;
    color: white;
    border-radius: 50%;
    background: #F15839;
    cursor: pointer;
    display: flex;
    font-size: 2rem;
    justify-content: center;
    align-items: center;
    transition-duration: .5s;
        :hover{
            transform: rotate(120deg);
        }
        :active{
            transform: scale(.9);
        }
`;

var index = 0;

class CreateNota extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleSubmit (e) {
        index ++;
        e.preventDefault();
        const data = {id: index, name: e.target[1].value, note: e.target[0].value}
        this.props.addNote(data);
        this.props.closeNewNote();
    }
    handleClick(){
        this.props.closeNewNote();
    }
    render(){
        return(
            <Note id="nota">
                <NoteContainer>
                    <CloseNoteCont>
                        <CloseNote onClick={this.handleClick}>
                        <i className="fas fa-times"></i>
                        </CloseNote>
                    </CloseNoteCont>
                    <form action="" onSubmit={this.handleSubmit}>
                        <Textarea name="nota" placeholder="Agrega tu nota Aqui" required></Textarea>
                        <Input type="text" placeholder="Agrega un nombre para tu nota" required/>
                        <Button>Agregar Nota</Button>
                    </form>
                </NoteContainer>
            </Note>
        );
    }
}

const mapState = (state) =>{
    return {
      state: state,
      active: state.active
    }
}

const mapDispatch = (dispatch)=>{
    return{
        addNote: (datos)=>{dispatch(addNote(datos))},
        closeNewNote: ()=>{dispatch(closeNewNote())}
    }
}

export default connect(mapState, mapDispatch)(CreateNota);