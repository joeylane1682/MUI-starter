// Reusable global header bar (single use per page) – React pattern

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AppsIcon from "@mui/icons-material/Apps";

export function GlobalHeader() {
  return (
    <AppBar position="static" color="primary" elevation={0}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* left */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton edge="start" color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Evermont
          </Typography>
        </Box>

        {/* right */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <IconButton color="inherit">
            <EventAvailableIcon />
          </IconButton>
          <IconButton color="inherit">
            <NotificationsNoneIcon />
          </IconButton>
          <IconButton color="inherit">
            <AppsIcon />
          </IconButton>
          <Avatar sx={{ ml: 1 }}>
            J
          </Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
