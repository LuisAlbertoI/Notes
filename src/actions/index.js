import { ADD_NOTE, REMOVE_NOTE} from './actions-types/index';

export function addNote (datos){
    return {
        type: ADD_NOTE,
        datos
    }
}

export function removeNote (id){
    return {
        type: REMOVE_NOTE,
        id
    }
}