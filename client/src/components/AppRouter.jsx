import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import UserAccount from "../pages/UserAccount";
import Books from "../pages/Books";

const AppRouter = () => {
    return (
        <Routes>
            <Route
                path="/account"
                element={<UserAccount/>}
            >
            </Route>
            <Route
                path="/books"
                element={<Books/>}
            >
            </Route>
            <Route
                path="*"
                element={<Navigate replace to="/books" />}
            />
        </Routes>
    );
};

export default AppRouter;