import React, { FormEvent, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

import ptBR from '../locales/pt-BR'
import enUS from '../locales/en-US'

import QuizContainer from '../components/quizContainer'
import QuizLogo from '../components/quizLogo'
import Form from '../components/form'
import Input from '../components/input'
import Button from '../components/button'
import QuizBackground from '../components/quizBackground'
import Widget from '../components/widget'
import GitHubCorner from '../components/githubCorner'
import Footer from '../components/footer'

import db from '../../utils/db.json'

const Home: React.FC = () => {
  const router = useRouter()
  const t = router.locale === 'en-US' ? enUS : ptBR

  const [name, setName] = useState('')

  function handlePlay(e: FormEvent) {
    e.preventDefault()

    router.push(`/quiz?name=${name}`)
  }

  return (
    <QuizBackground bg={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget
          as={motion.section}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '30%' },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Header>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <h1>THE LAST OF US</h1>
          </Widget.Header>
          <Widget.Content>
            {/* @ts-ignore */}
            <Form onSubmit={(e) => handlePlay(e)}>
              <Input
              // @ts-ignore
                placeholder={t.typeName}
                onChange={(e) => setName(e.target.value)}
              />
              <Button
              // @ts-ignore
                type="submit"
                disabled={name.length <= 0}
              >
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                {t.playButton} {name}
              </Button>
            </Form>
          </Widget.Content>
        </Widget>

        <Widget
          as={motion.section}
          transition={{ delay: 1, duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '30%' },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Header>
            <h1>{t.communityQuiz}</h1>
          </Widget.Header>
          <Widget.Content>
            <ul>
              {db.external.map((link) => {
                const [projectName, githubUser] = link
                  .replace(/\//g, '')
                  .replace('https:', '')
                  .replace('.vercel.app', '')
                  .split('.')
                return (
                  <li key={link}>
                    <Link
                      href={name.length !== 0 ? `/quiz/${projectName}__${githubUser}__${name}` : ''}
                      passHref
                    >
                      <Widget.Topic
                        disabled={name.length === 0}
                      >
                        {`${githubUser}/${projectName}`}
                      </Widget.Topic>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </Widget.Content>
        </Widget>
        <Footer
          as={motion.footer}
          transition={{ delay: 1.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '30%' },
          }}
          initial="hidden"
          animate="show"
        />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/Vkin-7" />
    </QuizBackground>
  )
}

export default Home
