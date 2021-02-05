import React from 'react'

import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import db from '../../utils/db.json'

const { theme } = db

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Quizante</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
