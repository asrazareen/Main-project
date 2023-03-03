import React, { useContext } from "react";
import { ThemeContext } from "../App";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Card = ({ details }) => {
    //console.log(details)
    const { themes } = useContext(ThemeContext)
    return (
        <div className="hii" >
            <div className="contain" >
                {
                    details? (
                        <div className={`header-con lists-div ${themes ? `lists-div-${themes}` : null}`} >
                    <h6>{details.name}</h6>
                    <h6>{details.description}</h6>
                    <h6>{details.type}</h6>
                    <h6>{details.startDate}</h6>
                    <h6>{details.endDate}</h6>
                    <h6>
                        <EditIcon className="edit-icon" />
                        <DeleteIcon className="delete-icon" />
                    </h6>
                </div>

                    ): (
                        <h4>No contents Found</h4>
                    )
                }
                



            </div>
        </div>
    )
}

export default Card;