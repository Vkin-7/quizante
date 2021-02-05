import React from 'react'
import { ThemeProvider } from 'styled-components'
import QuizScreen from '../../screens/quiz'

import db from '../../../utils/db.json'

const QuizPage: React.FC = () => (
  <ThemeProvider theme={db.theme}>
    <QuizScreen />
  </ThemeProvider>
)

export default QuizPage
