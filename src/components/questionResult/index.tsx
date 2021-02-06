import React from 'react'
import { useRouter } from 'next/router'

import styled from 'styled-components'
import { MdDone, MdClose } from 'react-icons/md'

import ptBR from '../../locales/pt-BR'
import enUS from '../../locales/en-US'

const ResultContainer = styled.div`
    width: 100%;
    height: 100vh;
    
    z-index: 1000;

    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;

    background-color: rgba(0, 0, 0, .8);

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const questionResult: React.FC<{ isCorrect: boolean }> = ({ isCorrect }) => {
  const { locale } = useRouter()
  const t = locale === 'en-US' ? enUS : ptBR
  return (
    <ResultContainer>
      {isCorrect ? <MdDone color="#19e924" size="20%" /> : <MdClose color="#e91919" size="20%" />}
      <p style={{ fontSize: '2rem', letterSpacing: '2%' }}>{isCorrect ? t.rightAnswer : t.wrongAnswer}</p>
    </ResultContainer>
  )
}

export default questionResult
