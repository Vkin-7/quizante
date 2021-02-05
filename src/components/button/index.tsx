import React from 'react'
import styled from 'styled-components'

export const Button = styled.button`
  width: 100%;

  padding: 10px;
  background-color: ${(props) => props.theme.colors.primary};

  ${(props) => (!props.disabled
    ? 'opacity: 1'
    : 'opacity: .5')};

  /* background-color: ${(props) => props.theme.colors.primary}; */
  color: ${(props) => props.theme.colors.contrastText};

  border: none;
  border-radius: ${(props) => props.theme.borderRadius};

  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  transition: opacity 1s;

  &:hover {
      ${(props) => (!props.disabled && `background-color: ${props.theme.colors.secondary};`)};
  }
`

const ButtonComponent: React.FC = (props) => {
  const { children } = props

  return (
    <Button
      {...props}
    >
      {children}
    </Button>
  )
}

export default ButtonComponent
