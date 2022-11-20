import { STATUS_CHANGED, COLOR_CHANGED } from "./actionTypes";
import { initialState } from "./initialState";

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUS_CHANGED:
      return {
        ...state,
        status: action.payload,
      };

    case COLOR_CHANGED:
      const { color, changeType } = action.payload;

      // method one

      //   return {
      //     ...state,
      //     colors: changeType === "add" ? [...state.colors, color] : state.colors.filter((c) => c !== color),

      //   };

      // method 2

      // const colors = state.colors;
      // if (changeType === "add") {
      //     if (colors.includes(color)) {
      //         return state;
      //     } else {
      //         return {
      //             ...state,
      //             colors: [...colors, color],
      //         };
      //     }
      // } else if (changeType === "remove") {
      //     return {
      //         ...state,
      //         colors: colors.filter((c) => c !== color),
      //     };
      // } else {
      //     return state;
      // }

      switch (changeType) {
        case "added":
          return {
            ...state,
            colors: [...state.colors, color],
          };
        case "removed":
          return {
            ...state,
            colors: state.colors.filter((c) => c !== color),
          };

        default:
          return state;
      }

    default:
      return state;
  }
};

export default filterReducer;
