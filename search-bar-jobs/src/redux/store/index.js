import { createStore } from "redux";
import mainReducer from "../reducers";
import { persistReducer, persistStore } from 'redux-persist'
import localStorage from 'redux-persist/lib/storage'
import { encryptTransform } from 'redux-persist-transform-encrypt'

export const initialState = //localStorage.getItem("STORE")
  //? JSON.parse(localStorage.getItem("STORE")):
   {
      companies: {
        favourites: [],
      },
    };


 const persistConfig = {
      key: 'root',
      storage: localStorage,
      transforms: [
        encryptTransform({
          secretKey: process.env.REACT_APP_SECRET_KEY,
          // you should not write the secretKey here in the code
          onError: (error) => {
            console.log(error)
          },
        }),
      ],
    }



const persistedReducer = persistReducer(persistConfig, mainReducer)



export const configureStore = createStore(
  // 1) the main reducer of the application (or the only one)
  persistedReducer,
  // 2) the initial state for your redux store
  initialState,
  // 3) an enhancer function, for extensions or middlewares
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(configureStore)
