import { cleanup, fireEvent, render } from '@testing-library/react-native';
import HomeScreen, { HomeScreenNavigationProp } from '../screens/HomeScreen';

const mockNavigation: HomeScreenNavigationProp = {
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

afterEach(() => {
    cleanup();
    jest.clearAllTimers();
});
  
describe('HomeScreen', () => {
  it('renders correctly', () => {
    const { getByText } = render(<HomeScreen navigation={mockNavigation} />);
    expect(getByText('Risk Profile Questionnaire')).toBeDefined();
    expect(getByText('Start Questionnaire')).toBeDefined();
  });

  it('navigates to QuestionnaireScreen on button press', () => {
    const { getByText } = render(<HomeScreen navigation={mockNavigation} />);
    fireEvent.press(getByText('Start Questionnaire'));
    expect(mockNavigation.navigate).toHaveBeenCalledWith('Questionnaire');
  });
});