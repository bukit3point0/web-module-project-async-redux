import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import {loadCharacters} from '../actions'

import Character from './Character'

const Page = styled.div`
    font-size: 1.25rem;
`
const SearchBar = styled.div`
    display:flex;
    justify-content: flex-end;
`
const SearchByName = styled.input`
    width: 20%;
    margin-right: 10%;
    font-size:1.25rem;
`

const ColorOfCharacters = styled.div`
    font-weight: bold;
    padding-right: 2.5rem;
    margin-right: 2.5rem;
    border-right: 1px solid black;
`
const Human = styled.p`
    color: #804004;
    margin: 0;
    padding: 0;
`
const Elf = styled.p`
    color: #FF8C00;
    margin: 0;
    padding: 0;
`
const Dwarf = styled.p`
    color: #5F9EA0;
    margin: 0;
    padding: 0;
`
const Hobbit = styled.p`
    color: #008000;
    margin: 0;
    padding: 0;
`
const Animals = styled.p`
    color: #BDB76B;
    margin: 0;
    padding: 0;
`
const Enemies = styled.p`
    color: #FF0000;
    margin: 0;
    padding: 0;
`
const Heavenly = styled.p`
    color: #FFD700;
    margin: 0;
    padding: 0;
`
const Ent = styled.p`
    color: #C9A26B;
    margin: 0;
    padding: 0;
`
const Other = styled.p`
    color:black;
    margin: 0;
    padding: 0;
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
    /* flex-wrap: wrap; */
    height: 35vh;
    width: 80vw;
    margin: auto;
    overflow-y: auto;
`

const Characters = props => {

    const {characters, loadCharacters} = props
    
    const [search, setSearch] = useState("")

    // const races = []

    // characters.map(race => {
    //     if(!races.includes(race.race))
    //         races.push(race.race)
    // })
    
    // console.log(races)

    useEffect(() => {
        props.loadCharacters()
    },[])

    const handleSearch = e => {
        setSearch(e.target.value)
    }

    const findHumans = e => {
        setSearch("Human, Men")
        console.log(`search`,search)
    }

    const findElves = e => {
        setSearch("Elf, Elves, Half-elven")
        console.log(`search`,search)
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
                <ColorOfCharacters>
                    <Human onClick={findHumans}>Humans</Human>
                    <Elf onClick={findElves}>Elves</Elf>
                    <Dwarf onClick={findDwarves}>Dwarves</Dwarf>
                    <Hobbit onClick={findHobbits}>Hobbits</Hobbit>
                    <Animals onClick={findAnimals}>Animals</Animals>
                    <Enemies onClick={findUrukhai}>Uruk-hai and other Enemies</Enemies>
                    <Heavenly onClick={findHeavenly}>Heavenly/Gods</Heavenly>
                    <Ent onClick={findEnts}>Ents</Ent>
                    <Other onClick={findOthers}>Other</Other>
                </ColorOfCharacters>

                <ListOfCharacters>
                    {characters
                    .filter((person) => {
                        if (search === "") {
                            return person
                        } else if (search.includes(person.race)) {
                            return person
                        } else if (person.name.toLowerCase().includes(search.toLowerCase())) {
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