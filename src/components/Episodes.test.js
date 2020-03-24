import React from 'react'
import { render } from '@testing-library/react'
import Episodes from './Episodes'

it('should render the episodes without any errors', () => {
    render (<Episodes episodes = {[]} errors = ""/>)
})

it('should render error message if error is present', () => {
  const { getByText } = render (<Episodes episodes = {[]} errors = ""/>)

  //assert that no error message us rendered
  //query for the elemnt (should return null)
  //assert with .toBeNull()


  //rerender the component with new props

  // assert that tthe error message is rendered
})