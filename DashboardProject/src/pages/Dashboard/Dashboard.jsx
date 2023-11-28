import Button from "@mui/material/Button";
import { FirstRow } from "./FirstRow";
import SecondRow from "./SecondRow";
import { ThirdRow } from "./ThirdRow";
import { DownloadOutlined } from "@mui/icons-material";
import { Box } from "@mui/material";

const Dashboard = () => {
  return (
    <>
      <Box sx={{ textAlign: "right" }}>
        <Button sx={{ padding: "6px 8px" , textTransform:'capitalize' }} variant="contained">
          <DownloadOutlined />
          Download Reports
        </Button>
      </Box>

      <FirstRow />
      <SecondRow />
      <ThirdRow />
    </>
  );
};

export default Dashboard;
