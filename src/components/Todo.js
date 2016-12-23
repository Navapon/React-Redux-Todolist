import React, { PropTypes } from 'react'
import { Container, Input, Message, Checkbox } from 'semantic-ui-react'
import Moment from 'react-moment'

  let state = { visible: true }

  const handleDismiss = () => {
    alert('coming soon')

  
  }

const Todo = ({ onClick, completed, text, Button }) => (

 
  
  <div>
    <Container textAlign='center'>
      <Message icon  onDismiss={handleDismiss}>
        <Checkbox toggle onClick={onClick} />
        <Message.Content style={{textDecoration: completed ? 'line-through' : 'none'}}>
          <Message.Header>
            <Moment className='datetime' aria-hidden={true}>
              {Date.now()}
            </Moment>
          </Message.Header>
          {text}
        </Message.Content>
      </Message>
  
    </Container>
  </div>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
