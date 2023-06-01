import {useState, useEffect} from "react";
import User from "./User"
import AddUser from "./AddUser"

const CRUDUser = () =>{
    const [users, setUsers] = useState([])
    useEffect(() => {
      fetchData()
    }, [])
  
    const  fetchData = async () => {
      await fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUsers(json))
      .catch((err) => {
        console.log(err)
      })
    }
    const onDelete = async(id) =>{
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: 'DELETE',
      })
      .then((response) => {
        if (response.status !==200){
          return
        } else{
          setUsers(users.filter(user =>{
            return user.id !== id
          }))
        }
      })
      .catch((err) => console.log(err))
    }
    const onEdit = async(id, name, email) => {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({
      name : name,
      email : email
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => {
    if (response.status !==200){
      return
    } else{
      return response.json()
    }
  }).then((data) =>{
    const newUsers = users.map((user) => {
      if(user.id === id){
        user.name= name
        user.email = email
      }
      return user
    })
    setUsers((users) => newUsers)
  })
  .catch((err) => console.log(err))
    }
    const onAdd = async (name, email) =>{
      fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    body: JSON.stringify({
     name: name,
     email: email
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => {
      if (response.status !== 201) return
      else return response.json()
    })
    .then((data) => {
      setUsers((users) => [...users, data])
    })
    .catch((err) => {
      console.log(err)
    })
    
   
   }
    return<div>
      <div>
        <AddUser onAdd ={onAdd}/>
      </div>
      <h2>Users:</h2>
      {users.map((user) => (
        <User 
        key ={user.id} 
        name ={user.name}
        email ={user.email}
        id ={user.id}
        onDelete={onDelete}
        onEdit={onEdit}/>
      ))}
    </div>
  }
  
  export default CRUDUser;
  