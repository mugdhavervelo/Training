import { React ,useState, useEffect} from 'react';
import QuestionCard from './QuestionCard.tsx';
import { fetchQuizQuestions } from './api.ts';
import { QuestionState, Difficulty } from './api.ts';
import { GlobalStyle, Wrapper } from './App.styles.ts';

export type AnswerObject = {
  question : string;
  answer : string;
  correct : boolean;
  correctAnswer : string;
}

const totalQuestions = 10;


function App() {
  const [loading,setLoading] = useState(false);
  const [questions,setQuestions] = useState<QuestionState[]>([]);
  const [number,setNumber] = useState(0);
  const [userAnswer, setUserAnswer] = useState<AnswerObject[]>([]);
  const [score,setScore] = useState(0);
  const [gameOver,setGameOver] = useState(true);

  console.log(questions)

  useEffect(() => {
    console.log("Score updated:", score);
  }, [score]);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
  
    const newQuestions = await fetchQuizQuestions(totalQuestions, Difficulty.EASY);
  
    if (!newQuestions || newQuestions.length === 0) {
      console.error("No questions fetched! Check API response.");
      return;
    }
  
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswer([]);
    setNumber(0);
    setLoading(false);
  };
  

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) =>{//function to triger when user selects an answer
    // e here is event 
    if(!gameOver){
      //users ans

      const answer = e.currentTarget.dataset.answer; // ✅ Correct way to read the selected answer
      if (!answer) return; // Prevent crashes if data-answer is missing


      
      //check ans against the correct answer

      const correct = questions[number].correct_answer === answer;
      if (correct) {
      console.log("Correct answer selected! Score increasing...");
      setScore(prev => prev + 1);
      }


        //save ans in array for user answr
        const answerObject ={
          question : questions[number].question,
          answer,
          correct,
          correctAnswer: questions[number].correct_answer,
        }

        setUserAnswer(prev => [...prev , answerObject])

    }

  }

  const nextQuestion =() =>{
    //move to next question

    const nextQuestion = number + 1;

    if (nextQuestion === totalQuestions){
      setGameOver(true);
    }
    else{
      setNumber(nextQuestion)
    }

  }

  return (
    <>
    <GlobalStyle/>

    <Wrapper>
      <h1>REACT QUIZ</h1>
      {gameOver || userAnswer.length == totalQuestions?(
      <button className='start' onClick={startTrivia}>
        START
      </button>
      ):null}

      {!gameOver ? <p className='score'>Score: {score}</p>: null }

      {loading && <p >Loading Questions...</p> }

      {!loading && !gameOver && questions.length > 0 && (
  <QuestionCard 
    questionNr={number + 1}
    totalQuestions={totalQuestions}
    question={questions[number]?.question || ""}
    answers={questions[number]?.answers || []} 
    userAnswer={userAnswer ? userAnswer[number] : undefined}
    callback={checkAnswer}
  />
)}

{!gameOver && !loading && userAnswer.length ===number+1 && number!== totalQuestions-1?(

      <button className='Next' onClick={nextQuestion}>
        Next Question</button>
  ):null}

    </Wrapper>

    </>
  );
}

export default App;
