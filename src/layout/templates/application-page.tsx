import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { GlobalHeader } from "../patterns/global-header";
import { ApplicationTitleBar } from "../patterns/application-title-bar";

export function ApplicationPage() {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <GlobalHeader />
      <Box sx={{ height: 48, borderBottom: 1, borderColor: "divider" }}>
        <ApplicationTitleBar />
      </Box>
      <Box sx={{ p: 3, flexGrow: 1 }}>
        <Typography variant="h5" gutterBottom>
          Lean starter template
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This page is now a direct MUI composition without the Yoga layout engine.
        </Typography>
      </Box>
    </Box>
  );
}
