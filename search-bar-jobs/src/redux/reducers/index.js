import { ADD_TO_FAVOURITES} from '../actions'
import { initialState } from '../store'


const mainReducer = (state=initialState, action) => {
switch(action.type) {
    case ADD_TO_FAVOURITES:
     return {
         ...state,
         companies: {
             ...state.companies,
             favourites: [...state.companies.favourites, action.payload]
         }
     }
     default:
        return state
}

}

export default mainReducer