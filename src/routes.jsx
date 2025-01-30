import { createBrowserRouter } from "react-router-dom";
import Home from './pages/Home'
import ListUsers from './pages/ListUsers'


const router = createBrowserRouter ([

    {
        path: '/', // raiz / 
        element: <Home />
    },

    {
        path: '/usersList', // url path
        element: <ListUsers />
    }
])

export default router