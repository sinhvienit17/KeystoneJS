import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import './FilterPane.css'
import { useSelector, useDispatch } from 'react-redux';



import { Row, Col, Button } from 'antd';


const animatedComponents = makeAnimated();

function FilterPane() {
    const books = useSelector(state => state.bookList.books);
    const bookSearch = useSelector(state => state.bookSearch.books);
    const authorSearch = useSelector(state => state.bookSearch.authors);
    const categorySearch = useSelector(state => state.bookSearch.categorys);
    const dispatch = useDispatch();

    const authors = [...new Set(books.map(book => book.author.name))];
    const categorys = [...new Set(books.map(book => book.category.name))];

    const AuthorOptions = authors.map((author, authorid) => {
        return {
            value: authorid, label: author
        }
    })

    const CategoryOptions = categorys.map((category, categoryid) => {
        return {
            value: categoryid, label: category
        }
    })

    const handleSearch = () => {
        console.log("onClick");
        dispatch({ type: 'SEARCH', books: bookSearch, authors: authorSearch, categorys: categorySearch, sorts: "id_ASC" });
    }

    const handleReset = () => {
        console.log("onClick");
        dispatch({ type: "GET_BOOK_DATA" });
    }

    return (
        <>
            <Row>
                <Col span={2}>Author</Col>
                <Col span={8}>
                    <Select
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        onChange={(e) => {
                            const everAuthor = e.map(event => event.label)
                            console.log("author search: ", everAuthor);
                            dispatch({ type: 'NEW_AUTHOR_SEARCH', authorSearch: everAuthor });
                        }}
                        isMulti
                        options={AuthorOptions}
                    />
                </Col>
                <Col span={2}>Category</Col>
                <Col span={8}>
                    <Select
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        onChange={(e) => {
                            const everCategory = e.map(event => event.label);
                            console.log("category search: ", everCategory);
                            dispatch({ type: 'NEW_CATEGORY_SEARCH', categorySearch: everCategory });
                        }}
                        isMulti
                        options={CategoryOptions}
                    />
                </Col>
                <Col span={4}>
                    <Button onClick={handleSearch}>Search</Button>
                    <Button onClick={handleReset}>All</Button>
                </Col>
            </Row>
        </>
    );
}

export default FilterPane;