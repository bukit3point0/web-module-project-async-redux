import axios from 'axios'

export const LOAD_CHARACTERS = "LOAD_CHARACTERS"
export const DISPLAY_CHARACTERS = "DISPLAY_CHARACTERS"
export const NO_CHARACTERS = "NO_CHARACTERS"
export const ADD_TO_FELLOWSHIP = "ADD_TO_FELLOWSHIP"
export const REMOVE_FROM_FELLOWSHIP = "REMOVE_FROM_FELLOWSHIP"

const API_KEY = process.env.REACT_APP_LOTRKEY
const API_URL = `https://the-one-api.dev/v2/character`

// const [lotr, setLotr] = useState([])

export const loadCharacters = () => {
    return dispatch => {
        dispatch({type: LOAD_CHARACTERS})

        axios.get(API_URL, {
            headers: {
              'Authorization': `Bearer ${API_KEY}`
            }
          })
          .then(res => {
            console.log(res.data)
            dispatch({
                type: DISPLAY_CHARACTERS,
                payload: res.data.docs
            })
            // setLotr(res.data.docs)
          })
          .catch(err => {
            console.log(err)
            dispatch({
                type: NO_CHARACTERS,
                payload: err.Response.code
            })
          })
    }
}

export const addToFellowship = (character) => {
    return {
        type: ADD_TO_FELLOWSHIP, 
        payload: character
    }
}

export const removeFromFellowship = (character) => {
    return {
        type: REMOVE_FROM_FELLOWSHIP, 
        payload: character
    }
}