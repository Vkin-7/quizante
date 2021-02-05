import React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'

import enUS from '../../locales/en-US'
import ptBR from '../../locales/pt-BR'

// src/components/Footer/index.js
const FooterWrapper = styled.footer`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 20px;
  display: flex;
  align-items: center;
  border-radius: 4px; 
  img {
    width: 58px;
    margin-right: 23px;
  }
  a {
    color: white;
    text-decoration: none;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
    span {
      text-decoration: underline;
    }
  }
`;

export default function Footer(props) {
  const router = useRouter()
  const t = router.locale === 'en-US' ? enUS : ptBR

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        {`${t.credits}  `}
        <a href="https://www.alura.com.br/">
          <span>Imersão React da Alura</span>
        </a>
      </p>
    </FooterWrapper>
  );
}
