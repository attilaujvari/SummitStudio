import React from 'react'
import Nav from "react-bootstrap/Nav";
import { Link, animateScroll as scroll } from "react-scroll"

export default function Navbar() {
    return(
        <div>
            <Nav justify variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/contact">
                        Contact Us
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}