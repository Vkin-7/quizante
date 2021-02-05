import React from 'react'
import PulseLoader from 'react-spinners/PulseLoader'
import styled, { useTheme } from 'styled-components'
import Widget from '../../components/widget'

const LoadingContainer = styled.div`
  height: 20vh;

  display: flex;
  justify-content: center;
  align-items: center;
`

const LoadingWidget: React.FC = () => {
  const theme = useTheme()

  return (
    <Widget>
      <Widget.Header>
        Carregando...
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
