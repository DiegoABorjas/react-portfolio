import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './tailwind.css'

// Import the pages the router will use to conditionally show the appropriate views
import App from './App'
import ErrorPage from './pages/ErrorPage'
import ProjectsPage from './pages/ProjectsPage'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'projects',
        element: <ProjectsPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
    ],
  },
])

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)