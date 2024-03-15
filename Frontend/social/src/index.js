import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Posts from './Posts';
import Counter from './Counter';
import Registation from './Registration';
import ViewPosts from './Viewpost';
import CreatePost from './CreatePosts';
import ContactForm from './ContactForm';
import AboutUs from './AboutUs';

const router = createBrowserRouter([
  {
    path : '/',
    element : <Home></Home>,
    errorElement : <h1>Page Not Found</h1>
  },
  {
    path : '/login',
  element : <Login></Login>
  },
  {
    path : '/posts/:postId',
  element : <Posts></Posts>
  },
  {
    path : '/Counter',
    element : <Counter></Counter>
  },
  {
    path : '/posts',
  element : <h1>All Posts</h1>
  },
  {
    path : '/register',
  element : <Registation/>
  },

  {
    path : '/createPost',
    element : <CreatePost/>
  },

  {
    path : '/viewpost',
  element : <ViewPosts/>
  },
  {
    path : '/contacts',
  element : <ContactForm/>
  },
  {
    path: '/about',
    element: <AboutUs/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router}></RouterProvider>
  </React.StrictMode>
);
