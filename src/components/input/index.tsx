import React from 'react'
import styled from 'styled-components'

export const Input = styled.input`
  width: 100%;

  padding: 10px;

  background-color: ${(props) => props.theme.colors.mainBg};
  color: ${(props) => props.theme.colors.contrastText};

  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.borderRadius};

  &::placeholder {
    color: ${(props) => props.theme.colors.contrastText};
  }
`

const InputComponent: React.FC = (props) => (
  <Input
    {...props}
  />
)

export default InputComponent
