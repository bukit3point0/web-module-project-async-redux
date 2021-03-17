import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import {removeFromFellowship} from '../actions/index'

const Page = styled.div`
    width: 10%;
    /* border: 1px solid black; */
    margin: .25rem;
    height: 30vh;
    background-image: linear-gradient(#E1DED7, 
        #6F8EA3,
        #505C68,
        #884D23        
        );
`
const Name = styled.h3`
    text-align: center;
    margin: 2rem 0 0;
`
const Race = styled.p`
    text-align: center;
    margin: .5rem 0;
`

const Fellow = props => {

    const {character} = props

    const handleClick = () => {
        props.removeFromFellowship(props.character)
    }

    console.log(character)

    return (
        <Page onClick={handleClick}>
            <Name>{props.character.name}</Name>
            <Race><em>{props.character.race}</em></Race>
        </Page>
    )
}

export default connect(null, {removeFromFellowship})(Fellow)