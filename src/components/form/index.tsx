import React from 'react'
import styled from 'styled-components'

const FormComponent: React.FC = (props) => {
  const { children } = props

  return (
    <Form
      {...props}
    >
      { children }
    </Form>
  )
}

const Form = styled.form`
  height: 15vh;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`
export default FormComponent
