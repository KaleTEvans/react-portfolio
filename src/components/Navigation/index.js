import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import About from '../About';
import Portfolio from '../Portfolio';

function Navigation(props) {
    
    //const [eventKey, selectActiveKey] = useState('About');
    const {
        eventKey,
        selectActiveKey
    } = props;

    return (
        <header className="flex-row">
            <h2 className='col-3 mt-2'>
                <a data-testid="link" href="/">
                    Kale Evans 
                </a>
            </h2>
            <Nav variant='tabs' defaultActiveKey='About' className='justify-content-end mr-2'>
                <Nav.Item>
                    <Nav.Link eventKey='About' onClick={() => selectActiveKey('About')}>About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey='Portfolio' onClick={() => selectActiveKey('Portfolio')}>Portfolio</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey='Contact' onClick={() => selectActiveKey('Contact')}>Contact</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey='Resume' onClick={() => selectActiveKey('Resume')}>Resume</Nav.Link>
                </Nav.Item>
            </Nav>
        </header>

    )
}

export default Navigation;