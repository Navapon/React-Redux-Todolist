import React from 'react'
import FilterLink from '../containers/FilterLink'
import { Label } from 'semantic-ui-react'

const Footer = () => (
  <p>
    <Label as='a' color='teal' tag>
      Filter :
    </Label>
    {" "}
    <FilterLink filter='SHOW_ALL'>
   
        All
 
    </FilterLink>
    <FilterLink filter='SHOW_ACTIVE'>
    
        Active
     
    </FilterLink>
    <FilterLink filter='SHOW_COMPLETED'>

       Complete
  
    </FilterLink>
  </p>
)

export default Footer
