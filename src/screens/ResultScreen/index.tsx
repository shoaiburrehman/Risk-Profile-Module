import React from 'react';
import { View } from 'react-native';
import { useAppSelector } from '../../hooks/useAppSelector';
import Text from '../../components/Text';
import styles from './styles';

const ResultScreen: React.FC = () => {
  const { score } = useAppSelector(state => state.questionnaire);

  let riskProfile = "Low";
  if (score > 7 && score <= 12) {
    riskProfile = "Medium";
  } else if (score > 12) {
    riskProfile = "High";
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Risk Profile</Text>
      <Text style={styles.score}>Score: {score}</Text>
      <Text style={styles.profile}>Risk Profile: {riskProfile}</Text>
    </View>
  );
};

export default ResultScreen;
