// import { LOAD_RECIPES, SET_ACTIVE_RECIPE } from "../actions";

const initialState = {
  suggestIngredients: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_RECIPES:
      return { ...state, recipes: action.recipes };
    case SET_ACTIVE_RECIPE:
      return { ...state, activeRecipe: { ...action.recipe } };
    default:
      return state;
  }
};