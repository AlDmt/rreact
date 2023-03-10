
import './App.css';
// import './mycss.css'
//import * as classstyle from './mycs.module.css';
import React, { useEffect, useState } from 'react';
import {Card} from 'antd';




function App() {
  const [counter, setCounter] = useState([])
  const [users, setUsers] = useState([])


  const increment = () => {
    setCounter(counter+1)
  }
  const decrement = () => {
    if (counter>0) setCounter(counter-1)
  }


  
  const getData = async() => {
    fetch ('https://jsonplaceholder.typicode.com/users')
     .then(res => res.json())
      .then(res => {
        if(res&& Array.isArray(res) && res.length>0){
          setUsers(res)
        }
      })
  }


  const LoadUsers=()=>{  //функция загрузки (привязана к нажатию на кнопку)
    getData()
}


  useEffect(()=>{ 
    getData()
  },[])


  
  const styles={
    border: '1  px solid #000',
    padding: 10,
    margin: 15,
    borderRadius:10,
    marginBotton: 0.5,
    background: '#999',

  //border: '`l solid #000'
  }

  return(
    <> 
      <h2 style={ {color: "#980"}}>    Пользователи: <button style={{backgroundColor:'#306317'}} type="" onClick={()=>{LoadUsers()}}>Получение списка пользователей</button></h2> 
        <div style={{margin:25, display:'flex',gap:16}}>
            {users.length>0 &&
              users.map(user=>{
                return <Card  title={user.name}key={Math.random()} headStyle={{backgroundColor: '#980'}} style={{width:200},{backgroundColor:'#306317'}}><p>{user.email}</p></Card> 
              })
            } 
          </div> 
    </>
  )
}

export default App;