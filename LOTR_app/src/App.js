import React from 'react'
import styled from 'styled-components'
import './App.css';


import Characters from './components/Characters'
import Fellowship from './components/Fellowship'

import gollum from './images/kisspng-gollum-aragorn-gandalf-the-lord-of-the-rings-high-lord-of-the-rings-5ac85b8d93c0a0.0533121815230800776052.png'

const Page = styled.div``
const CharactersChoice = styled.h1`
font-family: coquette, sans-serif;
font-weight: 600;
font-size: 2.5rem;
  text-align: center;
  text-shadow: .75px .75px 1px #C5A754;

  @media screen and (max-width: 850px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 643px) {
    font-size: 1.75rem;
  }
`
const Gollum = styled.img`
  width: 5rem;

  @media screen and (max-width: 850px) {
    width: 4rem;
  }
`

function App() {

  return (
    <Page>
      <CharactersChoice>
        <Gollum src={gollum}/>
        Who Will Take The One Ring To Mordor?
      </CharactersChoice>
      <Characters/>
      <Fellowship/>
    </Page>
  );
}

export default App;

