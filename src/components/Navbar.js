import React,{ Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import Logout from "../API/logoutApi"
import isActive from "../helpers/isActive"
import isLoggedIn from "../helpers/isAuth"



const Menu = ({ history }) => (
    <div>
        <ul className="nav nav-tabs bg-info">
            <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/")}
                    to="/"
                >
                    Home
                </Link>
            </li>

            <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/dashboard")}
                    to="/dashboard"
                >
                    Dashboard
                </Link>
            </li>

           {!isLoggedIn() && (
               <Fragment>
                     <li className="nav-item">
                        <Link
                            className="nav-link"
                            style={isActive(history, "/login")}
                            to="/login"
                        >
                            Login
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            style={isActive(history, "/register")}
                            to="/register"
                        >
                            Register
                        </Link>
                    </li>
               </Fragment>
           )}

            {isLoggedIn() && (
                <div>
                    <li className="nav-item">
                            <span
                                className="nav-link"
                                style={{ cursor: "pointer", color: "#ffffff" }}
                                onClick={() =>
                                    Logout(() => {
                                        history.push("/");
                                    })
                                }>
                                Logout
                            </span>
                    </li>
                </div>
            )}
        </ul>
    </div>
);

export default withRouter(Menu);
