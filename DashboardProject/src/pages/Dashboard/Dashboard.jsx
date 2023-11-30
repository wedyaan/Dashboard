import Button from "@mui/material/Button";
import { FirstRow } from "./FirstRow";
import SecondRow from "./SecondRow";
import { ThirdRow } from "./ThirdRow";
import { DownloadOutlined } from "@mui/icons-material";
import { Box, Stack } from "@mui/material";
import Header from "../../components/Header";

const Dashboard = () => {
  return (
    <div>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Header
          isDashboard={true}
          title={"DASHBOARD"}
          subTitle={"Welcome to your dashboard"}
        />

        <Box sx={{ textAlign: "right", mb: 1.3 }}>
          <Button
            sx={{ padding: "6px 8px", textTransform: "capitalize" }}
            variant="contained"
            color="primary"
          >
            <DownloadOutlined />
            Download Reports
          </Button>
        </Box>
      </Stack>

      <FirstRow />
      <SecondRow />
      <ThirdRow />
    </div>
  );
};

export default Dashboard;
