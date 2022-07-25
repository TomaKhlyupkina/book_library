import UserAccount from "../pages/UserAccount";
import Books from "../pages/Books";
import Login from "../pages/Login";

export const privateRoutes = [
    {path: "/account", element: <UserAccount/>, exact: true},
    {path: "/books", element: <Books/>, exact: true},
]

export const publicRoutes = [
    {path: "/login", element: <Login/>, exact: true},
]