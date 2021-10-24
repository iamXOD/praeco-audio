import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const DRAWER_WIDTH = "11.25rem";
const COLOR = "#333333";

function Drawer() {
    return (
        <Box sx={{ width: DRAWER_WIDTH }}>
            <List dense sx={{ padding: 0 }}>
                <ListItem sx={{ border: 1 }}>
                    <Typography
                        variant='subtitle2'
                        textAlign='center'
                        fontWeight={700}
                        color={COLOR}>
                        Tribunal Provincial Popular de la Habana
                    </Typography>
                </ListItem>
                {[
                    "PROGRAMACIÓN",
                    "SEÑALAMIENTOS",
                    "INFORMACIONES",
                    "MULTIMEDIA",
                    "SEGURIDAD",
                ].map((text) => (
                    <ListItem button key={text} sx={{ border: 1 }}>
                        <ListItemText
                            primary={text}
                            primaryTypographyProps={{
                                variant: "subtitle2",
                                fontWeight: 700,
                                color: COLOR,
                                textAlign: "center",
                            }}
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}

export default Drawer;
