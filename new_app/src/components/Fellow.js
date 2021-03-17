import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import {removeFromFellowship} from '../actions/index'

const Page = styled.div`
    width: 10%;
    border: 1px solid black;
    margin: .25rem;
`

const Fellow = props => {

    const {character} = props

    const handleClick = () => {
        props.removeFromFellowship(props.character)
    }

    console.log(character)

    return (
        <Page onClick={handleClick}>
            <a>{props.character.name}</a>
        </Page>
    )
}

export default connect(null, {removeFromFellowship})(Fellow)