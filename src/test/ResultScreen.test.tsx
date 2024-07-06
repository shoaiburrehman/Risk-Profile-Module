import React from 'react';
import { render, cleanup } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ResultScreen from '../screens/ResultScreen';
jest.useFakeTimers();

const mockStore = configureStore([]);

afterEach(() => {
  cleanup();
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
  jest.clearAllTimers();
});

describe('ResultScreen', () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      questionnaire: {
        score: 15,
      },
    });
  });

  it('renders correctly with correct risk profile', () => {
    const { getByText } = render(
      <Provider store={store}>
        <ResultScreen />
      </Provider>
    );
    expect(getByText('Score: 15')).toBeDefined();
    expect(getByText('Risk Profile: High')).toBeDefined(); // Adjust based on mock score
  });
});
