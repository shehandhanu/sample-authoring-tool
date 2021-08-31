import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

//Imported Reducers
import { getDataReducer } from './reducers/sampleReducer'

const reducer = combineReducers({
    data: getDataReducer
})

//Initial State is empty array if want it can get data on loacl device
const initialState = {
    data: []
}

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;