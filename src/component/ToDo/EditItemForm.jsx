import React from "react";
import { useState } from "react";

const colors =[
    {
        color: "red"
    }
    ,
    {
        color: "pink"
    }
    ,
    {
        color: "green"
    }
    ,
    {
        color: "blue"
    }
    ,
    {
        color: "yellow"
    }
]


const EditItemForm = ({val, name, color, colorList, checked, id})=>{

    const onSubmit = (e) =>{
        e.preventDefault()
    }

     const[newName, setNewName] = useState(val)
     const onChangeName = (e) =>{}



    const onCancelClick = () =>{}
    return(
        <form onSubmit={onSubmit}>
        <input type="text"
         defaultValue={val}
         name="name"
         style ={{backgroundColor: color}}
         onChange={onChangeName}/>
        <div className="colorSelector">
            {colors.map((color, index)=>{
                const checkedClass = color.colorS === val ? "checked" : ""
                return <input type="radio" key={index} data-color={color.colorS}/>
            })}
        </div>
        <input type="submit" value ="Save" />
        <button type="button" onClick={onCancelClick}>
            Cancel
        </button>
        </form>
    )
}

export default EditItemForm