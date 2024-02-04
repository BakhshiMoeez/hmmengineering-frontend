import { Outlet } from 'react-router-dom';
// import Header from '../header/Header.jsx';
import Footer from '../footer/Footer.jsx';
import { Navbar } from '../navbar/Navbar.jsx';
import './Layout.css';

function Layout() {
  return (
    <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout