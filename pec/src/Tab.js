import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GrPrevious, GrNext } from 'react-icons/gr';
import { BsCameraVideo, BsMic } from 'react-icons/bs';

export default function Tab({ questions }) {
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [answeredQuestions, setAnsweredQuestions] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState(Array.from({ length: questions.length }, () => null));
    const [inputAnswers, setInputAnswers] = useState(Array.from({ length: questions.length }, () => ''));

    const handlePrev = () => {
        setCurrentQuestion((prevQuestion) => Math.max(1, prevQuestion - 1));
    };

    const handleNext = () => {
        setCurrentQuestion((prevQuestion) => Math.min(questions.length, prevQuestion + 1));
    };

    const handleQuestionClick = (questionId) => {
        setCurrentQuestion(questionId);
    };

    const handleAnswerClick = (optionIndex) => {
        setSelectedOptions((prevSelectedOptions) => {
            const updatedOptions = [...prevSelectedOptions];
            updatedOptions[currentQuestion - 1] = optionIndex;
            return updatedOptions;
        });
        setAnsweredQuestions((prevAnswers) => [...prevAnswers, currentQuestion]);
    };

    const handleInputChange = (event) => {
        setInputAnswers((prevInputAnswers) => {
            const updatedInputAnswers = [...prevInputAnswers];
            updatedInputAnswers[currentQuestion - 1] = event.target.value;
            return updatedInputAnswers;
        });
    };

    const isQuestionAnswered = (questionId) => {
        return answeredQuestions.includes(questionId);
    };

    return (
        <>
            <div className="left-panel">
                <h2>{currentQuestion}. {questions[currentQuestion - 1].question}</h2>

                <div className="buttons">
                    <textbox
                        rows='4'
                        columns='4'
                        className='answerinput'
                        value={inputAnswers[currentQuestion - 1]}
                        onChange={handleInputChange}
                    />
                    {/* <button onClick={handlePrev} disabled={currentQuestion === 1}>
                        <GrPrevious />
                    </button> */}
                    <button onClick={handleNext} disabled={currentQuestion === questions.length}>
                        <GrNext />
                    </button>
                </div>

                <div className="video-section">
                    <div className="video-container">
                        <div className="video-icon-container">
                            <BsCameraVideo className="icon" size={30} color="dodgerblue" />
                            <BsMic className="icon" size={20} color="white" />
                        </div>
                    </div>
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
    );
}
