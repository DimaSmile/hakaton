import React from "react";
import * as route from "./routes";
import DateRangeIcon from "@material-ui/icons/DateRange";
import UserIcon from "@material-ui/icons/People";

export const navigationLinks = [
    {
        icon: <UserIcon />,
        name: "Home",
        route: route.DASHBOARD_HOME
    },
    {
        icon: <UserIcon />,
        name: "Team",
        route: route.TEAM
    },
    {
        icon: <DateRangeIcon />,
        name: "My Vocation",
        route: route.MY_VOCATION
    },
    {
        icon: <DateRangeIcon />,
        name: "Birthdays",
        route: route.BIRTHDAYS
    },
    {
        icon: <DateRangeIcon />,
        name: "Team Building",
        route: route.TEAM_BUILDING
    },
    {
        icon: <DateRangeIcon />,
        name: "Team Calendar",
        route: route.TEAM_CALENDAR
    }
];
