import React,{useState,useEffect,useContext} from "react";
import "./Styles/survey-list.css"
import data from "../data.json"
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { ThemeContext } from "../App";
// console.log(data)
const SurveyList = () => {

    const {themes,first} = useContext(ThemeContext)
 
   
  
  
    return (
        <div className={`con ${themes ? `con-${themes}` : null}`} >
            <div className="survey-list-con" >
                <div className="sur-con" >
                    <h3 className={`sur ${themes ? `sur-${themes}` : null}`} >Survey List</h3>
                        <SearchIcon className="search" />
                        <input className={`search-input ${themes ? `search-input-${themes}` : null}`} />
                </div>
                <div className={`header-con ${themes ? `header-con-${themes}` : null} `} >
                    <h4>Name</h4>
                    <h4>Description</h4>
                    <h4>Type</h4>
                    <h4>Start Date</h4>
                    <h4>End Date</h4>
                    <h4 className="action" >Actions</h4>
                </div>
                <div className="contain" >
                    {
                        data?.map((data,index) => {
                            return(
                                <div key={index} className={`header-con lists-div ${themes ? `lists-div-${themes}` : null}`} >
                                 <h6>{data.name}</h6>
                    <h6>{data.description}</h6>
                    <h6>{data.type}</h6>
                    <h6>{data.startDate}</h6>
                    <h6>{data.endDate}</h6>
                    <h6>
                        <EditIcon className="edit-icon" />
                        <DeleteIcon className="delete-icon" />
                    </h6>
                                </div>
                            )
                        })
                    }
                   
                </div>
            </div>
        </div>
    )
}
export default SurveyList;