import { actionType } from '../../data/enums';
import { GAME_OPTIONS, STROKES } from '../../data/currentGame';

const initialState = {
  isPlaying: false,
  options: GAME_OPTIONS,
  whatHole: 1,
  playerTurn: 1,
  strokeCounter: 0,
  strokes: STROKES,
};

const minigolfReducer = (state = initialState, action) => {
  switch (action.type) {
    //NEW GAME
    case actionType.NEW_GAME:
      let clearStrokes = state.strokes;
      clearStrokes = ResetStrokes(clearStrokes);
      console.log(clearStrokes);
      return {
        ...state,
        isPlaying: true,
        options: action.options,
        whatHole: 1,
        playerTurn: 1,
        strokes: clearStrokes,
      };
    //RESET GAME
    case 'RESET_STORE':
      console.log(state);
      // return state;
      return {
        ...state,
        isPlaying: false,
        options: GAME_OPTIONS,
        whatHole: 1,
        playerTurn: 1,
        strokeCounter: 0,
        strokes: STROKES,
      };
    //CHANGE HOLE
    case actionType.CHANGE_HOLE:
      return { ...state, whatHole: action.newHole, playerTurn: 1 };
    //NEXT PLAYER
    case actionType.NEXT_PLAYER:
      return { ...state, playerTurn: action.newPlayer };
    //CHANGE STROKES
    case actionType.CHANGE_STROKES:
      const newStrokes = state.strokes;
      newStrokes[action.player][action.hole] = action.strokes;
      newStrokes[action.player][18] = CalculateSum(newStrokes[action.player]);
      return { ...state, strokes: newStrokes };
    //END MINIGOLF
    case actionType.END_MINIGOLF:
      console.log('isPlaying = ' + state.isPlaying);
      return { ...state, isPlaying: false };
    default:
      return state;
  }
};

const ResetStrokes = (allStrokes) => {
  for (let i = 0; i < allStrokes[0].length; i++) {
    allStrokes[0][i] = 0;
    allStrokes[1][i] = 0;
    allStrokes[2][i] = 0;
    allStrokes[3][i] = 0;
    allStrokes[4][i] = 0;
    allStrokes[5][i] = 0;
  }
  return allStrokes;
};

const CalculateSum = (playerStrokes) => {
  let tot = 0;
  for (let i = 0; i < playerStrokes.length - 1; i++) {
    tot += playerStrokes[i];
  }
  return tot;
};

export default minigolfReducer;
