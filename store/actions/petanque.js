import { actionType } from '../../data/enums';

export const addScore = (score) => {
  return { type: actionType.ADD_SCORE, score };
};

export const removeScore = (score) => {
  return { type: actionType.REMOVE_SCORE, score };
};

export const resetScore = () => {
  return { type: actionType.RESET_SCORE };
};
