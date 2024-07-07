import React from 'react';
import { View, FlatList } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigations/AppStack';
import useQuestionnaire from '../../hooks/useQuestionnaire';
import RadioButton from '../../components/RadioButton/RadioButton';
import Text from '../../components/Text';
import Button from '../../components/Button';
import styles from './styles';

export type QuestionnaireScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Questionnaire'>;

const QuestionnaireScreen: React.FC<{navigation: QuestionnaireScreenNavigationProp}> = ({navigation}) => {
  const {
    errorText, 
    questions,
    currentQuestionIndex, 
    selectedOption, 
    handleNextPress, 
    handleOptionPress, 
  } = useQuestionnaire(navigation);

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
