export const loadState = () => {
    try {
        const serialState = localStorage.getItem('fellowship')
        const parsedData = JSON.parse(serialState)
        if (serialState === null) {
            console.log(`nope`)
            return undefined
        } else {
            return parsedData
        }
    } catch (err) { 
        console.log(`undefined`)
        return undefined
    }
}

export const saveState = state => {
    try {
        const serialState = JSON.stringify(state)
        console.log(`save state ${serialState}`)
        localStorage.setItem('fellowship', serialState)
    } catch (err) {
        console.log(`oops`)
    }
}