import { useState } from "react";
import { useDispatch } from "react-redux";
import { calculateScore, updateResponse } from "../store";
import { questions } from "../mock";
import { QuestionnaireScreenNavigationProp } from "../screens/QuestionnaireScreen";

const useQuestionnaire = (navigation: QuestionnaireScreenNavigationProp) => {

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
        navigation.replace('Result');
      }
    };
  
    return {
        errorText, 
        questions,
        currentQuestionIndex, 
        selectedOption, 
        setSelectedOption,
        setErrorText,
        setCurrentQuestionIndex,
        handleNextPress, 
        handleOptionPress, 
    }
};

export default useQuestionnaire;
