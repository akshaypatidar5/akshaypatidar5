import React from "react"
import "./style.css"
import Button from "./Button"
import quotes1 from "./images/2.PNG"
import quotes2 from "./images/3.PNG"
import quotes3 from "./images/4.PNG"
const Apple=()=>{
    return(
        <div className = "container">
            <h1 className = "text">Hello Akshay</h1>
            <Button buttonText="Left"/>
            <Button buttonText="Center"/>
            <Button buttonText="Right"/>

            <div className="image"> 
            <img src={quotes1} alt = ""/>
            <img src={quotes2} alt = ""/>
            <img src={quotes3} alt = ""/>
              </div>
            
        </div>
        
    )
}
export default  Apple