import { put } from 'redux-saga/effects'
import Axios from 'axios';
const URL = "http://localhost:3000/admin/api";


function* search(input) {
    const books = input.books;
    const authors = input.authors;
    const categorys = input.categorys;
    const sorts = input.sorts;

    console.log("searchsaga1", input);

    console.log("searchsaga2", books, authors, categorys, sorts);


    const query =
        `query($books: [String],$authors: [String],$categorys: [String], $sort: [SortBooksBy!]){
            allBooks (sortBy:$sort, where: {
                AND: [
                    { name_in: $books},     
                    { author: {name_in: $authors}},     
                    { category: {name_in: $categorys}},     
                ]
            })  			
            {
                id 
                name 
                publishDate 
                numberStorage 
                pageNumber 
                description 
                author{name} 
                category{name} 
                image{publicUrlTransformed(transformation: {width: "100", height: "100", crop: "pad"})}
                }
            }`;

    const data = yield Axios({
        url: URL,
        method: 'POST',
        data: {
            "query": query,
            "variables": {
                "books": books,
                "authors": authors,
                "categorys": categorys,
                "sort": sorts,
            }
        }
    })//(authors === []) ? authorSearch : 
    console.log("saga", data.data.data.allBooks)
    yield put({ type: "DATA_BOOK_SEARCH", books: data.data.data.allBooks })
};


export default search;