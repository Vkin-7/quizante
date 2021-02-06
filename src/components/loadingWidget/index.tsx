import React from 'react'
import { useRouter } from 'next/router'
import PulseLoader from 'react-spinners/PulseLoader'
import styled, { useTheme } from 'styled-components'
import Widget from '../../components/widget'

import ptBR from '../../locales/pt-BR'
import enUS from '../../locales/en-US'

const LoadingContainer = styled.div`
  height: 20vh;

  display: flex;
  justify-content: center;
  align-items: center;
`

const LoadingWidget: React.FC = () => {
  const theme = useTheme()
  const { locale } = useRouter()
  const t = locale === 'en-US' ? enUS : ptBR

  return (
    <Widget>
      <Widget.Header>
        {t.loading}
      </Widget.Header>

      <Widget.Content>
        <LoadingContainer>
          <PulseLoader color={theme.colors.primary} />
        </LoadingContainer>
      </Widget.Content>
    </Widget>
  )
}

export default LoadingWidget
