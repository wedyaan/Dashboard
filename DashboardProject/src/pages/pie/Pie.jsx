import { PieChart } from "./PieChart";
import Header from "../../components/Header";
import { Box } from "@mui/material";

const Pie = () => {
  return (
    <Box>
      <Header title="Pie Chart" subTitle="Simple Pie Chart" />
      <PieChart />
    </Box>
  );
};

export default Pie;
