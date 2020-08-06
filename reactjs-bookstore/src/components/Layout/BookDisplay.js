import React, { useEffect } from 'react';
import Slider from './Slider.js';
import { Layout, Card, Space } from 'antd';
import FilterPane from '../Bookstore/FilterPane';
import SortPane from '../Bookstore/SortPane';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import Category from '../Bookstore/Category';
import Author from "../Bookstore/Author";

const { Content, Footer } = Layout;

const { Meta } = Card;
function BookDisplay() {
  const choose = useSelector(state => state.bookList.choose);
  const databooks = useSelector(state => state.bookList.databooks);
  const dispatch = useDispatch();

  const param = useLocation();
  console.log("params", param);
  useEffect(() => {
    dispatch({ type: "GET_BOOK_DATA" });
  }, [dispatch]);
  const handleClickCard = (book) => {
    console.log("key", book);
    dispatch({ type: 'CHOOSE', book: book });
  }
  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  return (
    <Layout style={{ minHeight: '100vh', backgroundIimage: 'linear-gradient(to right, #071429, #00293e, #003c40, #004e2f, #455b14)' }}>
      <Slider />
      <Layout className="site-layout">
        <Content style={{ margin: '2px 16px' }}>
          <SortPane />
          <FilterPane />
          {param.state === undefined ?
            <div className="site-layout-background" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex' }}>
              {choose === null ?
                databooks.map(book => {
                  return <Card
                    onClick={() => handleClickCard(book)}
                    key={book.id}
                    hoverable
                    style={{ width: '200px', height: '300px' }}
                    cover={<img alt={book.name} src={book.image.publicUrlTransformed} />}>
                    <Meta title={book.name} description={book.description} />
                  </Card>

                })
                : <Card
                  hoverable
                  title={"" + choose.category.name}
                  style={{ width: '100%', height: '370px' }}
                  actions={[
                    <IconText icon={EditOutlined} text={"" + choose.author.name} />,
                    <IconText icon={SettingOutlined} text={choose.pageNumber} />,
                    <IconText icon={EllipsisOutlined} text={choose.numberStorage} />,
                  ]}
                  extra={choose.publishDate}
                >
                  <Meta
                    avatar={<img alt={choose.id} src={choose.image.publicUrlTransformed} style={{ width: '200px', height: '200px' }} />}
                    title={choose.name}
                    description={choose.description}
                  />
                </Card>}
            </div>
            : param.state.type === "Author" ?
              <Author title={param.state.value} />
              :
              param.state.type === "Category" ?
                <Category title={param.state.value} />
                :
                <div className="site-layout-background" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex' }}>
                  {choose === null ?
                    databooks.map(book => {
                      return <Card
                        onClick={() => handleClickCard(book)}
                        key={book.id}
                        hoverable
                        style={{ width: '200px', height: '300px' }}
                        cover={<img alt={book.name} src={book.image.publicUrlTransformed} />}>
                        <Meta title={book.name} description={book.description} />
                      </Card>

                    })
                    : <Card
                      hoverable
                      title={"" + choose.category.name}
                      style={{ width: '100%', height: '370px' }}
                      actions={[
                        <IconText icon={EditOutlined} text={"" + choose.author.name} />,
                        <IconText icon={SettingOutlined} text={choose.pageNumber} />,
                        <IconText icon={EllipsisOutlined} text={choose.numberStorage} />,
                      ]}
                      extra={choose.publishDate}
                    >
                      <Meta
                        avatar={<img alt={choose.id} src={choose.image.publicUrlTransformed} style={{ width: '200px', height: '200px' }} />}
                        title={choose.name}
                        description={choose.description}
                      />
                    </Card>}
                </div>
          }
        </Content>
        <Footer style={{ textAlign: 'center' }}>BookStore ©2020 Created by NTQS</Footer>
      </Layout>
    </Layout>
  );
}

export default BookDisplay;