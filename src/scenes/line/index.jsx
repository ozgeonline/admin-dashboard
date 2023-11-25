import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from "@mui/material";

const Line = () => {
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <Box height={matchesSm ? "50vh" : "75vh"} m={matchesSm ? "0 10px 5px 10px" : "0 10px 5px 70px"}>
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
