import React from 'react'
import {connect} from 'react-redux'

import {addToFellowship} from '../actions/index'
import styled from 'styled-components'

const Page = styled.div`
    width: 18%;

    @media screen and (max-width: 760px) {
        width: 25%;
    }

    
    @media screen and (max-width: 445px) {
        width: 30%;
    }
`
const Name = styled.p`
    font-weight: bold;
    margin: 0;
    padding: .5rem 0;

    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`

const Character = props => {
    
    const {character} = props
    
    
    const handleClick = () => {
        props.fellowship.length < 9 &&
        props.addToFellowship(props.character)
    }

    return (
        <Page>
            <Name
                onClick={handleClick}
                style={
                    {color:
                        (character.race === "Human" 
                        || character.race === "Men"
                            ? "#804004"
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
                                                    ? "#D4AF37"
                                                    : character.race === "Ent"
                                                    || character.race === "Ents"
                                                        ? "#C9A26B"
                                                        : "black"),        
                    }
                }
            >
                {character.name}
            </Name>
        </Page>
    )
}

const mapStateToProps = state => {
    return {
        fellowship: state.fellowship
    }
}

export default connect(mapStateToProps, {addToFellowship})(Character)