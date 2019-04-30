import { ADD_NOTE, REMOVE_NOTE, OPEN_NEW_NOTE, CLOSE_NEW_NOTE } from './actions-types/index';

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

export function openNewNote (){
    return {
        type: OPEN_NEW_NOTE
    }
}
export function closeNewNote (){
    return {
        type: CLOSE_NEW_NOTE
    }
}