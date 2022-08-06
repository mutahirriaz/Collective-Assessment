import React from 'react'
import {Container, Row, Col} from "react-bootstrap"
import SearchBar from "./MainHead"
import MainImg from "./BackImage"

const index = () => {
  return (
    <div className='first_sec_maindiv'>
        <Container>
            <Row>
                <Col lg={6} md={12} sm={12} xs={12}>
                    <SearchBar />
                </Col>
                <Col lg={6} md={12} sm={12} xs={12}>
                    <MainImg />
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default index