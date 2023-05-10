import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';

const route = new createBrowserRouter([
    {
        path: '/',
        element: <Main />,
    },
]);
export default route;
