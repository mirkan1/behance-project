import React, { Component } from 'react';
import { Nav, Navbar, Image } from 'react-bootstrap';
import styled from 'styled-components';
import Button from '@bit/nexxtway.react-rainbow.button';
import littleLogo from '../assets/littleLogo.png';
import littleLogoBlk from '../assets/littleLogoBlk.png';


const Styles = styled.div`
.navbar {
    background: black;
    height: 20px;
}
@media only screen and (min-width: 1200px) {
    .navbar {
        margin: 0 10%;
    }
}
@media only screen and (max-width: 767px) {
    .navbar-collapse {
        background: #6B0656;
        z-index:99;
    }
}

.navbar-brand, .navbar-nav, .nav-link, .nav-item {
    color: #fff;
    
    &:hover {
        color: #000;
    }
}
`;

export class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.state = {logo: littleLogo};
    }
    
    render() {
        console.log(this.state.logo)
        return (
            <Styles>
                <Navbar expand="lg" bg="transparent" expand="md">
                    <Navbar.Brand href="/" 
                        onMouseOver={() => {this.setState({ logo: littleLogoBlk })}}
                        onMouseLeave={() => {this.setState({ logo: littleLogo })}}
                    >
                    <Image src={this.state.logo === undefined ? littleLogo : this.state.logo} rounded alt="logo"></Image>
                    CHARTMETRIC</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav" 
                        style={{  }}
                    >
                        <Nav className="ml-auto">
                            <Nav.Item><Nav.Link style={{ color: "#fff"}} href="/">Home</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link style={{ color: "#fff"}} href="/about">about</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link style={{ color: "#fff"}} href="/products">Products</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link style={{ color: "#fff"}} href="/tour">Tour</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link style={{ color: "#fff"}} href="/pricing">Pricing</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link style={{ color: "#fff"}} href="/blog">Blog</Nav.Link></Nav.Item>
                        </Nav>
                        <Nav className="ml-auto">
                            <Nav.Item>
                                <Button
                                    style={{ width: "150px"}}
                                    shaded
                                    label="Sign up"
                                    onClick={() => alert('buttonOnNavBar!')}
                                    variant="base" 
                                    type="submit" />
                                <Button
                                    style={{ width: "150px", marginLeft: "10px"}}
                                    shaded
                                    label="login"
                                    onClick={() => alert('buttonOnNavBar!')}
                                    variant="success" 
                                    type="submit" />
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Styles>
        )
    }
}