import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const ShowNavBar = ({ children }) => {
    const location = useLocation();
    const [navBar, setNavBar] = useState(false);

    useEffect(() => {
        console.log("Location", location);
        if (location.pathname === "/login") {
            setNavBar(false);
        } else if (location.pathname === "/signUp") {
            setNavBar(false);
        } else if (location.pathname === "/EditHomepage") {
            setNavBar(false);
        } else if (location.pathname === "/users") {
            setNavBar(false);
        } else if (location.pathname === "/newUsers") {
            setNavBar(false);
        } else if (location.pathname === "/reviews") {
            setNavBar(false);
        } else if (location.pathname === "/booking") {
            setNavBar(false);
        } else {
            setNavBar(true);
        }
    }, [location]);

    return (
        <div>
            {navBar && children}
        </div>
    )
}

export default ShowNavBar