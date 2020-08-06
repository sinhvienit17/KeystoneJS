import axios from 'axios'
import { put } from 'redux-saga/effects';

const BASE_URL = "http://localhost:3000/admin/api";

const query = `query getBooks{ 
    allBooks {
        id 
        name 
        publishDate 
        numberStorage 
        pageNumber 
        description 
        author{name} 
        category{name} 
        image{publicUrlTransformed(transformation: {width: "100", height: "100", crop: "pad"})} 
    }}`;
function* getBooks() {
    try {
        const data = yield axios({
            url: BASE_URL,
            method: 'POST',
            data: {
                "query": query,
            }
        })
        const books = data.data.data.allBooks;
        const bookst = [...new Set(books.map(book => book.name))];
        const authors = [...new Set(books.map(book => book.author.name))];
        const categorys = [...new Set(books.map(book => book.category.name))];
        console.log("saga", authors, categorys, bookst)
        yield put({ type: 'BOOK_DATA', bookData: books });
        yield put({ type: 'SET', authors: authors, categorys: categorys, books: bookst })
    } catch (err) {
        console.log(err);
    }
}

export default getBooks;