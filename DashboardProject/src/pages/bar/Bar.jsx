import BarChart from "./BarChart";
import Header from "../../components/Header";
import { Box } from "@mui/material";


const Bar = () => {
  return (
    <Box>
      <Header
        title="Bar Chart"
        subTitle="The minimum wage in Germany, France and Spain (EUR/month)"
      />
      <BarChart />
    </Box>
  );
};

export default Bar;
