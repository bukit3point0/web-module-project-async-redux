import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import {removeFromFellowship} from '../actions/index'

const Page = styled.div`
    width: 10%;
    margin: .25rem;
    height: 30vh;
    background-image: linear-gradient(
        #E1DED7, 
        #6F8EA3,
        #505C68,
        #884D23        
        );
    border: 4px solid;    
    border-image: linear-gradient(
      to right, 
        #B18E3F,
        #C5A754,
        #D9C578,
        #ECDEA0,
        #D9C578,
        #C5A754,
        #B18E3F
    ) 50 50;
`
const Name = styled.h3`
    text-align: center;
    margin: 0;
    padding: .5rem 0;
    background: black;
    color: #ECDEA0;
`
const Link = styled.a`
    font-size: inherit;
    color: inherit;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
        color: #505C68;
    }
`
const Split = styled.div`
    display: flex;
    flex-direction: column;
    height: 85%;
    justify-content: space-between;
`
const Race = styled.p`
    text-align: center;
    margin: .5rem 0 0;
`
const Birthday = styled.p`
    text-align: center;
    margin: .25rem;
`

const Remove = styled.p`
    text-align: center;

    &:hover {
        cursor: pointer;
    }
`

const Fellow = props => {

    const {character} = props

    const handleClick = () => {
        props.removeFromFellowship(character)
    }

    console.log(character)

    return (
        <Page>
            <Name><Link href={character.wikiUrl} target="_blank">{character.name}</Link></Name>
            <Split>
                <div>
                    <Race><em>{character.race}</em></Race>
                    <Birthday><strong>Born</strong> {character.birth}</Birthday>
                    {character.death !== ""
                        &&
                        <Birthday><strong>Death</strong> {character.death}</Birthday>    
                    }
                </div>
                <div>
                  <Remove onClick={handleClick}>Remove {character.name} from the Fellowship</Remove>
                </div>
            </Split>
        </Page>
    )
}

export default connect(null, {removeFromFellowship})(Fellow)