import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import {loadCharacters} from '../actions'

import Character from './Character'

const Page = styled.div`
    font-family: goldenbook;
    font-size: 1.5rem;

    @media screen and (max-width: 1313px) {
        font-size: 1.3rem;
    }

    @media screen and (max-width: 850px) {
        display: flex;
    }

    @media screen and (max-width: 643px) {
        font-size: 1rem;
    }
`
const SearchBar = styled.div`

    display:flex;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto 2%;
    /* background-color: #FFE9A9; */
    opacity: .7;

    @media screen and (max-width: 1609px) {
        flex-direction: column;
    }

    @media screen and (max-width: 850px) {
        flex-direction: column-reverse;
        width: 20%;
        align-items: flex-start;
    }
`
const SearchByName = styled.input`
    font-family: goldenbook;
    width: 20%;
    font-size:1.25rem;

    @media screen and (max-width: 1609px) {
        margin: 1rem 5rem 0;
        width:40%;
    }

    @media screen and (max-width: 850px) {
        width: 100%;
        margin: 0;
    }

    @media screen and (max-width: 643px) {
        width: 200%;
        margin-left: 1.5rem;
    }
`
const ColorOfCharacters = styled.div`
    font-weight: bold;
    padding-right: 1.5rem;
    display: flex;
    text-align: center;

    @media screen and (max-width: 1313px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }

    @media screen and (max-width: 850px) {
        flex-wrap: nowrap;
        flex-direction: column;
        padding: 0;
    }
`
const Search = styled.p`
    margin: 0 1rem;
    padding: 0;

    &:hover {
        cursor: pointer;
        font-size: 1.6rem;
    }

    @media screen and (max-width: 1313px) {
        width: 15%;
    }

    @media screen and (max-width: 850px) {
        width: 100%;
        margin: 0;
    }
`
const Human = styled(Search)`
    color: #804004;
`
const Elf = styled(Search)`
    color: #FF8C00;
`
const Dwarf = styled(Search)`
    color: #5F9EA0;
`
const Hobbit = styled(Search)`
    color: #008000;
`
const Animals = styled(Search)`
    color: #BDB76B;
`
const Enemies = styled(Search)`
    color: #FF0000;
`
const Heavenly = styled(Search)`
    color: #FFD700;
    text-shadow: 0 0 4px black;
`
const Ent = styled(Search)`
    color: #C9A26B;
`
const Other = styled(Search)`
    color:black;
`
const ListOfCharacters = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    /* height: 80vh; */
    width: 80vw;
    margin: auto;
    overflow-y: auto;
`
const CharacterList = styled.div`
    display: flex;
    height: 30vh;
    width: 80vw;
    margin: auto;
    overflow-y: auto;
    /* background-color: #FFE9A9; */
    opacity: .6;
    border: 4px solid;    
    border-image: linear-gradient(
      to bottom, 
        #B18E3F,
        #C5A754,
        #D9C578,
        #ECDEA0,
        #D9C578,
        #C5A754,
        #B18E3F
    ) 0 100;

    @media screen and (max-width: 1313px) {
        height: 20vh;
    }

    @media screen and (max-width: 850px) {
        width: 70vw;
    }

    @media screen and (max-width: 643px) {
        margin-top: 3rem;
    }
`

const Characters = props => {

    const {characters, loadCharacters} = props

    const [search, setSearch] = useState("")

    const filteredCharacters = characters.filter(character => character.name !== "MINOR_CHARACTER")
    

    // const races = []

    // characters.map(race => {
    //     if(!races.includes(race.race))
    //         races.push(race.race)
    // })
    
    // console.log(races)

    useEffect(() => {
        loadCharacters()
    },[]) // eslint-disable-line react-hooks/exhaustive-deps

    const handleSearch = e => {
        setSearch(e.target.value)
    }

    const findHumans = e => {
        setSearch("Human, Men")
    }

    const findElves = e => {
        setSearch("Elf, Elves, Half-elven")
    }

    const findDwarves = e => {
        setSearch("Dwarf, Dwarves")
    }

    const findHobbits = e => {
        setSearch("Hobbit, Hobbits")
    }

    const findAnimals = e => {
        setSearch("Great Spiders, Dragon, Dragons, Raven, Wolfhound, Werewolves, Horse, Eagles, Great Eagles, Eagle")
    }

    const findUrukhai = e => {
        setSearch("Orcs, Black Uruk, Wraith, Goblin,Orc, Orc, Uruk-hai, Uruk-hai,Orc, Orc,Golbin, Urulóki, Balrog, Balrog, Stone-trolls, Vampires")
    }

    const findHeavenly = e => {
        setSearch("Maiar, Ainur, God")
    }

    const findEnts = e => {
        setSearch("Ent, Ents")
    }

    const findOthers = e => {
        setSearch("NaN")
    }

    return (
        <Page>
            <SearchBar>
               
                <ColorOfCharacters>
                    <Human onClick={findHumans}>Humans</Human>
                    <Elf onClick={findElves}>Elves</Elf>
                    <Dwarf onClick={findDwarves}>Dwarves</Dwarf>
                    <Hobbit onClick={findHobbits}>Hobbits</Hobbit>
                    <Animals onClick={findAnimals}>Animals</Animals>
                    <Enemies onClick={findUrukhai}>Uruk-hai & Others</Enemies>
                    <Heavenly onClick={findHeavenly}>Heavenly/Gods</Heavenly>
                    <Ent onClick={findEnts}>Ents</Ent>
                    <Other onClick={findOthers}>Other</Other>
                </ColorOfCharacters>

                <SearchByName
                    name="searchbar"
                    type="text"
                    placeholder="Search by character"
                    id="searchByCharacter"
                    onChange={handleSearch}
                    // onChange={event => {setSearch(event.target.value)}}
                />

            </SearchBar>
            <CharacterList>
                
                <ListOfCharacters>
                    {filteredCharacters
                    .filter(person => {
                        if (search === "") {
                            return person
                        } else if (search.includes(person.race)) {
                            return person
                        } else if (person.name.toLowerCase().includes(search.toLowerCase()) ||
                        person.race.toLowerCase().includes(search.toLowerCase())) {
                            return person
                        } else {
                            return person
                        }
                    })
                    .map(person => {
                        return (
                            <Character 
                            key={person.id} 
                            character={person} 
                            search={search}/>
                        )
                    })
                    }
                </ListOfCharacters>
            </CharacterList>
        </Page>
    )
}

const mapStateToProps = state => {
    return {
      characters: state.characters
    };
  };

export default connect(mapStateToProps, {
    loadCharacters
})(Characters)