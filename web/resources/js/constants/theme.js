import grey from "@material-ui/core/colors/grey";
import red from "@material-ui/core/colors/red";

import cyan from "@material-ui/core/colors/cyan";

const primary = "#1e262e";
const primaryLight = grey[300];
const primaryDark = grey[400];
const secondary = "#ef375e";

export const CustomTheme = {
    typography: {
        useNextVariants: true
    },
    palette: {
        primary: {
            main: primary,
            light: primaryLight,
            dark: primaryDark
        },
        secondary: {
            main: secondary
        }
    },
    error: {
        main: red[500]
    },
    overrides: {
        MuiButton: {
            root: {
                minWidth: "100px",
                background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
            },
            outlined: {
                padding: "5px 30px",
                background: "none",
                border: "none",
                outline: "none !important"
            },
            outlinedSecondary: {
                border: "1.2px solid " + secondary
            }
        },
        MuiAppBar: {
            root: {
                boxShadow: "1px 1px 1px #cecece"
            }
        },
        MuiBottomNavigationAction: {
            root: {
                fontSize: "42px",
                "&$selected svg": {
                    fontSize: "28px"
                }
            }
        }
    }
};
