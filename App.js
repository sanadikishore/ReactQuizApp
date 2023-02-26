import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

 function App() {
	const questions = [
		{
			questionText: 'java language is____?',
			answerOptions: [
				{ answerText: 'Functional', isCorrect: false },
				{ answerText: 'Procedural', isCorrect: false },
				{ answerText: 'Object oriented', isCorrect: true },
				{ answerText: 'All of the above', isCorrect: false },
			],
		},
		{
			questionText: 'Inside which HTML element do we put the JavaScript?',
			answerOptions: [
				{ answerText: '<javascript>', isCorrect: false },
				{ answerText: '<script>', isCorrect: true },
				{ answerText: '<scripting>', isCorrect: false },
				{ answerText: '<js>', isCorrect: false },
			],
		},
		{
			questionText: 'OS computer abbreviation usually means ?',
			answerOptions: [
				{ answerText: 'Operating System', isCorrect: true },
				{ answerText: 'Order of Significance', isCorrect: false },
				{ answerText: 'Open Software', isCorrect: false },
				{ answerText: 'None of these', isCorrect: false },
			],
		},
		{
			questionText: 'What is the capital of India ?',
			answerOptions: [
				{ answerText: 'Paris', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'New Delhi', isCorrect: true },
				{ answerText: 'None of these', isCorrect: false},
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
    <div className='demo'>
		<div className='app'>
			{showScore ? (
				<div className='score'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question'>
						<div className='demo1'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
    </div>
	);
}

export default App;