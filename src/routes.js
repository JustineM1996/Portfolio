import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const Routers = (props) => {
    const { routes, path } = props
    return (
        <Routes location={path}>
            {
                routes.map((route, index) => {
                    return(
                        <Route
                            path={route.path}
                            exact={route.exact}
                            element={route.auth ? <route.component/> : <Navigate to={"/Justine-Portfolio"} />}
                            key={index}
                        />
                    )
                })
            }
        </Routes>
    );
};

export default Routers