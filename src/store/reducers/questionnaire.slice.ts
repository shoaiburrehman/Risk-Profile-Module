// store.ts
import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface QuestionnaireState {
  responses: { [key: number]: number };
  score: number;
}

const initialState: QuestionnaireState = { responses: {}, score: 0 };

const questionnaireSlice = createSlice({
  name: 'questionnaire',
  initialState,
  reducers: {
    updateResponse: (state, action: PayloadAction<{ questionIndex: number; optionScore: number }>) => {
      state.responses[action.payload.questionIndex] = action.payload.optionScore;
    },
    calculateScore: (state) => {
      state.score = Object.values(state.responses).reduce((sum, score) => sum + score, 0);
    }
  }
});

export default questionnaireSlice;
