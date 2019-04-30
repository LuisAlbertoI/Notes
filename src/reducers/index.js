import { ADD_NOTE, REMOVE_NOTE, OPEN_NEW_NOTE, CLOSE_NEW_NOTE  } from '../actions/actions-types/index';

const initState = {
  intro: 'No Hay Notas Agregadas',
  addNotes: [],
  active: null
}

const noteReducer = (state = initState, action) =>{
    switch(action.type){
      case ADD_NOTE:
      return {
        ...state,
        addNotes: [...state.addNotes, action.datos]
      }
      case REMOVE_NOTE:
      let newNotes = state.addNotes.filter(item=> action.id !== item.id)
      return {
        ...state,
        addNotes: newNotes
      }
      case OPEN_NEW_NOTE:
      return {
        ...state,
        active: state.active = true
      }
      case CLOSE_NEW_NOTE:
      return {
        ...state,
        active: state.active = false
      }
      default:
      return state;
    }
}

export default noteReducer;