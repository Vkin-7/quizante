import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const QuizLogo = styled.h1`
  height: 10vh;

  font-size: 25px;
  font-weight: 400;
  letter-spacing: 15px;

  background-color: ${(props) => props.theme.colors.primary};

  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;
`

const QuizLogoComponent: React.FC = () => (
  <QuizLogo
    as={motion.header}
    transition={{ delay: 0, duration: 0.5 }}
    variants={{
      show: { opacity: 1, y: '0' },
      hidden: { opacity: 0, y: '30%' },
    }}
    initial="hidden"
    animate="show"
  >Quizante
  </QuizLogo>
)

export default QuizLogoComponent
