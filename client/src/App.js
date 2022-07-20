import React from "react";
import "./styles/App.css";
import Books from "./pages/Books";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import UserAccount from "./pages/UserAccount";

function App() {

    return (
        <BrowserRouter>
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
        </BrowserRouter>
    );
}

export default App;