import React from 'react';
import Select from 'react-select';
import { useSelector, useDispatch } from 'react-redux';
import makeAnimated from 'react-select/animated';
import './FilterPane.css'
import { Row, Col, Button } from 'antd';
const animatedComponents = makeAnimated();

function SortPane() {
    const books = useSelector(state => state.bookList.books);
    const bookSearch = useSelector(state => state.bookSearch.books);
    const authorSearch = useSelector(state => state.bookSearch.authors);
    const categorySearch = useSelector(state => state.bookSearch.categorys);
    const dispatch = useDispatch();
    const BookOptions = books.map(book => {
        return {
            value: book.name, label: book.name
        }
    })

    const handleSort = (e) => {
        if (e === "author_ASC") {
            dispatch({ type: 'SEARCH', books: bookSearch, authors: authorSearch, categorys: categorySearch, sorts: "author_ASC" });
        }
        if (e === "author_DESC") {
            dispatch({ type: 'SEARCH', books: bookSearch, authors: authorSearch, categorys: categorySearch, sorts: "author_DESC" });
        }
        if (e === "category_ASC") {
            dispatch({ type: 'SEARCH', books: bookSearch, authors: authorSearch, categorys: categorySearch, sorts: "category_ASC" });
        }
        if (e === "category_DESC") {
            dispatch({ type: 'SEARCH', books: bookSearch, authors: authorSearch, categorys: categorySearch, sorts: "category_DESC" });
        }
    }
    return (
        <>
            <Row>
                <Col span={2}>Book</Col>
                <Col span={6}>
                    <Select
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        // defaultValue={[BookOptions[1]]}
                        isMulti
                        onChange={(e) => {
                            const books = e.map(value => value.label)
                            console.log("book search: ", e);
                            dispatch({ type: 'NEW_BOOK_SEARCH', bookSearch: books });
                        }}
                        options={BookOptions}
                    />
                </Col>
                <Col span={4}><Button onClick={() => handleSort("author_ASC")}>SortByAuthorASC</Button></Col>
                <Col span={4}><Button onClick={() => handleSort("author_DESC")}>SortByAuthorDESC</Button></Col>
                <Col span={4}><Button onClick={() => handleSort("category_ASC")}>SortByCategoryASC</Button></Col>
                <Col span={4}><Button onClick={() => handleSort("category_DESC")}>SortByCategoryDESC</Button></Col>
                {/* <Col offset={2}></Col> */}
            </Row>
        </>
    );
}

export default SortPane;
