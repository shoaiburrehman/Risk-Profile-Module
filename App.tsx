/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import AppStack from './src/navigations/AppStack';
import { Provider } from 'react-redux';
import store from './src/store';


const App = () => {

  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={'#fff'}
        />
        <AppStack />
      </SafeAreaView>
    </Provider>
  );
}

export default App;
