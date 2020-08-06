import React from 'react';
import { useSelector } from 'react-redux';
import { Layout, Menu } from 'antd';
import {
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
const { Sider } = Layout;
const { SubMenu } = Menu;

export default function Slider() {

  const token = useSelector(state => state.token.value);
  const users = useSelector(state => state.token.users);
  const books = useSelector(state => state.bookList.books)
  const authors = [...new Set(books.map(book => book.author.name))];
  const categorys = [...new Set(books.map(book => book.category.name))];

  console.log("author", authors);
  console.log("category", categorys);
  const handleSelect = (e) => {
    if (e.item.props.children[1].props) console.log("select", e.item.props.children[1].props.children);
    else console.log("select", e.item.props.children[1]);
    console.log("check", e.keyPath[1]);

  }
  return (
    <Sider>
      <div className="logo" />

      <Menu theme="dark" defaultSelectedKeys={['0']} mode="inline" onClick={handleSelect}>
        <Menu.Item key="Book" icon={<PieChartOutlined />} value="Book" >
          <Link to={{
            pathname: "/",
            state: {
              type: "book",
              value: "book",
            }
          }}>
            Book
         </Link>
        </Menu.Item>
        <SubMenu key="Author" icon={<UserOutlined />} title="Author">
          {authors.map((ath, index) => {
            return <Menu.Item key={index + 1} value={ath} >
              <Link to={{
                pathname: "/",
                state: {
                  type: 'Author',
                  value: ath,
                }
              }}>
                {ath}
              </Link>
            </Menu.Item>
          })}
        </SubMenu>
        <SubMenu key="Category" icon={<TeamOutlined />} title="Category">
          {categorys.map((cate, index) => {
            return <Menu.Item key={index + authors.length + 1} value={cate} >
              <Link to={{
                pathname: "/",
                state: {
                  type: 'Category',
                  value: cate,
                }
              }}>
                {cate}
              </Link>
            </Menu.Item>
          })}
        </SubMenu>

        {token !== "" ?
          <SubMenu key="User" icon={<FileOutlined />} title="User">
            {users && users !== [] && users.map((user, index) => {
              return <Menu.Item
                key={index + 1 + authors.length + categorys.length}
                value={user.username}
              >
                {user.username}
              </Menu.Item>
            })}
          </SubMenu> : ""}
      </Menu>
    </Sider>
  )
}