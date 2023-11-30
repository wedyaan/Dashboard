import Header from "../../components/Header";
import LineChart from "./LineChart";
import { Box } from "@mui/material";

const Line = () => {
  return (
    <Box>
      <Header title="Line Chart" subTitle="Simple Line Chart" />

      <LineChart />
    </Box>
  );
};

export default Line;
