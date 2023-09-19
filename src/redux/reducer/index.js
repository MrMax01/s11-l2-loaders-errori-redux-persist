// const initialState = {
//   jobFavorites: {
//     content: [],
//   },

//   isInFavorites: false,
// };

// const mainReducer = (state = initialState, action) => {
//   // da questa funzione, IN OGNI CASO o SITUAZIONE, dovrà PER FORZA ritornare IL NUOVO STATO o quanto meno quello PRECEDENTE

//   switch (action.type) {
//     // qui dentro ci inseriremo i vari casi, per i diversi "type" con cui l'action arriverà in momenti diversi dopo una "dispatch"

//     case "ADD_TO_FAVORITE":
//       return {
//         ...state,
//         jobFavorites: {
//           ...state.jobFavorites,
//           content: [...state.jobFavorites.content, action.payload],
//         },
//       };

//     case "REMOVE_FROM_FAVORITE":
//       return {
//         ...state,
//         jobFavorites: {
//           ...state.jobFavorites,
//           content: state.jobFavorites.content.filter((elem) => elem._id !== action.payload._id),
//         },
//       };

//     default:
//       return state;
//   }
// };

// export default mainReducer;
