import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Tab from './Tab';
import Login from './Login';
import Register from './Register';
import './App.css';

function App() {

  const tab1questions = [
    {
      id: 1,
      question: 'What is the maths?',
      options: ['Pelli Kaani Prasaduu', 'Gireesh bhayya', 'Evaru leru', 'Manakendhuku',],
    },
    {
      id: 2,
      question: 'Which planet is known as the Red Planet?',
      options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
    },
    {
      id: 3,
      question: 'What is nothing?',
      options: ['0', '1', '2', '3'],
    },
    {
      id: 4,
      question: 'What is nothing?',
      options: ['0', '1', '2', '3'],
    },
    {
      id: 5,
      question: 'What is nothing?',
      options: ['0', '1', '2', '3'],
    },
    {
      id: 6,
      question: 'What is nothing?',
      options: ['0', '1', '2', '3'],
    },
    {
      id: 7,
      question: 'What is nothing?',
      options: ['0', '1', '2', '3'],
    },
    {
      id: 8,
      question: 'What is nothing?',
      options: ['0', '1', '2', '3'],
    },
    {
      id: 9,
      question: 'What is nothing?',
      options: ['0', '1', '2', '3'],
    },
    {
      id: 10,
      question: 'What is nothing?',
      options: ['0', '1', '2', '3'],
    },
  ];

  const tab2questions = [
    {
      id: 1,
      question: 'What is the physics?',
      options: ['Pelli Kaani Prasaduu', 'Gireesh bhayya', 'Evaru leru', 'Manakendhuku',],
    },
    {
      id: 2,
      question: 'Which planet is known as the Red Planet?',
      options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
    },
    {
      id: 3,
      question: 'What is nothing?',
      options: ['0', '1', '2', '3'],
    },
    {
      id: 4,
      question: 'What is nothing?',
      options: ['0', '1', '2', '3'],
    },
    {
      id: 5,
      question: 'What is nothing?',
      options: ['0', '1', '2', '3'],
    },
    {
      id: 6,
      question: 'What is nothing?',
      options: ['0', '1', '2', '3'],
    },
    {
      id: 7,
      question: 'What is nothing?',
      options: ['0', '1', '2', '3'],
    },
    {
      id: 8,
      question: 'What is nothing?',
      options: ['0', '1', '2', '3'],
    },
    {
      id: 9,
      question: 'What is nothing?',
      options: ['0', '1', '2', '3'],
    },
    {
      id: 10,
      question: 'What is nothing?',
      options: ['0', '1', '2', '3'],
    },
  ];

  const tab3questions = [
    {
      id: 1,
      question: 'What is the chemistry?',
      options: ['Pelli Kaani Prasaduu', 'Gireesh bhayya', 'Evaru leru', 'Manakendhuku',],
    },
    {
      id: 2,
      question: 'Which planet is known as the Red Planet?',
      options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
    },
    {
      id: 3,
      question: 'What is nothing?',
      options: ['0', '1', '2', '3'],
    },
    {
      id: 4,
      question: 'What is nothing?',
      options: ['0', '1', '2', '3'],
    },
    {
      id: 5,
      question: 'What is nothing?',
      options: ['0', '1', '2', '3'],
    },
    {
      id: 6,
      question: 'What is nothing?',
      options: ['0', '1', '2', '3'],
    },
    {
      id: 7,
      question: 'What is nothing?',
      options: ['0', '1', '2', '3'],
    },
    {
      id: 8,
      question: 'What is nothing?',
      options: ['0', '1', '2', '3'],
    },
    {
      id: 9,
      question: 'What is nothing?',
      options: ['0', '1', '2', '3'],
    },
    {
      id: 10,
      question: 'What is nothing?',
      options: ['0', '1', '2', '3'],
    },
  ];

  const [maths, setMaths] = useState({
    currentQuestion: 1,
    answeredQuestions: [],
    selectedOptions: Array.from({ length: tab1questions.length }, () => null),
  });

  const [physics, setPhysics] = useState({
    currentQuestion: 1,
    answeredQuestions: [],
    selectedOptions: Array.from({ length: tab2questions.length }, () => null),
  });

  const [chemistry, setChemistry] = useState({
    currentQuestion: 1,
    answeredQuestions: [],
    selectedOptions: Array.from({ length: tab3questions.length }, () => null),
  });

  return (

    <BrowserRouter>

      <>
        {/*         
        <Tabs questions={tab1questions} />
        <Tabs questions={tab2questions} />
        <Tabs questions={tab3questions} /> */}

        <div className="app">

          {/* <div className='tabs'>
            <Link to='/maths'>Maths</Link>
            <Link to='/physics'>Physics</Link>
            <Link to='/chemistry'>Chemistry</Link>
          </div> */}

          <Routes>
            <Route path='/maths' element={<Tab questions={tab1questions} />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            {/* 
            <Route path='/physics' element={<Tab questions={tab2questions} />} />

            <Route path='/chemistry' element={<Tab questions={tab3questions} />} /> */}
          </Routes>

        </div>
      </>
    </BrowserRouter>

  );
}

export default App;