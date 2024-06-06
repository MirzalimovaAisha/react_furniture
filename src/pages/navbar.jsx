import React from "react";
import { NavbarContainer, NavbarLogo, NavbarMenu } from "./style";

const Navbar = () => {
    return (
        <NavbarContainer>
            <NavbarLogo>Furniture</NavbarLogo>

            <NavbarMenu>
                <div>Home</div>
                <div>Services</div>
                <div>Doctors</div>
                <div>Products</div>
                <div>Gallery</div>
            </NavbarMenu>
        </NavbarContainer>
    );
};

export default Navbar;
