import { useReducer } from "react"
import ParamsContext from "./ParamsContext"
import reducer, {initState } from "./ParamsReducer"

function ParamsProvider({ Children }) {

    const [state, dispatch] = useReducer(reducer, initState)
    return (
        <ParamsContext.Provider value={[state, dispatch]}>
            {Children}
        </ParamsContext.Provider>
    )
}

export default ParamsProvider