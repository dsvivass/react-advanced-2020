import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {

  const [person, setPerson] = useState({
    firstName: '',
    email: '',
    age: ''
  });
  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setPerson({...person, [name] :value}) // Lo actualiza dinamicamente
            // Eso es de javascript [name]: value esa sintaxis
    console.log(name, value)
  }

  const handleSubmit = (e) => {
    console.log('submit')
    e.preventDefault()
    if (person.firstName && person.email && person.age){
      const newPerson = {...person, 
        id: new Date().getTime().toString()}
      setPeople([...people, newPerson])
      setPerson({
        firstName: '',
        email: '',
        age: ''
      })
    }
  }
  
  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='firstName'>Age : </label>
            <input
              type='text'
              id='age'
              name='age'
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button type='submit'>add person</button>
        </form>
        {people.map((person) => {
          const { id, firstName, email, age } = person;
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{age}</p>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
