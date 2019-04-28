import { ADD_NOTE, REMOVE_NOTE } from '../actions/actions-types/index';

const initState = {
  intro: 'No Hay Notas Agregadas',
  addNotes: [],
  estado: true,
  save: false,
  visibility: false
}

const noteReducer = (state = initState, action) =>{
    switch(action.type){
      case ADD_NOTE:
      return {
        ...state,
        addNotes: [...state.addNotes, action.datos]
      }
      case REMOVE_NOTE:
      return {
        ...state,
        removeNote: state,
      }
      default:
      return state;
    }
}

export default noteReducer;