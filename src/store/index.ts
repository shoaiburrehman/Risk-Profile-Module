import { configureStore } from "@reduxjs/toolkit";
import questionnaireSlice from "./reducers/questionnaire.slice";

const store = configureStore({
    reducer: {
      questionnaire: questionnaireSlice.reducer
    }
});

export const { calculateScore, updateResponse } = questionnaireSlice.actions;

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
  