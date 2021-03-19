import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import {loadCharacters} from '../actions'

import Character from './Character'

const Page = styled.div`
    font-size: 1.3rem;
`
const SearchBar = styled.div`
    display:flex;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto 2%;
    background-color: #FFE9A9;
    opacity: .7;
`
const SearchByName = styled.input`
    width: 20%;
    font-size:1.25rem;
`
const ColorOfCharacters = styled.div`
    font-weight: bold;
    padding-right: 1.5rem;
    display: flex;
`
const Search = styled.p`
    margin: 0 1rem;
    padding: 0;

    &:hover {
        cursor: pointer;
        font-size: 1.4rem;
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
    background-color: #FFE9A9;
    opacity: .6;
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
        props.loadCharacters()
    },[])

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
                    <Enemies onClick={findUrukhai}>Uruk-hai and other Enemies</Enemies>
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
                    .filter((person) => {
                        if (search === "") {
                            return person
                        } else if (search.includes(person.race)) {
                            return person
                        } else if (person.name.toLowerCase().includes(search.toLowerCase()) ||
                                    person.race.toLowerCase().includes(search.toLowerCase())) {
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