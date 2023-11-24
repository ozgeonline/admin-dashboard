import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";
import { useTheme } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';


const Pie = () => {
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMd = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh"   m={(matchesSm && matchesMd) ? "0 15px 5px 10px" : "0 15px 35px 100px"}>
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
