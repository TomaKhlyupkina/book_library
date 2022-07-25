import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import UserAccount from "../pages/UserAccount";
import Books from "../pages/Books";
import {privateRoutes, publicRoutes} from "../router/routes";



const AppRouter = () => {
    return (
        <Routes>
            {privateRoutes.map(route =>
                <Route
                    path={route.path}
                    element={route.element}
                    exact={route.exact}
                    key={route.path}
                />
            )}
            {publicRoutes.map(route =>
                <Route
                    path={route.path}
                    element={route.element}
                    exact={route.exact}
                    key={route.path}
                />
            )}

            <Route
                path="*"
                element={<Navigate replace to="/books" />}
            />
        </Routes>
    );
};

export default AppRouter;