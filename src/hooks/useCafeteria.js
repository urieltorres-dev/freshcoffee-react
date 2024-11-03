import { useContext } from 'react'
import CafeteriaContext from '../context/cafeteriaProvider'

const useCafeteria = () => {
    return useContext(CafeteriaContext)
}

export default useCafeteria
