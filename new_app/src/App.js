import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import './App.css';

import Characters from './components/Characters'
import Fellowship from './components/Fellowship'

const Page = styled.div``
const CharactersChoice = styled.h1`
  text-align: center;
`

// const API_KEY = process.env.REACT_APP_LOTRKEY
// const API_URL = `https://the-one-api.dev/v2/character`

function App() {

  // const [lotr, setLotr] = useState([])

  // useEffect(() => {
  //   axios.get(API_URL, {
  //     headers: {
  //       'Authorization': `Bearer ${API_KEY}`
  //     }
  //   })
  //   .then(res => {
  //     // console.log(res.data)
  //     setLotr(res.data.docs)
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  // },[])

  // console.log(lotr)

  return (
    <Page>
      <CharactersChoice>Create Your Fellowship</CharactersChoice>
      <Characters/>
      <Fellowship/>
    </Page>
  );
}

export default App;

