import { shuffleArray } from "./utils.ts";
export type Question ={
    category :string;
    correct_answer : string;
    difficulty : string;
    incorrect_answers : string[];
    question : string;
    type: string;
}


export type QuestionState = Question & {answers : string[]};


export enum Difficulty{
EASY = "easy",
MEDIUM ="medium",
HARD = "hard"
}



export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    const data = await (await fetch(endpoint)).json();
  
    console.log("API Response:", data); // Debugging API response
  
    return data.results.map((question: Question) => {
      const answers = shuffleArray([...question.incorrect_answers, question.correct_answer]);
      console.log("Shuffled Answers for:", question.question, answers); // Debugging line
      return {
        ...question,
        answers
      };
    });
  };
  
