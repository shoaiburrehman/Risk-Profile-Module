import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import store from '../src/store';
import AppStack from '../src/navigations/AppStack';

describe('AppStack', () => {
  it('renders the screens with correct IDs', () => {
    render(
      <Provider store={store}>
        <AppStack />
      </Provider>
    );
  });
});