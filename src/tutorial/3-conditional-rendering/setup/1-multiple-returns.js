import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users/QuincyLarsons';

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(false); // Cuando usamos bool
                                // es comun usar el prefijo 'is'
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('Default user')

  useEffect(() => {
    setIsLoading(true)
    fetch(url)
      .then((resp) => {
        if( resp.status >= 200 && resp.status <= 299)
        {
          return resp.json()
        } else {
          setIsLoading(false)
          setIsError(true)
          throw new Error(resp.status)
        }
      })
      .then((user) => {
        const {login} = user
        setUser(login)
        setIsLoading(false)
      })
      .catch((err) => console.log(err)) // Aqui agarro errores con
                // la network, pero no agarro el 404 por ejemplo
  }, [])

  if (isLoading) {
    return <>
      <h1>Loading...</h1>
    </>
  } 

  if (isError) {
    return <>
      <h1>ERROR...</h1>
    </>
  } 

  // Este ultimo seria como el default
  return <>
    <h1> {user} </h1>
  </>
  
};

export default MultipleReturns;
