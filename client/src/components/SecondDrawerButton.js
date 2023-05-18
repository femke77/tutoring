import { Box, Button } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CloseIcon from "@mui/icons-material/Close";

export default function SecondDrawerButton(props) {
  return (
    <Box
      sx={{
        background: "#2C2729",
        color: "white",
        width: "30px",
        height: "20px",
        ml: "0px",
        p: 3,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button variant="text" onClick={props.handleDrawer}>
        {!props.open ? (
          <ChevronRightIcon
            sx={{
              color: props.color,
            }}
          />
        ) : (
          <CloseIcon sx={{ color: props.color }} />
        )}
      </Button>
    </Box>
  );
}
