import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Checkout from '../Pages/Checkout/Checkout';
import Home from '../Pages/Home/Home/Home';
import Register from '../Pages/Register/Register';

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
                path: '/checkout/:id',
                element: <Checkout />,
                loader: ({ params }) => fetch(`http://localhost:5000/service/${params.id}`),
            },
            {
                path: '/register',
                element: <Register />,
            },
        ],
    },
]);
export default route;
