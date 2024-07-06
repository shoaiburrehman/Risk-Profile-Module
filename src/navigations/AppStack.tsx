import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import QuestionnaireScreen from '../screens/QuestionnaireScreen';
import ResultScreen from '../screens/ResultScreen';

export type RootStackParamList = {
    Home: undefined;
    Questionnaire: undefined;
    Result: undefined;
};
  
const Stack = createNativeStackNavigator<RootStackParamList>();

const AppStack = () => {  
    
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Questionnaire" component={QuestionnaireScreen} />
          <Stack.Screen name="Result" component={ResultScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      );
}

export default AppStack;