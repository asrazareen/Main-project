import "./Styles/preview.css"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../App";

const Preview = () => {

    const navigate = useNavigate();
    const {themes} = useContext(ThemeContext)
    return (
        <div className={`main-con-${themes}`}>
             <div className={`preview-container preview-container-${themes}`} >
            <div className="preview-con" >
                <div className={`preview-div preview-div-${themes}`}>
                    <ArrowBackIcon onClick={() => { navigate("/") }} />
                    <h3 >Preview</h3>
                </div>
                <div>
                    <button className={`prev-btn ${themes? `close-${themes}` : null}`}>Close Preview</button>
                    <button className={`prev-btn ${themes? `save-${themes}` : null}`} >Save</button>
                </div>
            </div>
            <div className="question-con" >
                <div className="questions" >
                    <div className="que" >
                        <h4 className={`questionname-${themes}`} >Question 1</h4>
                        <div className="h-line" ></div>
                    </div>
                    <div>
                        <p className={`question-${themes}`} >Question will be here</p>
                        <div className={`answers answers-${themes}`} >
                            <div>
                                <input type="radio" className="ans" value="Yes" name="answer" />
                                <label >Yes</label><br />
                            </div>
                            <div>
                                <input type="radio" className="ans" value="No" name="answer" />
                                <label >No</label><br />
                            </div>

                        </div>
                    </div>

                </div>
                <div className="questions" >
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
                            </div>

                        </div>
                    </div>

                </div>
                

            </div>
        </div>
        </div>
       
    )
}

export default Preview