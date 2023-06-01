import React  from "react";
import css from "../../CSS/ToDo.module.css"
import { useState } from "react";
import EditItemForm from "./EditItemForm"

const Item = ({item}) =>{

    const { name,
    color,
    checked,
    id} = item
    const [edit, setEdit] = useState(false)
    const editFunc = () =>{
        setEdit(!edit)
    }
    return( 
     <div>
       {edit  ? (
        <EditItemForm val={name} colorList={color} checked={checked} color={color} id={id}/>
       ): (
        <div>
            <input 
            type="checkbox" 
            className={css.itemCheckbox}
            checked ={checked}
            onChange={() => {

            }}
            />
            <div className={css.itemDetails}>
                <p className={css.itemName}>{name}</p>
                <div className={`${css.itemColor} ${css[color]} `} ></div>
            </div>
            <button className={css.itemEditButton} onClick={editFunc}>
            Edit
            </button>
        </div>
       )} 
     </div>
    )
}

export default Item