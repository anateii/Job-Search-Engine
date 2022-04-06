
export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES'

export const addToFavAction = (company) => ({
    type: ADD_TO_FAVOURITES,
    payload: company
})
