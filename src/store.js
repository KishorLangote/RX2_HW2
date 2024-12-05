import { createStore, applyMiddleware } from 'redux'
import loggerMiddleware from "./loggerMiddlerware"
import libraryReducer from "./libraryReducer"

const store = createStore(libraryReducer, applyMiddleware(loggerMiddleware))

store.subscribe(() => console.log(store.getState()))

export default store