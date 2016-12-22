import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { Input, Button } from 'semantic-ui-react'

let AddTodo = ({ dispatch }) => {
  let input

  const onSubmit = (event) => {
   
        event.preventDefault()

        // console.log(event)
        // console.log(input)
        if (!input.value) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
  }


  return (
    <div>
      <h1 style={{marginTop: 100 + 'px'}} >First App With Todo List </h1>
      <form onSubmit={ onSubmit } >
       <input ref={ node => {
                    input = node
                 }} 
                 type='text' placeholder='Add Todo' id="addTodo" />
          
          <Button type='submit' color='red' >ADD</Button>
    
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo