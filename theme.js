import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#556cd6",
        },
        secondary: {
            main: "#19857b",
        },
        error: {
            main: red.A400,
        },
        background: {
            default: "#fff",
        },
    },
    overrides: {
        MuiTabs: {
            flexContainer: {
                flexDirection: "column",
            },
            indicator: {
                display: "none",
            },
        },
        MuiTab: {
            root: {
                "&$selected": {
                    color: "tomato",
                    borderBottom: "2px solid tomato",
                },
            },
        },
    },
});

export default theme;
