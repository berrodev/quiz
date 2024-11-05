import { useRef } from 'react';

const Answers = ({ answers, selectedAnswer, answerState, onSelect }) => {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }
  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let btnClasses = '';

        if (answerState === 'answered' && isSelected) {
          btnClasses = 'selected';
        }

        if (
          answerState === 'correct' ||
          (answerState === 'wrong' && isSelected)
        ) {
          btnClasses = answerState;
        }
        return (
          <li key={answer} className="answer">
            <button onClick={() => onSelect(answer)} className={btnClasses}>
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Answers;
