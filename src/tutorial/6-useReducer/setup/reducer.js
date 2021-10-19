export const reducer = (state, action) => {
    if (action.type === 'ADD_ITEM'){
      // console.log(state, action)
      const newItems = [...state.people, action.payload]
      return {...state, people:newItems, isModalOpen:true, modalContent:'Item added!'}
    }
  
    if (action.type === 'NO_VALUE'){
      return {...state, isModalOpen:true, modalContent:'Please enter value!'}
    }
  
    if (action.type === 'REMOVE_ITEM'){
      const newPeople = state.people.filter((person) => 
        person.id !== action.payload)
  
      return {...state, people: newPeople, isModalOpen:true, modalContent:'Item removed'}
    }
  
    if (action.type === 'CLOSE_MODAL') {
      return {...state, isModalOpen:false}
    }
  
    throw new Error('No matching action type') // Es bueno para detectar el error rapido
              // En caso de estar ingresando mal el action
    // return state // Siempre debo retornar
  }