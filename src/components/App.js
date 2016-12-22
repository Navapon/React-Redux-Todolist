import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import { Container } from 'semantic-ui-react'

const App = () => (
  <div>
    <Container textAlign='center'>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </Container>
  </div>
)

export default App