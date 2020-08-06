import React from 'react'
import { Row, Col } from "antd"
import SigninForm from "./SigninForm"

function Signin() {
    return (
        <Row>
            <Col offset={4}></Col>
            <Col span={16}><SigninForm /></Col>
            <Col offset={4}></Col>
        </Row>

    );
}

export default Signin;