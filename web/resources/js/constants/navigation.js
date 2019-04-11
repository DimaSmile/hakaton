import React from "react";
import * as route from "./routes";
import MenuIcon from "@material-ui/icons/Menu";

export const navigationLinks = [
    {
        icon: <MenuIcon />,
        name: "Simple Page 1",
        route: route.SIMPLE_PAGE_1
    },
    {
        icon: <MenuIcon />,
        name: "Simple Page 2",
        route: route.SIMPLE_PAGE_2
    },
    {
        icon: <MenuIcon />,
        name: "Simple Page 3",
        route: route.SIMPLE_PAGE_3
    }
];
