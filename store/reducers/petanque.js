import { actionType } from '../../data/enums';

const initialState = {
  isPlaying: false,
  score: [0, 0],
};

const petanqueReducer = (state = initialState, action) => {
  switch (action.type) {
    //ADD SCORE
    case actionType.ADD_SCORE:
      const newScore = state.score;
      newScore[action.score] += 1;
      return { ...state, score: newScore };
    //REMOVE SCORE
    case actionType.REMOVE_SCORE:
      const removeScore = state.score;
      removeScore[action.score] -= 1;
      return { ...state, score: removeScore };
    //RESET SCORE
    case actionType.RESET_SCORE:
      return { ...state, score: [0, 0] };
  }
  return state;
};

export default petanqueReducer;
