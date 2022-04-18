import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/logo/logo.png'
const Headers = () => {
    const [user]=useAuthState(auth)
    const handleSignOut=()=>{
        signOut(auth);
    }
    return (
        
        <div>
            <Navbar fixed="top" collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to='/'><img style={{height:'40px'}} src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='/home' href="#features">Home</Nav.Link>
                            <Nav.Link href="home#services">My Service</Nav.Link>
                            <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
                            
                            
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to='/about'>About</Nav.Link>
                            {
                                user?
                                <button onClick={handleSignOut} className='btn'>Sing Out</button>:
                                <Nav.Link as={Link} eventKey={2} to='/login'>
                               Login
                            </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Headers;