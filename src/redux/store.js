import { configureStore, createAction } from "@reduxjs/toolkit";

const initialState = {
  contacts: {
    items: [],
  },
  filters: {
    name: "",
  },
};

const addContact = createAction("contacts/add");
const removeContact = createAction("contacts/remove");
const setFilter = createAction("filters/set");

function rootReducer(state = initialState, action) {
  return state;
}

export const store = configureStore({
  reducer: rootReducer,
});
