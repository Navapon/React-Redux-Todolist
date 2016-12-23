import React, { PropTypes } from 'react'
import { Button } from 'semantic-ui-react'
const Link = ({ active, children, onClick }) => {
  if (active) {
    return     <Button color='red'>{children} </Button>
  }

  return (
 
    <a href="#"
       onClick={e => {
         e.preventDefault()
         onClick()
       }}
    >
       <Button color='blue'>
      {children}
          </Button>
    </a>

  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link