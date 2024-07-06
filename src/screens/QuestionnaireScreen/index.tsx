import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigations/AppStack';
import { calculateScore, updateResponse } from '../../store';
import RadioButton from '../../components/RadioButton/RadioButton';
import Text from '../../components/Text';
import Button from '../../components/Button';
import { questions } from '../../mock';
import styles from './styles';

export type QuestionnaireScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Questionnaire'>;


const QuestionnaireScreen: React.FC<{navigation: QuestionnaireScreenNavigationProp}> = ({navigation}) => {
  const dispatch = useDispatch();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [errorText, setErrorText] = useState('');

  const handleOptionPress = (index: number, score: number) => {
    setSelectedOption(index);
    setErrorText('');
    dispatch(updateResponse({ questionIndex: currentQuestionIndex, optionScore: score }));
  };

  const handleNextPress = () => {
    if(selectedOption === null) {
      setErrorText('Please select an option');
      return;
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
    } else {
      dispatch(calculateScore());
      navigation.navigate('Result');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{questions[currentQuestionIndex].question}</Text>
      <FlatList
        data={questions[currentQuestionIndex].options}
        renderItem={({ item, index }) => (
          <RadioButton
            title={item.text}
            selected={selectedOption === index}
            onPress={() => handleOptionPress(index, item?.score)}
            containerStyle={styles.radioButtonContainer}
          />
        )}
        ListFooterComponent={() => <Text style={styles.errorText}>{errorText}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
      <Button title={currentQuestionIndex < questions.length - 1 ? 'Next' : 'Submit'} onPress={handleNextPress} />
    </View>
  );
};

export default QuestionnaireScreen;
