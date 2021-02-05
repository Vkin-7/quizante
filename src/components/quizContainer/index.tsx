import React from 'react'
import styled from 'styled-components'

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  margin: 0 10%;
  
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

const QuizContainerComponent: React.FC = ({ children }) => (
  <QuizContainer>{children}</QuizContainer>
)

export default QuizContainerComponent
