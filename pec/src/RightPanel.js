import React, { useState } from 'react'

export default function RightPanel({ questions }) {

    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [answeredQuestions, setAnsweredQuestions] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedOptions, setSelectedOptions] = useState(Array.from({ length: questions.length }, () => null));

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
    )
}
