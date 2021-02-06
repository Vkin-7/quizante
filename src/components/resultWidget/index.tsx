import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useTheme } from 'styled-components'
import { MdDone, MdClose } from 'react-icons/md'

import ptBR from '../../locales/pt-BR'
import enUS from '../../locales/en-US'

import Widget from '../widget'

const ulStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  gap: 5,
}

const liStyle = {
  display: 'flex', alignItems: 'center', justifyContent: 'center',
}

const mdStyle = {
  borderRadius: 3,
  padding: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const ResultComponent: React.FC<{ results: boolean[], name?: string}> = ({ results, name }) => {
  const router = useRouter()
  const t = router.locale === 'en-US' ? enUS : ptBR

  const theme = useTheme()

  const doneBackground = { backgroundColor: theme.colors.success }
  const doneStyle = { ...mdStyle, ...doneBackground }
  const wrongBackground = { backgroundColor: theme.colors.wrong }
  const wrongStyle = { ...mdStyle, ...wrongBackground }

  const qtQuestions = results.length
  const qtCorrectRes = results.filter((result) => result).length
  const perCent = (100 * qtCorrectRes) / qtQuestions

  return (
    <Widget>
      <Widget.Header>
        {t.result}
      </Widget.Header>
      <Widget.Content>
        <p>
          {/* {`Você acertou
                ${results.reduce((acum, currentVal) => {
                  const isRight = currentVal === true
                  if (isRight) return acum + 1;
                  return acum;
                }, 0)}
                perguntas`} */}
          {`${t.yourScore} ${qtCorrectRes * 100} ${t.points}`}
        </p>
        {perCent >= 60 && <p>{t.theBest} {router.query.name ? router.query.name : name}!</p>}
        {perCent < 60 && perCent > 30 && (
          <p>{t.well} {router.query.name ? router.query.name : name}!</p>
        )}
        {perCent <= 30 && <p>{t.canBetter} {router.query.name ? router.query.name : name}!</p>}
        <ul style={ulStyle}>
          {results.map((result, index) => (
            <li style={liStyle}>
              {index + 1} - <span>&nbsp;&nbsp;</span> { result === true
                ? (
                  <MdDone size={15} style={doneStyle} />
                )
                : <MdClose size={15} style={wrongStyle} /> }
            </li>
          ))}
        </ul>
        <Link prefetch href="/" passHref>
          <Widget.Topic>
            {t.backHome}
          </Widget.Topic>
        </Link>
      </Widget.Content>
    </Widget>
  )
}

export default ResultComponent
