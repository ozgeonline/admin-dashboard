import { Box, IconButton, useTheme } from '@mui/material'
import React, { useContext } from 'react'
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { tokens, ColorModeContext } from '../../theme';
import { Link } from 'react-router-dom';

// const Item = ({ title, to, icon, selected, setSelected }) => {
  
//   return (
//     <MenuItem
//       active={selected === title}
//       onClick={() => setSelected(title) }
//       icon={icon}
//     >
//       <Typography>{title}</Typography>
//       <Link to={to}  />
//     </MenuItem>
//   );
// };

const Topbar = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const colorMode = useContext(ColorModeContext)

  return (
    <Box display="flex" justifyContent="space-between" p={2} sx={{ m: "0 0 5px 100px" }}>
      {/* Search Bar */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ml:2, flex:1}} placeholder='Search...' />
        <IconButton type='button' sx={{p:1}}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* Icons */}
      <Box display="flex">

        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" 
          ? ( <LightModeOutlinedIcon /> ) 
          : ( <DarkModeOutlinedIcon /> )
          }
        </IconButton>

      <Link to="/faq">
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
      </Link>

      <Link to="/calendar">
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
      </Link>

      <Link to="/form">
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Link>

      </Box>
    </Box>
  )
}

export default Topbar
