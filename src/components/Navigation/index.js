import React from 'react';
import Nav from 'react-bootstrap/Nav';

function Navigation(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
    } = props;

    return (
        <header className="flex-row">
            <h2 className='col-3 mt-2'>
                <a data-testid="link" href="/">
                    Kale Evans
                </a>
            </h2>
            <Nav variant='tabs' defaultActiveKey='/About' className='justify-content-end'>
                <Nav.Item>
                    <Nav.Link href='/About'>About Me</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey='Portfolio'>Portfolio</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey='Contact'>Contact</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey='Resume'>Resume</Nav.Link>
                </Nav.Item>
            </Nav>
        </header>
    )
}

export default Navigation;