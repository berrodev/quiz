import { useState } from 'react';

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  return <p>JS Quiz</p>;
};

export default Quiz;
