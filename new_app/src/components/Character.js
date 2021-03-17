import React from 'react'
import {connect} from 'react-redux'

import {addToFellowship} from '../actions/index'
import styled from 'styled-components'

const Page = styled.div`
    width: 15%;
`
const Name = styled.a`
    font-weight: bold;
    margin: 0;
    padding: 0;
`

const Character = props => {

    const {character, search} = props

    const handleClick = () => {
        props.addToFellowship(props.character)
    }

    return (
        <Page>
            <Name
                onClick={handleClick}
                style={
                    {color:
                        character.race === "Human" 
                        || character.race === "Men"
                            ? "#A0522D"
                            : character.race === "Elf" 
                            || character.race === "Elves" 
                            || character.race === "Half-elven"
                                ? "#FF8C00"
                                : character.race === "Dwarf" 
                                || character.race === "Dwarves"
                                    ? "#5F9EA0"
                                    : character.race === "Hobbit" 
                                    || character.race === "Hobbits"
                                        ? "#008000"
                                        : character.race === "Great Spiders"
                                        || character.race === "Dragon"
                                        || character.race === "Dragons"
                                        || character.race === "Raven"
                                        || character.race === "Wolfhound"
                                        || character.race === "Werewolves"
                                        || character.race === "Horse"
                                        || character.race === "Eagles"
                                        || character.race === "Great Eagles"
                                        || character.race === "Eagle"
                                            ? "#BDB76B"
                                            : character.race === "Orcs"
                                            || character.race === "Black Uruk"
                                            || character.race === "Men,Wraith"
                                            || character.race === "Goblin,Orc"
                                            || character.race === "Orc"
                                            || character.race === "Uruk-hai"
                                            || character.race === "Uruk-hai,Orc"
                                            || character.race === "Orc,Goblin"
                                            || character.race === "Urulóki"
                                            || character.race === "Balrog"
                                            || character.race === "Maiar,Balrog"
                                            || character.race === "Stone-trolls"
                                            || character.race === "Vampire"
                                                ? "#FF0000"
                                                : character.race === "Maiar"
                                                || character.race === "Ainur"
                                                || character.race === "God"
                                                    ? "#FFD700"
                                                    : character.race === "Ent"
                                                    || character.race === "Ents"
                                                        ? "#8B4513"
                                                        : "black"
                    }
                }
            >
                {character.name}
            </Name>
        </Page>
    )
}

export default connect(null, {addToFellowship})(Character)