import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';
const Person = () => {
  const [name, setName] = useState('Default name')
  const {id} = useParams()

  useEffect(() => {
    var getName = data.find(person => person.id === parseInt(id))
    setName(getName.name)
  }, [])

  return (
    <div>
      <h1>{name}</h1>
      <Link to='/people' className='btn'>
        Go back
      </Link>
    </div>
  );
};

export default Person;
