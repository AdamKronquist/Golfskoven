import { actionType } from '../../data/enums';

export const newGame = (options) => {
  return { type: actionType.NEW_GAME, options };
};

export const changeHole = (newHole) => {
  return { type: actionType.CHANGE_HOLE, newHole };
};

export const nextPlayer = (newPlayer) => {
  return { type: actionType.NEXT_PLAYER, newPlayer };
};

export const resetStore = () => {
  return { type: 'RESET_STORE' };
};

export const changeStrokes = (player, hole, strokes) => {
  return { type: actionType.CHANGE_STROKES, player, hole, strokes };
};

export const endMinigolf = () => {
  return { type: actionType.END_MINIGOLF };
};
