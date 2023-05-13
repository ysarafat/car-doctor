import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import BookService from '../Pages/BookService/BookService';
import Booked from '../Pages/Booked/Booked';
import Home from '../Pages/Home/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import PrivateRoute from './PrivateRoute';

const route = new createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/booking/:id',
                element: <BookService />,
                loader: ({ params }) => fetch(`http://localhost:5000/service/${params.id}`),
            },
            {
                path: '/register',
                element: <Register />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/booked-service',
                element: (
                    <PrivateRoute>
                        <Booked />
                    </PrivateRoute>
                ),
            },
        ],
    },
]);
export default route;
