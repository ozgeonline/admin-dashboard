import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import useMediaQuery from '@mui/material/useMediaQuery';

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box mb="30px">
      <Typography
        variant={matchesSm ? "h4" : "h3"}
        color={colors.grey[100]}
        fontWeight={matchesSm ? "normal" : "bold"}
        m={matchesSm ? "0 0 5px 10px" : "0 0 5px 100px"}
      >
        {title}
      </Typography>
      <Typography 
        variant={matchesSm ? "h6" : "h5"}
        color={colors.greenAccent[400]}
        fontWeight={matchesSm ? "normal" : "bold"}
        m={matchesSm ? "0 0 5px 10px" : "0 0 5px 100px"}>
          {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;