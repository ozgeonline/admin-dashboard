import React from 'react'
import { Box, useTheme } from "@mui/material";
import GeographyChart from "../../components/GeographyChart";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import useMediaQuery from '@mui/material/useMediaQuery';

const Geography = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box m="20px">
      <Header title="Geography" subtitle="Simple Geography Chart" />

      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
        m={matchesSm ? "0 10px 5px 20px" : "0 10px 5px 100px"}
      >
        <GeographyChart />
      </Box>
    </Box>
  )
}

export default Geography
