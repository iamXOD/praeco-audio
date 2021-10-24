import { ExitToAppRounded, Help } from "@mui/icons-material";
import { AppBar, Grid, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Drawer from "./Drawer";

const COLOR = "#990000";

const Layout: React.FC = (props) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position='static'
                sx={{
                    background:
                        "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(180,2,2,1) 100%)",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                }}>
                <Toolbar>
                    <Grid>
                        <Typography variant='h3' sx={{ color: COLOR }}>
                            Praeco
                        </Typography>
                        <Typography variant='subtitle1' sx={{ color: COLOR }}>
                            Sistema de información al publico
                        </Typography>
                    </Grid>
                    <Grid
                        sx={{
                            marginLeft: "auto",
                            display: "inline-list-item",
                        }}>
                        <Typography variant='subtitle1' sx={{ margin: 1 }}>
                            Super Administrator
                        </Typography>
                        <Help sx={{ margin: 1 }} />
                        <ExitToAppRounded sx={{ margin: 1 }} />
                    </Grid>
                </Toolbar>
            </AppBar>
            <Drawer />
            {props.children}
        </Box>
    );
};

export default Layout;
