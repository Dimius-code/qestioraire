import React, { useState } from 'react';
import { QuizItem } from '../QuizItem/QuizItem';

const data = [
	{
		header: 'Step 1',
		legend: 'How much is 1+1?',
		id: 0,
		resultOne: '1',
		resultTwo: '2',
		resultThree: '5',
		resultFour: '100',
		correctResult: '2',
	},
	{
		header: 'Step 2',
		legend: 'How much is 2+2?',
		id: 1,
		resultOne: '2',
		resultTwo: '4',
		resultThree: '6',
		resultFour: '8',
		correctResult: '4',
	},
	{
		header: 'Step 3',
		legend: 'How much is 3+3?',
		id: 2,
		resultOne: '10',
		resultTwo: '6',
		resultThree: '12',
		resultFour: '4',
		correctResult: '6',
	},
];

export function QuizList() {
	const [step, setStep] = useState(0);
	const [radioResult, setRadioResult] = useState(Array(data.length).fill(''));
	const [correctAnswersCount, setCorrectAnswersCount] = useState(null);

	const handlePrev = () => {
		setStep((prevStep) => prevStep - 1);
	};

	const handleNext = () => {
		setStep((prevStep) => prevStep + 1);
	};

	const handleResult = () => {
		const correctCount = data.filter(
			(item, index) => radioResult[index] === item.correctResult
		).length;
		setCorrectAnswersCount(correctCount);
	};

	const setResultValue = (item) => {
		setRadioResult((prevState) => {
			const updatedResults = [...prevState];
			updatedResults[step] = item;
			return updatedResults;
		});
	};

	console.log(radioResult);

	return (
		<div>
			<QuizItem
				data={data[step]}
				selectedAnswer={radioResult[step]}
				onAnswerChange={setResultValue}
			/>
			<button onClick={handlePrev} disabled={step === 0}>
				Prev
			</button>
			{step < data.length - 1 ? (
				<button onClick={handleNext} disabled={radioResult[step] === ''}>
					Next
				</button>
			) : (
				<button onClick={handleResult} disabled={radioResult[step] === ''}>
					Done
				</button>
			)}
			{correctAnswersCount !== null && (
				<p>Correct Answers: {correctAnswersCount}</p>
			)}
		</div>
	);
}
