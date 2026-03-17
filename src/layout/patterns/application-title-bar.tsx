// Application title bar pattern: title on the left, utilities on the right

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

export function ApplicationTitleBar() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: "100%",
        paddingLeft: 3,
        paddingRight: 3,
      }}
    >
      {/* Left: title */}
      <Typography variant="h6">
        Application
      </Typography>

      {/* Right: utilities */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
        <IconButton size="small">
          <FileUploadOutlinedIcon />
        </IconButton>
        <IconButton size="small">
          <FileDownloadOutlinedIcon />
        </IconButton>
        <IconButton size="small">
          <MoreVertOutlinedIcon />
        </IconButton>
        <IconButton size="small">
          <SettingsOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

