import React from 'react'
import FilterLink from '../containers/FilterLink'
import { Button, Label } from 'semantic-ui-react'

const Footer = () => (
  <p>
    <Label as='a' color='teal' tag> Filter : </Label>
    {" "}
    <Button>
      <FilterLink filter='SHOW_ALL'>
        All
      </FilterLink>
    </Button>
    <Button>
      <FilterLink filter='SHOW_ACTIVE'>
        Active
      </FilterLink>
    </Button >
    <Button>
      <FilterLink filter='SHOW_COMPLETED'>
        Completed
      </FilterLink>
    </Button>
  </p>
)

export default Footer
