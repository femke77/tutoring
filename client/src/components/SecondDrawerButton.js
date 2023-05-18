import { Button } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CloseIcon from "@mui/icons-material/Close";


export default function SecondDrawerButton(props) {
    
    return (
        <Button variant="text" onClick={props.handleDrawer}>
        {!props.open ? (
          <ChevronRightIcon
            sx={{
              color: props.color,
            }}
          />
        ) : (
          <CloseIcon sx={{ color: props.color}} />
        )}
      </Button>
    )
}