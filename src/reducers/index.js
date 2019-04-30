import { ADD_NOTE, REMOVE_NOTE } from '../actions/actions-types/index';

const initState = {
  intro: 'No Hay Notas Agregadas',
  addNotes: [],
  estado: 0
}

const noteReducer = (state = initState, action) =>{
    switch(action.type){
      case ADD_NOTE:
      return {
        ...state,
        addNotes: [...state.addNotes, action.datos],
        estado: + 1
      }
      case REMOVE_NOTE:
      return {
        ...state,
        removeNote: state,
        estado: - 1
      }
      default:
      return state;
    }
}

export default noteReducer;