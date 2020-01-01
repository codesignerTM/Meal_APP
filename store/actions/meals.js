export const TOGGLE_FAVOURITE = "TOGGLE_FAVOURITE";

export const toggleFavourite = id => {
  return { type: TOGGLE_FAVOURITE, mealId: id };
};
