import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import AboutUs from './components/aboutus/AboutUs.jsx'
import ContactUs from './components/contactus/ContactUs.jsx'
import Projects from './components/projects/Projects.jsx'
import Layout from './components/commonComponents/layout/Layout.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <App />,
      },
      {
        path: '/about',
        element: <AboutUs />,
      }, 
      {
        path: '/contact',
        element: <ContactUs />,
      },
      {
        path: '/projects',
        element: <Projects />,
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
