import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    const response = await fetch( url )
    const users = await response.json()
    console.log(typeof users)
    setUsers(users)
  }

  useEffect(() => { // Esta no puede tener async / await 
                  // asi que llamare una funcion diferente
    getUsers()
  }, []) // Lo dejo vacio para que no se cree un ciclo infinito

  return <>
  <ul className='users'>
    {users.map(user => {
      console.log(user)
      const {id, login, avatar_url, html_url} = user
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}> Profile</a>
              </div>
            </li>
          )
      })
    }
  </ul>
   
    
  </> 
};

export default UseEffectFetchData;
