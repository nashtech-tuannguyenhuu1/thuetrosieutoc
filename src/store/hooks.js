import { useContext } from "react";
import { default as ParamsContext } from "./ParamsContext"

export const useStoreParams = () => {
    const [initState, dispatch] = useContext(ParamsContext)
    return [initState, dispatch]
}