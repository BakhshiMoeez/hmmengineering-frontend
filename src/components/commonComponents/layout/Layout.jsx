import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Header from '../header/Header.jsx';
import Footer from '../footer/Footer.jsx';
import './Layout.css';

function Layout() {
  return (
    <>
        <Header />
        <Container >
          <Outlet />
        </Container>
        <Footer />
    </>
  )
}

export default Layout