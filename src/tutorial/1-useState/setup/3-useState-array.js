import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {

  const [people, setPeople] = React.useState( data )
  const removeItem = (id) => {
    var newPeople = people.filter(person => person.id != id)
    setPeople(newPeople)
  }

  return (

    <div>
      { people.map(person => {

        const {id, name} = person
        console.log(person)
        return <div key={id} className='item'>
          <h4>{ name }</h4>
          <button onClick={() => removeItem(id)}>
            remove item
          </button>
        </div>
      }) }

      <button className="btn" type="button" onClick={() => setPeople([])}>
            clear all
          </button>
      </div>

  )
};

export default UseStateArray;
