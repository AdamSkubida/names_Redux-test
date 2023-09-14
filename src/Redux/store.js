import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";

const initialState = {
  names: [
    { id: 0, name: "Adam" },
    { id: 1, name: "Paula" },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "name/ADD":
      return {
        ...state,
        names: [...state.names, action.payload],
      };
    default:
      return state;
  }
};

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
