import styled, { StyledComponentBase } from 'styled-components'

interface WidtgetProps extends StyledComponentBase<any, {}> {
  Header?: StyledComponentBase<any, {}>
  Content?: StyledComponentBase<any, {}>
  Topic?: StyledComponentBase<any, {}>
}

const Widget: WidtgetProps = styled.div`
  margin: 14px 0;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: 4px;
  overflow: hidden;
  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  
  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

Widget.Topic = styled.a<{disabled?: boolean}>`
  outline: 0;
  text-decoration: none;

  color: ${(props) => props.theme.colors.contrastText};
  background-color: ${(props) => props.theme.colors.primary};
  
  padding: 10px 15px;
  margin-bottom: 8px;

  cursor: pointer;

  border-radius: ${(props) => props.theme.borderRadius};

  transition: .3;
  display: block;

  ${(props) => (props.disabled ? 'opacity: .5;cursor: not-allowed;' : '')};

  &:hover, &:focus {
    opacity: .5;
  }
`

export default Widget
