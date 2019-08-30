import React from "react";
import { getState } from "../StateProvider/StateProvider";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { RouteLink } from "../Router/index";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    }
}));

const NavBar = ({ onMenuClick, menuState }) => {
    const classes = useStyles();
    const [, dispatch] = getState();

    const logout = () => {
        dispatch({ type: "LOGOUT" });
    };

    return (
        <AppBar position="fixed">
            <Toolbar>
                <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                    onClick={() => onMenuClick(!menuState)}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Gauge Iot
                </Typography>
                <RouteLink to="/signin">
                    <Button color="inherit" onClick={logout}>
                        Logout
                    </Button>
                </RouteLink>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
