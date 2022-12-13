import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Alert from "@mui/material/Alert";

export const SuccessAlert = ({ showSuccessAlert }) => (
  <div className="container">
    <Box sx={{ width: "50%" }}>
      <Collapse in={showSuccessAlert}>
        <Alert severity="success" variant="filled">
          Contract successfully created!
        </Alert>
      </Collapse>
    </Box>
  </div>
);
