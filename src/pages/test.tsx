import React, { useEffect } from 'react'

const handleOnScroll = (e) => {
  e.preventDefault()
  console.log(e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight)
//   console.log(e.target.clientHeight)
//   console.log('altura scroll ', e.target.scrollHeight)
//   console.log('posição scroll ', e.target.scrollTop)
  //   console.log(e.target.style.height)
//   console.log(isBottom(e.target))
//   console.log(e)
//   console.log(e.currentTarget.style.height, e.target)
}

const isBottom = (el) => el.getBoundingClientRect().height === el.style.height

const Test: React.FC = () => {
  useEffect(() => {
    console.log(document.documentElement.clientHeight * 0.20)
  }, [])

  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <p
        onScroll={handleOnScroll}
        style={{ width: '60vw', height: '20vh', overflow: 'scroll' }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
        anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
        anim id est laborum.
      </p>
    </div>
  )
}

export default Test
