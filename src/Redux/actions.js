import { nanoid } from "@reduxjs/toolkit";

const id = nanoid();

export const addName = (name) => {
  return {
    type: "name/ADD",
    payload: {
      id: id,
      name,
    },
  };
};
