import React, { useState } from 'react';
import './SurveyForm.css';
import QuestionsPage from './QuestionsPage';

function SurveyForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [surveyType, setSurveyType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [otherCriteria, setOtherCriteria] = useState('');
  const [image, setImage] = useState(null);
  const [currentPage,setCurrentPage] = useState('1');

  const handleNameChange = (event) => {
    const inputName = event.target.value;
  setName(inputName);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSurveyTypeChange = (event) => {
    setSurveyType(event.target.value);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  
  
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleOtherCriteria = (event) => {
    setOtherCriteria(event.target.value);
  };

  const handleImageUpload = (event) => {
    setImage(event.target.files[0]);
  };

  const handleCancel = () => {
    setCurrentPage(1);
  };
  const handleNext = () => {
    if (name && startDate && endDate&&description) {
      setCurrentPage(currentPage+1);
    } else {
      alert("Please fill all required fields");
    }
    }
  const handleBack = () => {
    setCurrentPage(1);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("name",name);
    data.append("startDate",startDate);
    data.append("endDate",endDate);
    data.append("description",description);
    data.append("otherCriteria",otherCriteria);
    data.append("image",image);
    handleNext();
     console.log(name);
    try {
      const response = await fetch("/userData", {
        method: "POST",
        // headers: {
        //   "Content-Type": "multipart/form-data",
        // },
        body: data,
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }
      // handle success here
    } catch (error) {
      console.log(error);
    }
    
  };
  return (
    <div>
    {currentPage === 1 ? (
    <form>
      <div className='logo'>
        <h1>LOGO</h1>
      </div>
      <div className='sidebar'>
        <div className='survey'><h2 >Create Survey</h2></div>
        <div><button className="b1" onClick={handleCancel}>Cancel</button></div>
        
        <div><button className="b2" onClick={handleSubmit}>Next</button></div>
        <div>
          <label htmlFor="name" className='name'>Name</label>
          <input type="text" id="name" name="name" placeholder="Survey name" value={name} onChange={handleNameChange} required minLength={5}/>
          <div>
            <label htmlFor="startDate" className='startDate'>Start Date</label>
            <input type="date" id="startDate" name="startDate" value={startDate} onChange={handleStartDateChange} />
          
            <label htmlFor="endDate" id="endDate">End Date</label>
            <input type="date" id="endDate" name="endDate" className='endDate' value={endDate} onChange={handleEndDateChange} />
            
          </div>
        </div>
        <div class="container">
          <div>
            <label htmlFor="description" className="input">Description</label>
            <textarea id="description" name="description" value={description} placeholder="description" onChange={handleDescriptionChange} />
            
          </div>
          <div>
            <label htmlFor="otherCriteria" className="input1">Other Criteria</label>
            <textarea id="otherCriteria" name="otherCriteria" value={otherCriteria} placeholder="other criteria" onChange={handleOtherCriteria} />
          </div>
        </div>
        <div className='container'>
          <div>
            <label htmlFor="surveyType" className="surveyType1">Type Of Survey</label>
            <select id="surveyType" name="surveyType" value={surveyType} onChange={handleSurveyTypeChange} required>
              <option>select</option>
              <option>Image</option>
              <option>Video</option>
              <option>Feedback</option>
              <option>Product</option>
            </select>
          </div>
          <div>
            <label htmlFor="image" className="imageLabel">Upload Image</label>
            <input type="file" id="image" name="image" accept="image/*" className="imageInput" onChange={handleImageUpload} />
            {image && <img src={URL.createObjectURL(image)} alt="" />}
          </div>
        </div>
      </div>
    </form >
  ):(<QuestionsPage onBack={handleBack} />
  )}
</div>
);
}

export default SurveyForm; 