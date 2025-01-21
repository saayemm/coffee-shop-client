import './index.css'
import App from './App.jsx'
import ReactDOM from "react-dom/client";
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import AddCoffee from './components/coffee/AddCoffee.jsx';
import UpdateCoffee from './components/coffee/UpdateCoffee.jsx';
// import AuthProvider from './providers/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
  },
  {
    path: '/addcoffee',
    element: <AddCoffee></AddCoffee>
  },
  {
    path: '/updatecoffee',
    element: <UpdateCoffee></UpdateCoffee>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)