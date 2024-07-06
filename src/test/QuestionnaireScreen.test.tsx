import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import QuestionnaireScreen, { QuestionnaireScreenNavigationProp } from '../screens/QuestionnaireScreen';
import { questions } from '../mock';

jest.useFakeTimers();

const mockStore = configureStore([]);

afterEach(() => {
  cleanup();
  jest.useRealTimers();
  jest.clearAllTimers();
});

const mockNavigation: QuestionnaireScreenNavigationProp = {
    navigate: jest.fn(),
    dispatch: jest.fn(),
    reset: jest.fn(),
    goBack: jest.fn(),
    isFocused: jest.fn(),
    getParent: jest.fn(),
    setParams: jest.fn(),
    addListener: jest.fn(),
    removeListener: jest.fn(),
    canGoBack: jest.fn(),
    setOptions: jest.fn(),
    getState: jest.fn(),
    getId: jest.fn(),
    replace: jest.fn(),
    push: jest.fn(),
    pop: jest.fn(),
    popToTop: jest.fn(),
  };
  
describe('QuestionnaireScreen', () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      questionnaire: {
        score: 0,
      },
    });
  });

  it('renders correctly', () => {
    const { getByText } = render(
      <Provider store={store}>
        <QuestionnaireScreen navigation={mockNavigation} />
      </Provider>
    );

    const optionText = questions[0].question;
    expect(getByText(optionText)).toBeDefined();
  });

  it('handles option selection and navigation correctly', () => {
    const { getByText, getAllByText } = render(
      <Provider store={store}>
        <QuestionnaireScreen navigation={mockNavigation} />
      </Provider>
    );
  
    const optionText = questions[0].options[0].text;
    fireEvent.press(getAllByText(optionText)[0]);  
  });
});
