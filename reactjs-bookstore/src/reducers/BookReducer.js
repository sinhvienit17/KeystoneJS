const initial = {
    books: [],
    databooks: [],
    choose: null,
};

const BookReducer = (state = initial, action) => {
    switch (action.type) {
        case 'BOOK_DATA':
            return {
                ...state,
                books: action.bookData,
                databooks: action.bookData,
                choose: null,
            }
        case 'DATA_BOOK_SEARCH':
            console.log("da nhan", action.books)
            return {
                ...state, databooks: action.books
            };
        case 'CHOOSE':
            return {
                ...state, choose: action.book
            }
        default:
            return state;
    }
};

export default BookReducer;