import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Fellow from './Fellow'

const Page = styled.div`
    border: 1px solid black;
    min-height: 100px;
    display: flex;
    flex-wrap: wrap;
`

const Fellowship = props => {

    const {fellowship} = props
    

    return (
        <Page>
            {props.fellowship.map(person => {
                return (
                    <Fellow
                        key={person.id}
                        character={person}
                    />
                )
            })}
        </Page>
    )
}

const mapStateToProps = state => {
    return {
        fellowship: state.fellowship
    }
}

export default connect(mapStateToProps, {})(Fellowship)