import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

const Bar = () => {
  return (
    <Box>
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="60vh" width="90vw" m="0 10px 5px 70px">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;