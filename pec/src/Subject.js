// Subject.js
import React from 'react';
import { GrPrevious, GrNext } from 'react-icons/gr';

function Subject({ subject, state, onQuestionClick, onAnswerClick, onClear, questions }) {
    const { currentQuestion, answeredQuestions, selectedOptions } = state;

    const handlePrev = () => {
        onQuestionClick(subject, Math.max(1, currentQuestion - 1));
    };

    const handleNext = () => {
        onQuestionClick(subject, Math.min(answeredQuestions.length, currentQuestion + 1));
    };

    const handleQuestionClick = (questionId) => {
        onQuestionClick(subject, questionId);
    };

    const handleAnswerClick = (optionIndex) => {
        onAnswerClick(subject, optionIndex);
    };

    const handleClear = () => {
        onClear(subject);
    };

    const isQuestionAnswered = (questionId) => {
        return answeredQuestions.includes(questionId);
    };

    return (
        <>
            <div className="left-panel">
                <h2>{currentQuestion}. {questions[currentQuestion - 1].question}</h2>
                <ul>
                    {questions[currentQuestion - 1].options.map((option, index) => (
                        <li
                            key={index}
                            onClick={() => handleAnswerClick(index)}
                            className={`option ${selectedOptions[currentQuestion - 1] === index ? 'selected' : ''}`}
                        >
                            {String.fromCharCode(65 + index)}. {option}
                        </li>
                    ))}
                </ul>

                <div className="buttons">
                    <button onClick={handlePrev} disabled={currentQuestion === 1}>
                        <GrPrevious />
                    </button>
                    <button onClick={handleClear} disabled={currentQuestion === answeredQuestions.length}>
                        Clear Response
                    </button>
                    <button onClick={handleNext} disabled={currentQuestion === answeredQuestions.length}>
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
                            className={`question-button ${currentQuestion === q.id ? 'focused' : ''} ${isQuestionAnswered(q.id) ? 'answered' : ''}`}
                        >
                            {q.id}
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Subject;
