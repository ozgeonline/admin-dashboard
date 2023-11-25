import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";
import useMediaQuery from '@mui/material/useMediaQuery';

const Bar = () => {
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMd = useMediaQuery(theme.breakpoints.down('md'));
  

  return (
    <Box>
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="60vh" width="90vw" m={matchesSm ? "0 10px 5px 10px" : "0 10px 5px 70px"}>
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;