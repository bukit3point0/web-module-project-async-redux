import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import './App.css';

import Characters from './components/Characters'
import Fellowship from './components/Fellowship'

import gollum from './images/kisspng-gollum-aragorn-gandalf-the-lord-of-the-rings-high-lord-of-the-rings-5ac85b8d93c0a0.0533121815230800776052.png'

const Page = styled.div``
const CharactersChoice = styled.h1`
  text-align: center;
`
const Gollum = styled.img`
  width: 5rem;
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

