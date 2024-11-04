import { useState, useEffect } from 'react';

const QuestionTimer = ({ timeout, onTimeOut }) => {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    setTimeout(onTimeOut, timeout);
  }, []);

  useEffect(() => {
    setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
  }, []);

  return <progress id="question-time" />;
};

export default QuestionTimer;
