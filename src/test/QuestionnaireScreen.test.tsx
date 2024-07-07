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

  it('renders the first question correctly', () => {
    const { getByText } = render(
      <Provider store={store}>
        <QuestionnaireScreen navigation={mockNavigation} />
      </Provider>
    );

    const questionText = questions[0].question;
    expect(getByText(questionText)).toBeDefined();
  });

  it('handles option selection and displays the correct option', () => {
    const { getByText, getAllByText } = render(
      <Provider store={store}>
        <QuestionnaireScreen navigation={mockNavigation} />
      </Provider>
    );

    const optionText = questions[0].options[0].text;
    fireEvent.press(getAllByText(optionText)[0]);
    expect(getAllByText(optionText)[0]).toBeDefined();
  });

  it('shows error text when next is pressed without selecting an option', () => {
    const { getByText } = render(
      <Provider store={store}>
        <QuestionnaireScreen navigation={mockNavigation} />
      </Provider>
    );

    fireEvent.press(getByText('Next'));
    expect(getByText('Please select an option')).toBeDefined();
  });

  it('navigates to the next question after option selection and next press', () => {
    const { getByText, getAllByText } = render(
      <Provider store={store}>
        <QuestionnaireScreen navigation={mockNavigation} />
      </Provider>
    );

    const optionText = questions[0].options[0].text;
    fireEvent.press(getAllByText(optionText)[0]);
    fireEvent.press(getByText('Next'));

    const nextQuestionText = questions[1].question;
    expect(getByText(nextQuestionText)).toBeDefined();
  });

  it('navigates to the Result screen after the last question', () => {
    store = mockStore({
      questionnaire: {
        score: 0,
      },
    });

    const { getByText, getAllByText } = render(
      <Provider store={store}>
        <QuestionnaireScreen navigation={mockNavigation} />
      </Provider>
    );

    for (let i = 0; i < questions.length; i++) {
      const optionText = questions[i].options[0].text;
      fireEvent.press(getAllByText(optionText)[0]);
      fireEvent.press(getByText(i < questions.length - 1 ? 'Next' : 'Submit'));
    }

    expect(mockNavigation.replace).toHaveBeenCalledWith('Result');
  });
});
