import { combineReducers } from 'redux'
import BookReducer from './BookReducer'
import { SearchReducers } from './SearchReducers'
import { TokenReducer } from './TokenReducer'

const rootReducers = combineReducers({
    bookList: BookReducer,
    bookSearch: SearchReducers,
    token: TokenReducer,
})

export default rootReducers;