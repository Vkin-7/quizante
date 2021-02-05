import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import Widget from '../widget'

const ResultComponent: React.FC<{ results: boolean[], name?: string}> = ({ results, name }) => {
  const router = useRouter()

  return (
    <Widget>
      <Widget.Header>
        Resultado
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
          {`Você acertou
                  ${results.filter((result) => result).length}
                perguntas`}
        </p>
        <p>Mandou bem, {router.query.name ? router.query.name : name}!</p>
        <ul>
          {results.map((result, index) => (
            <li>
              #{index + 1} Resultado: { result === true ? 'Acertou' : 'Errou' }
            </li>
          ))}
        </ul>
        <Link prefetch href="/" passHref>
          <Widget.Topic>
            Voltar para a Home
          </Widget.Topic>
        </Link>
      </Widget.Content>
    </Widget>
  )
}

export default ResultComponent
