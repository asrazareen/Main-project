
import React, { useState } from 'react';
 import './QuestionsPage.css';

function QuestionsPage({ onBack }) {
  const [questions, setQuestions] = useState([
    {
      text: 'Enter Quetion',
      options: ['value', 'value', 'value']
    }
  ]);

  const addQuestion = () => {
    setQuestions([
      ...questions,
      {
        text: 'Enter Quetion',
        options: ['value', 'value', 'value']
      }
    ]);
  };

  return (
    <div>
      <div className='logo'>
        <h1>LOGO</h1>
      </div>
      <div className='sidebar'>
        <div className='question'>
          <button className="button" onClick={onBack}></button>
          <h2 className='heading'>Create Questions</h2>
          {questions.map((question, index) => (
            <div key={index} className='block'>
              <h3>Question{index + 1}</h3>
              <div className='gear'></div>
              <div className='box'>
                <label id='text'>{question.text}</label>
              </div>
              <br />
              <div className='option'>
                {question.options.map((option, optionIndex) => (
                  <div key={optionIndex}>
                    <input type='radio' name={`option${index}`} value={option} />
                    {option}
                    <br />
                  </div>
                ))}
              </div>
            </div>
          ))}
          <button className='button1' onClick={addQuestion}>Add Questions</button>
        </div>
      </div>
    </div>
  );
}

export default QuestionsPage;
