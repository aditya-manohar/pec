import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GrPrevious, GrNext } from 'react-icons/gr';

export default function Tab({ questions }) {

    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [answeredQuestions, setAnsweredQuestions] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);


    const handlePrev = () => {
        setCurrentQuestion((prevQuestion) => Math.max(1, prevQuestion - 1));
        setSelectedOption(null);
    };

    const handleNext = () => {
        setCurrentQuestion((prevQuestion) => Math.min(questions.length, prevQuestion + 1));
        setSelectedOption(null);
    };

    const handleQuestionClick = (questionId) => {
        setCurrentQuestion(questionId);
        setSelectedOption(null);
    };

    const handleAnswerClick = (optionIndex) => {
        setSelectedOptions((prevSelectedOptions) => {
            const updatedOptions = [...prevSelectedOptions];
            updatedOptions[currentQuestion - 1] = optionIndex;
            return updatedOptions;
        });
        setAnsweredQuestions((prevAnswers) => [...prevAnswers, currentQuestion]);
    };

    const [selectedOptions, setSelectedOptions] = useState(Array.from({ length: questions.length }, () => null));

    const handleClear = () => {
        setSelectedOptions((opt) => {
            const options = [...opt];
            options[currentQuestion - 1] = null;
            return options;
        });
        setAnsweredQuestions((prevAnswers) => prevAnswers.filter(answer => answer !== currentQuestion));
    }

    const isQuestionAnswered = (questionId) => {
        return answeredQuestions.includes(questionId);
    };

    return (
        <>
            <div className="left-panel">

                <div className='tabs'>
                    <Link to='/maths'>Maths</Link>
                    <Link to='/physics'>Physics</Link>
                    <Link to='/chemistry'>Chemistry</Link>
                </div>

                <h2>{currentQuestion}. {questions[currentQuestion - 1].question}</h2>
                <ul>
                    {questions[currentQuestion - 1].options.map((option, index) => (
                        <li
                            key={index}
                            onClick={() => handleAnswerClick(index)}
                            className={`option ${selectedOptions[currentQuestion - 1] === index ? 'selected' : ''}`}>
                            {String.fromCharCode(65 + index)}. {option}
                        </li>
                    ))}
                </ul>

                <div className="buttons">
                    <button onClick={handlePrev} disabled={currentQuestion === 1}>
                        <GrPrevious />
                    </button>
                    <button onClick={handleClear} disabled={currentQuestion === questions.length}>
                        Clear Response
                    </button>
                    <button onClick={handleNext} disabled={currentQuestion === questions.length}>
                        <GrNext />
                    </button>
                </div>
            </div>

            <div className="right-panel">
                <h3>Questions</h3>
                <div className="question-buttons">
                    {questions.map((q) => (
                        <button
                            key={q.id}
                            onClick={() => handleQuestionClick(q.id)}
                            className={`question-button ${currentQuestion === q.id ? 'focused' : ''} ${isQuestionAnswered(q.id) ? 'answered' : ''}`}>
                            {q.id}
                        </button>
                    ))}
                </div>
            </div>
        </>
    )
}
