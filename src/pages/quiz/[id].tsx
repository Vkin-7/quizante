import React from 'react'
import { GetServerSideProps } from 'next'
import axios from 'axios'
import { ThemeProvider } from 'styled-components'
import DefaultErrorPage from 'next/error'

import db from '../../../utils/db.json'
import QuizScreen from '../../screens/quiz'

type questionsType = typeof db.questions
type themeType = typeof db.theme

interface ExternalQuizProps {
  questions?: questionsType
  bg?: string
  theme?: themeType
  error: boolean
  name: string
}

const ExternalQuiz: React.FC<ExternalQuizProps> = ({
  questions, bg, theme, error, name,
}) => {
  if (error) return <DefaultErrorPage statusCode={404} />

  return (
    <ThemeProvider theme={theme}>
      <QuizScreen
        externalQuestions={questions}
        externalBg={bg}
        name={name}
      />
    </ThemeProvider>
  )
}

export default ExternalQuiz

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query

  const [githunUser, projectName, name] = id.toString().split('__')

  try {
    const dbExternal = await axios.get(`https://${githunUser}.${projectName}.vercel.app/api/db`)

    return {
      props: {
        questions: dbExternal.data.questions,
        bg: dbExternal.data.bg,
        theme: dbExternal.data.theme,
        name,
      },
    }
  } catch (err) {
    console.log(err)

    return {
      props: {
        error: true,
      },
    }
  }
}
