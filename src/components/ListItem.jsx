import React, { useState } from "react";

const ListItem=({
    startIcon,
    name,
})=>{
    return <div className="list-item">
            {startIcon}
            <span>{name}</span>
    </div>
}

export default ListItem