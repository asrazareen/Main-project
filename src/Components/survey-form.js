import React, { useState } from "react"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate,useLocation } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../App";
import "./Styles/form.css"
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


const SurveyForm = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const { themes, formdata ,questionData } = useContext(ThemeContext)
    // const [question,setQuestion] = useState("")
    const [questions, setQuestions] = useState([{
        question: "",
        questionType: "radio",
        answer: ""
    }])
    formdata.forEach((val, key) => {
        console.log(val, key)
    })
    questionData.forEach((val,key) => {
        console.log(val,key)
    })
    const [option, setOptions] = useState([{
        options:[
            {optionText: "value"},
          {optionText: "value"},
          {optionText: "value"} ,
           {optionText: "value"}
        ]
    }
        
   

])

    //console.log(option)

    // formdata.forEach((val, key) => {
    //     console.log(val, key)
    // })
    const handleChange = (text, i) => {
        let newques = [...questions];
        newques[i].question = text;
        setQuestions(newques)
        console.log(newques)

    }

    const addType = (type, i) => {
        console.log(type)
        let ques = [...questions]
        ques[i].questionType = type
        setQuestions(ques)
        console.log(ques)
    }

    const handleOption = (text, i, j) => {
        console.log(text)
        console.log(i)
        console.log(j)
        let opt = [...option]
        opt[i].options[j].optionText = text;
        setOptions(opt)
        console.log(opt)

    }

    const removeOption = (i, j) => {

        let remove = [...option]
        console.log(remove)
        if ((remove[i].options).length > 1) {
            //console.log("hi")
            (remove[i].options).splice(j, 1)
            //console.log(JSON.parse(remove[i].options).splice(j,1))
            setQuestions(remove)
            //console.log(remove)
        }
    }

    const addOption = (i) => {
        let add = [...questions]
        if (add[i].options.length < 4) {
            add[i].options.push({ optionText: "option" + (parseInt(add[i].options.length) + 1) })
            setQuestions((add))
        }
    }

    const addAnswer = (ans, i) => {
        let answe = [...questions]

        answe[i].answer = ans
        setQuestions(answe)

    }

    const handleSave = () => {
        //navigate("/survey")
        // const formData = new FormData()
        // formData.append("questions", JSON.stringify(questions))
        // let arr = []
        // for(let i=0;i<option.length;i++){
        //     console.log(option[i])
        //     arr.push(option[i].options)
        // }
        // formData.append("option" , JSON.stringify(arr))
        // fetch("http://localhost:8080/createForm", {
        //     method: "POST",
        //     body: formData
        // })

        let arr = []
        for(let i=0;i<option.length;i++){
            console.log(option[i])
            arr.push(option[i].options)
        }
        // console.log(arr)
        // formData.append("option" , JSON.stringify(arr))
        console.log("hii")
        const id = location.state.id
        questionData.append("surveyId" , id)
        questionData.append("questions" , JSON.stringify(questions))
        questionData.append("option",JSON.stringify(arr))
        questionData.forEach((val, key) => {
            console.log(val, key)
        })

        fetch("http://localhost:8080/createForm", {
            method: "POST",
            body: questionData 
        }).then(res=>res.json())
        .then(data => {  navigate('/main')})
    }

    const handlePreview = () => {

        
        // const formData = new FormData()
        // formData.append("questions" , JSON.stringify(questions))
        for(let i=0;i<questions.length;i++){
            if(questions[i].question === "" || questions[i].answer == ""){
                alert('Please enter question and select a answer')
                return
            }
        }
       
        let arr = []
        for(let i=0;i<option.length;i++){
            console.log(option[i])
            arr.push(option[i].options)
        }
        const id = location.state.id
        console.log(id)
        let question = { id,questions,arr }
        console.log(question)
        navigate('/preview' , {state:{data:question}})

        // console.log(arr)
        // formData.append("option" , JSON.stringify(arr))
        // console.log("hii")
        // const id = location.state.listId
        // questionData.append("surveyId" , id)
        // questionData.append("questions" , JSON.stringify(questions))
        // questionData.append("option",JSON.stringify(arr))
        // questionData.forEach((val, key) => {
        //     console.log(val, key)
        // })

        // fetch("http://localhost:8080/createForm", {
        //     method: "POST",
        //     body: questionData 
        // }).then(res=>res.json())
        // .then(data => {  navigate('/preview' , {state:{id:data.questId}}
        // ,console.log(data))})
      
    }
    const addQuestion = () => {

        setQuestions([...questions, {
            question: "",
            questionType: "radio",
            answer: ""
        }])

        setOptions(
            [...option,
            { options:[
                {optionText: "value"},
              {optionText: "value"},
              {optionText: "value"} ,
               {optionText: "value"}
            ]
            }     
        ])
    }


// console.log(option[0].options)
    return (
        <>
            <div className={`form-container form-container-${themes}`} >
                <div className="preview-con" >
                    <div className={`preview-div preview-div-${themes}`} >
                        <ArrowBackIcon onClick={() => { navigate("/surveyForm") }} />
                        <h3 >Create Question</h3>
                    </div>
                    <div>
                        <button className={`prev-btn ${themes ? `close-${themes}` : null}`} onClick={handlePreview} >Preview</button>
                        <button className={`prev-btn ${themes ? `save-${themes}` : null}`} onClick={handleSave}  >Save</button>
                    </div>
                </div>
                <div className={`question-con`} >
                    <div className={`question-box`} >
                        {questions.map((question, index) => (
                            <div key={index} className="main">
                                <div className="ques-index" >
                                    <h4 className="index" >Q{index + 1}</h4>
                                    <p className="index" >Question</p>
                                </div>
                                <div className="question-div" >
                                    <div>
                                        <input className="ques" onChange={(e) => { handleChange(e.target.value, index) }}
                                            // value={question.question}

                                            // onChange={(event) => {
                                            //     const newQuestions = [...questions];
                                            //     newQuestions[index].question = event.target.value;
                                            //     setQuestion(newQuestions)
                                            //}}
                                            id="quein" type="text" placeholder="Enter Question" />
                                        {/* {console.log(option[index])} */}
                                        <div id="radio">
                                            {

                                                (option[index].options).map((opp, j) => {
                                                    //{console.log(opp.optionText)}
                                                    return (
                                                        <div className="option" key={j} >
                                                            <input type={question.questionType} key={j} onChange={(e) => { addAnswer(opp.optionText, index) }}
                                                                label={opp.optionText} name={question.question} />
                                                            <input className="option-input" type="text"
                                                                onChange={(e) => handleOption(e.target.value, index, j)}
                                                                value={opp.optionText} />
                                                            <RemoveCircleOutlineIcon style={{ color: "red", width: "15px" }} onClick={() => { removeOption(index, j) }} />
                                                            <AddCircleOutlineIcon style={{ color: "blue", width: "15px" }} onClick={() => { addOption(index) }} />
                                                        </div>

                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div id="quetype">
                                        {/* <FaTimes className="close"/> */}
                                        <h6 style={{ margin: "0px" }} >Question Type</h6>
                                        <select className="selectque" onChange={(e) => addType(e.target.value, index)} >
                                            <option placeholder="value" value="radio" >Radio type</option>
                                            <option value="checkbox">Checkbox</option>
                                        </select>
                                    </div>
                                </div>
                                {/* <FaCog className="settings" /> */}

                            </div>
                        ))}
                    </div>

                    <button onClick={addQuestion} className="add-btn" >Add question</button>

                </div>
            </div>
        </>
    )
}

export default SurveyForm