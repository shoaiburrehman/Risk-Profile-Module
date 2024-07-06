// screens/HomeScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigations/AppStack';
import Button from '../../components/Button';
import styles from './styles';

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;


const HomeScreen: React.FC<{navigation: HomeScreenNavigationProp}> = ({navigation}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Risk Profile Questionnaire</Text>
      <Button title="Start Questionnaire" onPress={() => navigation.navigate('Questionnaire')} />
    </View>
  );
};

export default HomeScreen;
