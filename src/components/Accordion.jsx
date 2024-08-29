import React, { useState } from "react";
import DownArrow from "../icons/downArrow.svg"

const Accordion=({
    startIcon,
    name,
    children
})=>{
    const [isExpanded,setIsExpanded]=useState(false);

    const toggleExpansion=()=>{ setIsExpanded(prev=>!prev)}

    return <div className="accordion">
        <div className="accordion-head" onClick={toggleExpansion}>
            <img className="accordion-icon" src={DownArrow} alt="down arrow"/>
            {startIcon}
            <span>{name}</span>
        </div>
       {isExpanded?<div className="accordion-children">
       {children}
       </div>:null}
    </div>
}

export default Accordion