import { COLOR_CHANGED, STATUS_CHANGED } from "./actionTypes";

export const status_changed = (status) => {
  return {
    type: STATUS_CHANGED,
    payload: status,
  };
};

export const color_changed = (color, changeType) => {
  // changeType for toggling the color wheither it is seleting for removing
  return {
    type: COLOR_CHANGED,
    payload: {
      color,
      changeType,
    },
  };
};
