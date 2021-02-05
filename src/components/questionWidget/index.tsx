import React, { FormEvent, useState } from 'react'

import Button from '../button'
import Widget from '../widget'
import AlternativesForm from '../alternativesForm'
import BackLinkArrow from '../backLinkArrow'
import QuestionResult from '../questionResult'

interface QuestionWidgetProps {
    questionPage: number
    questions:
        {
            image: string,
            title: string,
            description: string,
            answer: number,
            alternatives: string[]
        }[]
    qtdQuestions: number
    // eslint-disable-next-line no-unused-vars
    onSubmit: (event: FormEvent<Element>) => void
    // eslint-disable-next-line no-unused-vars
    addResult: (result: boolean) => void
}

const QuestionWidget: React.FC<QuestionWidgetProps> = (props) => {
  const {
    questionPage, questions, qtdQuestions, onSubmit, addResult,
  } = props
  const question = questions[questionPage]

  const questionId = `question__${questionPage}`
  const [selectedAlternative, setSelectedAlternative] = useState<number>(undefined)
  const [isQuestionSubmited, setIsQuestionSubmited] = useState<boolean>(false)
  const isCorrect = selectedAlternative === question.answer
  const hasAlternativeSelected = selectedAlternative === undefined

  return (
    <Widget>
      <Widget.Header>
        <BackLinkArrow href="/" />
        <h3>Pergunta {questionPage + 1} de {qtdQuestions}</h3>
      </Widget.Header>

      <img
        alt="descrição"
        style={{
          width: '100%',
          height: 150,
          objectFit: 'cover',
        }}
        src={question.image}
      />

      <Widget.Content>
        <h2>{question.title}</h2>
        <p>{question.description}</p>

        <AlternativesForm onSubmit={(e) => {
          e.preventDefault()
          setIsQuestionSubmited(true)
          setTimeout(() => {
            addResult(isCorrect)
            setIsQuestionSubmited(false)
            setSelectedAlternative(undefined)
            onSubmit(e)
          }, 2000)
        }}
        >
          <div className="alternatives">
            {question.alternatives.map(((alternative, index) => {
              const alternativeId = index.toString()
              const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR'
              const isSelected = selectedAlternative === index

              return (
                <Widget.Topic
                  htmlFor={alternativeId}
                  as="label"
                  key={alternativeId}
                  onChange={() => setSelectedAlternative(index)}
                  data-selected={isSelected}
                  data-status={isQuestionSubmited && alternativeStatus}
                >
                  <input
                    id={alternativeId}
                    type="radio"
                    name={questionId}
                    style={{ display: 'none' }}
                  />
                  {alternative}
                </Widget.Topic>
              )
            }))}
          </div>
          {/* @ts-ignore */}
          <Button type="submit" disabled={hasAlternativeSelected}>
            Confirmar
          </Button>
          {isQuestionSubmited && isCorrect && <QuestionResult isCorrect={isCorrect} />}
          {isQuestionSubmited && !isCorrect && <QuestionResult isCorrect={isCorrect} />}
        </AlternativesForm>
      </Widget.Content>
    </Widget>
  )
}

export default QuestionWidget
