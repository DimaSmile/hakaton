import React from "react";
import * as route from "./routes";
import DateRangeIcon from "@material-ui/icons/DateRange";
import UserIcon from "@material-ui/icons/people";

export const navigationLinks = [
    {
        icon: <UserIcon />,
        name: "Simple Page 1",
        route: route.SIMPLE_PAGE_1
    },
    {
        icon: <DateRangeIcon />,
        name: "Simple Page 2",
        route: route.SIMPLE_PAGE_2
    },
    {
        icon: <DateRangeIcon />,
        name: "Simple Page 3",
        route: route.SIMPLE_PAGE_3
    }
];
