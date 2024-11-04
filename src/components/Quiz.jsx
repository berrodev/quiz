import { useState } from 'react';

const Quiz = () => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  return <p>Quiz</p>;
};

export default Quiz;
