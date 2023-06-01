import React from "react";
import ToDoHeader from "./ToDoHeader"
import {useState} from "react"
import css from "../../CSS/ToDo.module.css"
import Item from "./Item.jsx"

const INIT_ITEMS = [
    {
      name: 'Todo item 1',
      color: '',
      checked: false,
      edit: false,
      id: 1
    },
    {
      name: 'Todo item 2',
      color: 'pink',
      checked: false,
      edit: false,
      id: 2
    },
    {
      name: 'Todo item 3',
      color: 'purple',
      checked: false,
      edit: false,
      id: 3
    }
  ];
  const COLORS = [
    {
      name: 'red',
      checked: true,
      id: 1,
    },
    {
      name: 'pink',
      checked: false,
      id: 2,
    },
    {
      name: 'purple',
      checked: false,
      id: 3,
    },
    {
      name: 'blue',
      checked: false,
      id: 4,
    },
    {
      name: 'green',
      checked: false,
      id: 5,
    },
    {
      name: 'yellow',
      checked: false,
      id: 6,
    }
  ];

const ToDo = () =>{

    const[items, setItems] = useState(INIT_ITEMS)

    return (<div>
        <ToDoHeader />
        <div>
            {items.map((item) => (
                <Item key={item.id} item={item}/>
            ))}
        </div>
    </div>)
}

export default ToDo