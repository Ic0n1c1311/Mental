import React, { useState, useEffect } from 'react';
import { data } from '../assets/data';

const Quiz = () => {
  let [index, setIndex] = useState(0);
  let [selectedAnswer, setSelectedAnswer] = useState(null); 
  let [isAnswered, setIsAnswered] = useState(false); 
  let [correctAnswers, setCorrectAnswers] = useState(0); 
  let [showResult, setShowResult] = useState(false); 
  let question = data[index];

  const showSuggestionAlert = (depressionLevel) => {
    if (depressionLevel === 'High Depression') {
      alert('Suggestion: Please consider taking advice from a doctor.');
    } else if (depressionLevel === 'Medium Depression') {
      alert('Suggestion: Listen to a podcast, read a book, or try meditation.');
    } else if (depressionLevel === 'Depression-Free') {
      alert('Congratulations! The test is clear, and you are depression-free.');
    }
  };

  const checkAns = (e, ans) => {
    if (!isAnswered) {
      setSelectedAnswer(ans); 
      setIsAnswered(true); 

      if (question.ans === ans) {
        e.target.classList.add("bg-[#dffff2]", "border-[#00d397]");
        setCorrectAnswers(correctAnswers + 1); 
      } else {
        e.target.classList.add("bg-[#FFEBEB]", "border-[#FF4A4A]");
      }
    }
  };

  const nextQuestion = () => {
    if (index < data.length - 1) {
      setIndex(index + 1); 
      setSelectedAnswer(null); 
      setIsAnswered(false); 
    } else {
      setShowResult(true); 
    }
  };

  const calculateDepression = () => {
    if (correctAnswers >= 8) {
      return 'High Depression';
    } else if (correctAnswers >= 5) {
      return 'Medium Depression';
    } else {
      return 'Depression-Free';
    }
  };

  useEffect(() => {
    if (showResult) {
      const depressionLevel = calculateDepression();
      showSuggestionAlert(depressionLevel);
    }
  }, [showResult]);

  return (
    <div className="w-[640px] mx-auto mt-[110px] text-[#301730] flex flex-col gap-[20px] rounded-[10px] p-[40px_50px] bg-[#ffe5b4] mb-5">
      <h1 className="text-xl">TEST FOR DEPRESSION</h1>
      <hr className="h-[2px] border-none bg-[#707070]" />
      {showResult ? (
        <div className="result">
          <h2 className="text-[27px] font-medium">Your Depression Level: {calculateDepression()}</h2>
          <p>You answered {correctAnswers} out of {data.length} questions correctly.</p>
        </div>
      ) : (
        <>
          <h2 className="text-[27px] font-medium">{index + 1}. {question.question}</h2>
          <ul>
            <li 
              className={`flex items-center h-[70px] pl-[15px] border border-[#686868] rounded-[8px] mb-[20px] cursor-pointer text-[20px] ${selectedAnswer === 1 && isAnswered ? (question.ans === 1 ? 'bg-[#dffff2] border-[#00d397]' : 'bg-[#FFEBEB] border-[#FF4A4A]') : ''}`}
              onClick={(e) => checkAns(e, 1)}
            >
              {question.option1}
            </li>
            <li 
              className={`flex items-center h-[70px] pl-[15px] border border-[#686868] rounded-[8px] mb-[20px] cursor-pointer text-[20px] ${selectedAnswer === 2 && isAnswered ? (question.ans === 2 ? 'bg-[#dffff2] border-[#00d397]' : 'bg-[#FFEBEB] border-[#FF4A4A]') : ''}`}
              onClick={(e) => checkAns(e, 2)}
            >
              {question.option2}
            </li>
            <li 
              className={`flex items-center h-[70px] pl-[15px] border border-[#686868] rounded-[8px] mb-[20px] cursor-pointer text-[20px] ${selectedAnswer === 3 && isAnswered ? (question.ans === 3 ? 'bg-[#dffff2] border-[#00d397]' : 'bg-[#FFEBEB] border-[#FF4A4A]') : ''}`}
              onClick={(e) => checkAns(e, 3)}
            >
              {question.option3}
            </li>
            <li 
              className={`flex items-center h-[70px] pl-[15px] border border-[#686868] rounded-[8px] mb-[20px] cursor-pointer text-[20px] ${selectedAnswer === 4 && isAnswered ? (question.ans === 4 ? 'bg-[#dffff2] border-[#00d397]' : 'bg-[#FFEBEB] border-[#FF4A4A]') : ''}`}
              onClick={(e) => checkAns(e, 4)}
            >
              {question.option4}
            </li>
          </ul>
          <button className="mx-auto w-[250px] h-[65px] bg-[#1d252555] text-[blanchedalmond] text-[25px] font-medium rounded-[8px] cursor-pointer" onClick={nextQuestion} disabled={!isAnswered}>Next</button>
          <div className="mx-auto text-[18px]">{index + 1} of {data.length} questions</div>
        </>
      )}
    </div>
  );
}

export default Quiz;
