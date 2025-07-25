import { Box } from "@mui/material";
import {styled} from "@mui/system";

const DashboardBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.light,
    borderRadius: "1rem",
    boxShadow: "0.05rem 0.1rem 0.05rem 0.05rem rgba(0,0,0, .8) "
}));

export default DashboardBox;