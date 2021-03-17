import {
    LOAD_CHARACTERS,
    DISPLAY_CHARACTERS,
    NO_CHARACTERS,
    ADD_TO_FELLOWSHIP,
    REMOVE_FROM_FELLOWSHIP
} from '../actions/index'

const initialState = {
    characters: [],
    fellowship: []
}

export const reducer = (state=initialState, action) => {
    switch(action.type) {
        case(LOAD_CHARACTERS):
            return ({
                ...state,
            })
        case(DISPLAY_CHARACTERS):
            return ({
                ...state,
                characters: action.payload
            })
        case(NO_CHARACTERS):
            return({
                ...state
            })
        case(ADD_TO_FELLOWSHIP):
            return ({
                ...state,
                fellowship: [
                    ...state.fellowship,
                    action.payload
                ] 
            });
        case(REMOVE_FROM_FELLOWSHIP):
            return ({
                ...state,
                fellowship: [
                    ...state.fellowship.filter(character => 
                        character !== action.payload)

                ]
            })
        default: 
            return state;
    }
}