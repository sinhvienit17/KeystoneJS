import React from 'react';
import 'antd/dist/antd.css';
import {Layout} from 'antd';

const {Footer} = Layout;
function Footers(props) {
    return (
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    );
}

export default Footers;