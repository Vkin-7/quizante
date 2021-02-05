import React, { useState, useEffect, FormEvent } from 'react';

import LoadingWidget from '../../components/loadingWidget'
import QuestionWidget from '../../components/questionWidget'
import QuizLogo from '../../components/quizLogo';
import QuizBackground from '../../components/quizBackground';
import QuizContainer from '../../components/quizContainer';
import ResultWidget from '../../components/resultWidget'

import db from '../../../utils/db.json'

const screenStateList = ['LOADING', 'QUIZ', 'RESULT'] as const
type screenStateProps = typeof screenStateList[number]

type questionsType = typeof db.questions

interface QuizPageProps {
  externalQuestions?: questionsType
  externalBg?: string
  name?: string
}

const QuizPage: React.FC<QuizPageProps> = ({ externalQuestions, externalBg, name }) => {
  const [results, setResults] = useState<boolean[]>([])
  const [screenState, setScreenState] = useState<screenStateProps>('LOADING')
  const [questionPage, setQuestionPage] = useState<number>(0)
  const questions = externalQuestions === undefined ? db.questions : externalQuestions

  const addResult = (result: boolean) => {
    setResults([
      ...results,
      result,
    ])
  }

  useEffect(() => {
    setTimeout(() => {
      setScreenState('QUIZ')
    }, 3000)
  }, [])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (questionPage < questions.length - 1) setQuestionPage(questionPage + 1)
    else setScreenState('RESULT')
  }

  return (
    <QuizBackground bg={externalBg === undefined ? db.bg : externalBg}>
      <QuizContainer>
        <QuizLogo />

        {screenState === 'LOADING' && <LoadingWidget />}

        {screenState === 'QUIZ' && (
        <QuestionWidget
          questions={questions}
          questionPage={questionPage}
          qtdQuestions={questions.length}
          onSubmit={handleSubmit}
          addResult={addResult}
        />
        )}

        {screenState === 'RESULT' && <ResultWidget results={results} name={name} />}

      </QuizContainer>
    </QuizBackground>
  )
}

export default QuizPage
