import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = () => {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <Box height="75vh" m="0 10px 5px 100px">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
