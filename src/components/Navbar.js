import './NavStyle.css'
import React, { useState } from "react";
import {
    AppBar,
    Box,
    Divider,
    Drawer,
    IconButton,
    Toolbar,
    Typography,
} from "@mui/material";
import Logo from "../Images/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    // hndle menu click
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    //menu drawer
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography
                color={"goldenrod"}
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, my: 2 }}
            >
                <a href='/'>
                <img src={Logo} alt="logo" height={"70"} width="200" />
                </a>
            </Typography>
            <Divider />
            <ul className="mobile-navigation">
                <li>
                    <NavLink activeClassName="active" to={"/"}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/item"}>Menu</NavLink>
                </li>
                <li>
                    <NavLink to={"/about"}>About</NavLink>
                </li>
                <li>
                    <NavLink to={"/contact"}>Contact</NavLink>
                </li>
                <li>
                    <NavLink to={"/search"}>Search</NavLink>
                </li>
                <li>
                    <NavLink to={"/login"}>Login</NavLink>
                </li>
            </ul>
        </Box>
    );
    return (
        <>
            <Box>
                <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            sx={{
                                mr: 2,
                                display: { sm: "none" },
                            }}
                            onClick={handleDrawerToggle}
                        >
                            Shoping
                            <MenuIcon />

                        </IconButton>
                        <Typography
                            color={"goldenrod"}
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                            <img src={Logo} alt="logo" height={"70"} width="250" />
                        </Typography>
                        <Box sx={{ display: { xs: "none", sm: "block" } }}>
                            <ul className="navigation-menu">
                                <li>
                                    <NavLink activeClassName="active" to={"/"}>
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/item"}>Menu</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/about"}>About</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/contact"}>Contact</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/search"}>Search</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/login"}>Login</NavLink>
                                </li>
                            </ul>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Box component="nav">
                    <Drawer
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        sx={{
                            display: { xs: "block", sm: "none" },
                            "& .MuiDrawer-paper": {
                                boxSizing: "border-box",
                                width: "240px",
                            },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box>
                    <Toolbar />
                </Box>
            </Box>
        </>
    );
}
export default Navbar;