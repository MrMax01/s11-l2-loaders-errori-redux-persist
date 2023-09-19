import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE } from "../actions";

const initialState = {
  content: [],
};

const favoriteJobReducer = (state = initialState, action) => {
  // da questa funzione, IN OGNI CASO o SITUAZIONE, dovrà PER FORZA ritornare IL NUOVO STATO o quanto meno quello PRECEDENTE

  switch (action.type) {
    // qui dentro ci inseriremo i vari casi, per i diversi "type" con cui l'action arriverà in momenti diversi dopo una "dispatch"

    case ADD_TO_FAVORITE:
      return {
        ...state,

        content: [...state.content, action.payload],
      };

    case REMOVE_FROM_FAVORITE:
      return {
        ...state,

        content: state.content.filter((elem) => elem._id !== action.payload._id),
      };

    default:
      return state;
  }
};
export default favoriteJobReducer;
