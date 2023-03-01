import React, { useState, useContext, useEffect } from "react";
import "./Styles/header.css"
import image from "./images/Asra.jpeg"
import LogoutIcon from '@mui/icons-material/Logout';
import { ThemeContext } from "../App";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useNavigate } from "react-router-dom";

const Header = () => {
    const { themes, setThemes, first, setFirst } = useContext(ThemeContext)
    const [open, setOpen] = useState(false)
    const [data,setData] = useState([])
    const navigate = useNavigate()

    const fetchtheme = async () => {
        await fetch("http://localhost:8080/api/themes")
            .then((res) => res.json())
            .then((data) => {
                console.log(data.data)
                setData(data.data)
                console.log(data)
            })
    }

    useEffect(() => {
        setThemes("Default")
    },[])
    useEffect(() => {
        fetchtheme()
        console.log(data)
    }, [first])
    const handleTheme = async () => {

        if (!open) {
            setOpen(true)
        }
        else {
            setOpen(false)
        }
        // console.log(themes[first])
        if (first < data.length- 1) {
            setFirst(first + 1)
        }
        else {
            setFirst(0)
        }

        //console.log(first)
    }

    // setTimeout(() => {
    //     console.log(themes.length)
    // }, 1000)


    return (
        <div className="container" >
             <div className={`header-container ${themes? `header-container-${themes}` : null}`}>
                <h3 className={`logo ${themes ? `logo-${themes}` : null}`}>LOGO</h3>
                <div className="profile" >
                    <div className="theme-div dropdown-wrapper " >
                        <button className={`theme-btn trigger-button ${themes ? `theme-btn-${themes}` : null} dropdown-toggle `}
                            onClick={handleTheme} >Change Theme <ArrowDropDownIcon/></button>
                            <div className="dropdown" >
                            <ul className={` ${open ? 'open' : null}`}>
                            {data.map((theme,index) => {
                                return(
                                   
                                      <li key={index} onClick={() => {
                                        setThemes(theme.name)
                                        setOpen(false)
                                    }} >{theme.name}</li>
                                 
                                )
                            } )}
                            </ul>  
                            </div>
                            
                    </div>

                    <img src={image} alt="profile" className="profile-pic" />
                    <div className="logout-div" onClick={() => {navigate("/preview")}}  >
                        <LogoutIcon />
                        Logout
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;