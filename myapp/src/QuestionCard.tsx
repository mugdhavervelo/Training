import React from "react";
import { AnswerObject } from "./App";
import { Wrapper, ButtonWrapper} from "./QuestionCard.styles.ts"


type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
    question,
    answers,
    callback,
    userAnswer,
    questionNr,
    totalQuestions,
  }) => {
    console.log("Answers Received:", answers); // Debugging line
  
    return (
      <Wrapper>
        <p className="number">
          Question: {questionNr} / {totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{ __html: question }}></p>
        <div>
          {answers && answers.length > 0 ? (
            answers.map((answer, index) => (
                <ButtonWrapper key={answer}
                correct = {userAnswer?.correctAnswer === answer}
                userClicked = {userAnswer?.answer === answer}>
                  <button 
  disabled={!!userAnswer} 
  onClick={callback} 
  data-answer={answer} // ✅ Store answer in data attribute
>
  <span dangerouslySetInnerHTML={{ __html: answer }}></span>
</button>

                </ButtonWrapper>
              ))
          ) : (
            <p>No answers available.</p>
          )}
        </div>
      </Wrapper>
    );
  };
  

export default QuestionCard;
