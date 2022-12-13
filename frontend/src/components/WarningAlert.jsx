import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Alert from "@mui/material/Alert";

export const WarningAlert = ({ showWarningAlert }) => (
  <Box>
    <Collapse in={showWarningAlert}>
      <Alert severity="warning" variant="standard">
        Contract terminated.
      </Alert>
    </Collapse>
  </Box>
);
