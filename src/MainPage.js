import React, { Component } from 'react'
import { Jumbotron as Jumbo, Container, Row, Col, Form } from 'react-bootstrap';
import thirdLayer from './assets/thirdLayer.png';
import forthLayer from './assets/forthLayer.png';
import extraLayer from './assets/extraLayer.png';
import Card from './components/Card';
import logo from './assets/logo.png';
import Button from '@bit/nexxtway.react-rainbow.button';
import styled from 'styled-components';

const Cardsdiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  
  & > * {
    margin: 20px;
    flex: 1 1 auto;
  }
`;

export default class MainPage extends Component {
  render() {
    return (
      <>
        <Jumbo style={{
          background: `url(${thirdLayer})`,
          backgroundSize: "100% 100%",
          height: "950px",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
        }}>
          <h2 style={{ textAlign: "Center" }}>Trusted by the industry</h2>
          <Cardsdiv>
            <Card image={logo} title='Card' text='Default card style' />
            <Card image={logo} title='Card' text='Default card style' />
            <Card image={logo} title='Card' text='Default card style' />
            <Card image={logo} title='Card' text='Default card style' />
            <Card image={logo} title='Card' text='Default card style' />
            <Card image={logo} title='Card' text='Default card style' />
            <Card image={logo} title='Card' text='Default card style' />
            <Card image={logo} title='Card' text='Default card style' />
            <Card image={logo} title='Card' text='Default card style' />
            <Card image={logo} title='Card' text='Default card style' />
            <Card image={logo} title='Card' text='Default card style' />
            <Card image={logo} title='Card' text='Default card style' />
          </Cardsdiv>
        </Jumbo>
        {/* ################## */}
        <Jumbo style={{
          background: `url(${forthLayer})`,
          backgroundSize: "cover",
          height: "500px",
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        align="center">
          <Container>
            <Row>
              <Col lg={6} md={6} sm={12} xl={6} xs={12}>
                <h2>We crunch the music data so you don't have to</h2>
                <p>
                  This is a simple hero unit, a simple jumbotron-style component for calling
                  extra attention to featured content or information. Nimple jumbotron-style component for calling
                  extra attention to featured content or information.
                </p>
                <Row>
                  <Col></Col>
                  <Col>
                    <Button
                      style={{ width: "150px"}}
                      shaded
                      label="More Info"
                      onClick={() => alert('buttonOnForthLayer!')}
                      variant="success" />
                  </Col>
                  <Col></Col>
                </Row>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </Jumbo>
            <Jumbo style={{
              background: `url(${extraLayer})`,
              backgroundSize: "100% 100%",
              height: "150px",
              backgroundRepeat: "no-repeat",
              paddingTop: "100px",
            }} align="bottom">
            <Row>
              <Col></Col>
              <Col lg={6} md={6} sm={12} xl={6} xs={12}>
                <Row align="center" style={{ color: "white" }}>
                  <Col>
                    <h6>To help you stay informed and make better decisions.</h6>
                  </Col>
                  <Col>
                    <Button
                      style={{ width: "150px", position: "absolute", bottom: 0, color: "white"}}
                      shaded
                      label="About Us"
                      onClick={() => alert('buttonOnExtraLayer!')}
                      variant="base" />
                  </Col>
                </Row>
              </Col>
              <Col></Col>
            </Row>
            </Jumbo>
        {/* ################## */}
        <Row align="center">
          <Col></Col>
          <Col lg={8} md={8} sm={12} xl={6} xs={12}>
            <h2>Subscribe Now</h2>
            <Form>
              <Row>
                <Col lg={8} md={8} sm={8} xl={8} xs={8}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Write your email here" />
                  </Form.Group>
                </Col>
                <Col>
                  <Button
                    style={{ width: "130px"}}
                    shaded
                    label="Subscribe"
                    onClick={() => alert('alert!')}
                    variant="success" 
                    type="submit" />
                </Col>
              </Row>
            </Form>
          </Col>
          <Col></Col>
        </Row>            
      </>
    )
  }
}
