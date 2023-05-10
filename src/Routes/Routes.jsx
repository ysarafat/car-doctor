import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Checkout from '../Pages/Checkout/Checkout';
import Home from '../Pages/Home/Home/Home';

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
            },
        ],
    },
]);
export default route;
