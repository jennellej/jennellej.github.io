import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import BlogBrowse from './components/BlogBrowse';
import BlogPost from './components/BlogPost';
import Home from './components/Home';
import posts from './blog/posts';
import ErrorPage from './components/ErrorPage';
import Contact from './components/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <App> <ErrorPage /> </App>,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'blog',
        loader: () => posts,
        element: <BlogBrowse />,
      },
      {
        path: 'blog/:index',
        loader: ({ params }) => {
          const index = Number(params.index);

          if (isNaN(index) || index < 0 || index >= posts.length) {
            throw new Error('Invalid blog post index');
          }

          return posts[index];
        },
        element: <BlogPost />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
