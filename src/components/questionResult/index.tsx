import React from 'react'
import styled from 'styled-components'
import { MdDone, MdClose } from 'react-icons/md'

const ResultContainer = styled.div`
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;

    background-color: rgba(0, 0, 0, .7);

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const questionResult: React.FC<{ isCorrect: boolean }> = ({ isCorrect }) => (
  <ResultContainer>
    {isCorrect ? <MdDone color="#19e924" size="20%" /> : <MdClose color="#e91919" size="20%" />}
    <p style={{ fontSize: '2rem', letterSpacing: '2%' }}>{isCorrect ? 'Você acertou ;)' : 'Você errou :('}</p>
  </ResultContainer>
)

export default questionResult
