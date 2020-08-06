import { all, takeEvery } from 'redux-saga/effects';
import { GET_BOOK_DATA } from '../constants/actionTypes';
import getBooks from './BookSaga'
import search from './SearchSaga'
import { fetchToken, addUser } from './TokenSaga'
function* rootSaga() {
    yield all([
        takeEvery(GET_BOOK_DATA, getBooks),
        takeEvery("SEARCH", search),
        takeEvery("LOGIN", fetchToken),
        takeEvery("ADD_USER", addUser),
    ])
}

export default rootSaga;