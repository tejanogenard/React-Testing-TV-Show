import React from 'react'
import { render, waitFor, queryAllByTestId } from '@testing-library/react'
import App from './App'




it('should render the App without any errors', () => {
    render(<App />)
})



/** 
 Tests

 1) Test that the component renders with empty props
    -props.err: ""
    -props.episodes??? 


2) Test that the component shows an error message when passed an error string
    -props.error: "some error message"


    Happy path 
3)   test that the episodes are rendered when           there is no error, and when props.episodes         has data 

 */