import "./Styles/preview.css"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { ThemeContext } from "../App";
import { useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Preview = () => {

    const navigate = useNavigate();
    const { themes, formdata, questionData } = useContext(ThemeContext)
    const [question, setQuestion] = useState([])
    const [options, setOptions] = useState([

    ])
    const location = useLocation()
    // setOptions(questionData.get("option"))
    console.log(questionData.get("option"))
    //   (setQuestion(questionData.get("questions")))
    // formdata.forEach((val, key) => {
    //     console.log("helo")
    //     console.log(val,key)
    // })
    //     console.log(questionData)

    useEffect(() => {
        //     console.log("asra")
        //    console.log(location.state.id)
        //     fetch(`http://localhost:8080/createForm?id=${location.state.id}`)
        //     .then((res) => res.json())
        //     .then(question => setQuestion(question.questions))

        // console.log(location.state.data)

    }, [])

    // useEffect(() => {

    //     //console.log(formdata[option])
    //     console.log(formdata)
    //     //formdata.get
    //       questionData.forEach((val, key) => {

    //             console.log(key,val)
    //         })
    //         // console.log(val, key)
    //     fetch("http://localhost:8080/createForm")
    //         .then((res) => res.json())
    //         .then(question =>console.log(question))
    //     // console.log(JSON.stringify(question))
    //     // let ans =(question[0])
    //     // console.log(ans)
    // }, [])
    //console.log(question.questions)
    //console.log(options[0])
    // useEffect(() => {
    //     console.log(question)
    // },[question])
    const saveData = () => {

        questionData.append("surveyId", location.state.data.id)
        questionData.append("questions", JSON.stringify(location.state.data.questions))
        questionData.append("option", JSON.stringify(location.state.data.arr))
        questionData.forEach((val, key) => {
            console.log(val, key)
        })

        fetch("http://localhost:8080/createForm", {
            method: "POST",
            body: questionData
        }).then(res => res.json())
            .then(data => { navigate('/main') })
    }
    // let ans =(question[0])
    // console.log(ans)
    //console.log(question)
    return (
        <div >
            <Header />
            <Sidebar />
            <div className={`main-con-${themes}`} >
                <div className={`preview-container preview-container-${themes}`} >
                    <div className="preview-con" >
                        <div className={`preview-div preview-div-${themes}`}>
                            <ArrowBackIcon onClick={() => { navigate("/") }} />
                            <h3 >Preview</h3>
                        </div>
                        <div>
                            <button className={`prev-btn ${themes ? `close-${themes}` : null}`} onClick={() => { navigate("/form") }} >Close Preview</button>
                            <button className={`prev-btn ${themes ? `save-${themes}` : null}`} onClick={saveData}  >Save</button>
                        </div>
                    </div>
                    {console.log(question)}
                    <div className="question-con" >
                        {/* <div>Hiii</div> */}
                        {console.log(location.state.data)}
                        <div className="question" >
                            {location.state.data.questions.map((ques, i) => {
                                return (
                                    <div key={i} >
                                        <div className="que" >
                                            <h4 className={`questionname-${themes}`} >Question{i + 1}</h4>
                                            <div className="h-line" ></div>
                                        </div>
                                        <p className={`question-${themes}`} >{ques.question}</p>

                                        {/* <div>asra</div> */}

                                        {location.state.data.arr[i].map((op, j) => {
                                            // {console.log(op)}
                                            return (
                                                <div  className={`answers answers-${themes}`}  key={j} >
                                                    {/* {op.optionText} */}
                                                    {/* {console.log(ques.ques)} */}
                                                    <input type={ques.questionType} className="ans" value="Yes" name={ques.question} readOnly />
                                                    <label >{op.optionText}</label><br />
                                                </div>
                                            )
                                        })}
                                    </div>

                                )
                            })}
                        </div>

                    </div>

                    {/* <div className="question-con" >
                        {console.log(question)}
                        {console.log(question[0].option )}
                        <div className="questions" >
                            {question?.map((ques, i) => {
                                 {console.log(ques.question)}
                                return (
                                    <div key={i} >
                                         <div className="que" >
                                                            <h4 className={`questionname-${themes}`} >Question{i}</h4>
                                                            <div className="h-line" ></div>
                                                        </div>
                                                        <p className={`question-${themes}`} >{ques.question}</p> */}

                    {/* {
                                        
                                            ques.questions.map((questions,a) => {
                                                return (
                                                    <div key={a} >
                                                        {console.log(questions)}
                                                        {console.log(a)}

                                                        {console.log(questions.question)}
                                                       
                                                    </div>
                                                )
                                            })
                                        } */}
                    {/* <div>
                                            {console.log(ques.option)}
                                            <div className={`answers answers-${themes}`} > */}
                    {/* {console.log(ques.options)} */}
                    {/* {
                                                //     JSON.parse(JSON.stringify((ques.option))).map((opp, j) => {
                                                //         return (
                                                //             <div key={j} >
                                                //                 {console.log(JSON.parse(opp))}
                                                //                 {
                                                //                     JSON.parse(opp).map((option, k) => {
                                                //                         return (
                                                //                             <div key={k} >
                                                //                                 {console.log("hi", ques.questions[i].questionType)}
                                                //                                 {console.log(option)}
                                                //                                 <input type={ques.questions[i].questionType} className="ans" value="Yes" name={ques.question} readOnly />
                                                //                                 <label >{option.optionText}</label><br />
                                                //                             </div>
                                                //                         )
                                                //                     })
                                                //                 }


                                                //             </div>
                                                //         )
                                                //     })
                                                // } */}

                    {/* <div>
                                <input type="radio" className="ans" value="No" name="answer" />
                                <label >No</label><br />
                            </div> */}
                    {/* </div>
                                        </div>
                                    </div>
                                )
                            })}



                        </div> */}
                    {/* <div className="questions" >
                        <div className="que" >
                            <h4 className={`questionname-${themes}`} >Question 1</h4>
                            <div className="h-line" ></div>
                        </div>
                        <div>
                            <p className={`question-${themes}`} >Question will be here</p>
                            <div className={`answers answers-${themes}`} >
                                <div>
                                    <input type="radio" className="ans" value="Yes" name="answer1" />
                                    <label >Yes</label><br />
                                </div>
                                <div>
                                    <input type="radio" className="ans" value="No" name="answer1" />
                                    <label >No</label><br />
                                </div> */}

                    {/* </div>
                        </div>

                    </div> 
                     </div>  */}
                </div>
            </div>

        </div>

    )
}

export default Preview