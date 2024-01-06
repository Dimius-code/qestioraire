import React from 'react';

export function QuizItem({ data, selectedAnswer, onAnswerChange }) {

	const { header, 
			legend, 
			resultOne,
			resultTwo,
			resultThree,
			resultFour 
		  } = data;

	return (
		<>
			<h1>{header}</h1>
			<fieldset>
				<legend>{legend}</legend>
				<div>
					<input
						type="radio"
						id="huey"
						name="drone"
						value={resultOne}
						onChange={() => onAnswerChange(resultOne)}
                        checked={resultOne === selectedAnswer}
					/>
					<label htmlFor="huey">{resultOne}</label>
				</div>
				<div>
					<input
						type="radio"
						id="dewey"
						name="drone"
						value={resultTwo}
						onChange={() => onAnswerChange(resultTwo)}
                        checked={resultTwo === selectedAnswer}
					/>
					<label htmlFor="dewey">{resultTwo}</label>
				</div>
				<div>
					<input
						type="radio"
						id="deweye"
						name="drone"
						value={resultThree}
						onChange={() => onAnswerChange(resultThree)}
                        checked={resultThree === selectedAnswer}
					/>
					<label htmlFor="dewey">{resultThree}</label>
				</div>
				<div>
					<input
						type="radio"
						id="louie"
						name="drone"
						value={resultFour}
						onChange={() => onAnswerChange(resultFour)}
                        checked={resultFour === selectedAnswer}
					/>
					<label htmlFor="louie">{resultFour}</label>
				</div>
			</fieldset>
		</>
	);
}