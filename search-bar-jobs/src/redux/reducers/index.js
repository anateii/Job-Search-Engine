import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES} from '../actions'
import { initialState } from '../store'


const mainReducer = (state=initialState, action) => {
//const newStore = (() => {
    switch(action.type) {
        case ADD_TO_FAVOURITES:
         return {
             ...state,
             companies: {
                 ...state.companies,
                 favourites: [...state.companies.favourites, action.payload]
             }
         }

         case REMOVE_FROM_FAVOURITES:
             return {
                 ...state,
                 companies : {
                     ...state.companies,
                     favourites: state.companies.favourites.filter((job,i)=> i !== action.payload)
                 }
             }
         default:
            return state
    }
//}
//)()

//localStorage.setItem('STORE', JSON.stringify(newStore))


//return newStore

}

export default mainReducer