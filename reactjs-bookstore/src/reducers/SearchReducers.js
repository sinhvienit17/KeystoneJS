const initial = {
    books: [],
    authors: [],
    categorys: [],
}

const SearchReducers = (state = initial, action) => {
    switch (action.type) {
        case 'NEW_BOOK_SEARCH':
            return {
                ...state, books: action.bookSearch,
            }
        case 'NEW_AUTHOR_SEARCH':
            return {
                ...state, authors: action.authorSearch,
            }
        case 'NEW_CATEGORY_SEARCH':
            return {
                ...state, categorys: action.categorySearch,
            }
        case 'SET':
            return {
                ...state,
                authors: action.authors,
                categorys: action.categorys,
                books: action.books
            }
        default:
            return state;
    }
}

export {
    SearchReducers,
};