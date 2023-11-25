import { useState } from "react";
import { useEffect } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import useMediaQuery from '@mui/material/useMediaQuery';

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMd = useMediaQuery(theme.breakpoints.down('md'));

  const mobilColumns = {
    id: true,
    name: true,
    age: false,
    phone: false,
    email: false,
    access: true
  }

  const allColumns = {
    id: true,
    name: true,
    age: true,
    phone: true,
    email: true,
    access: true
  }

  const [columnVisible, setColumnVisible] = useState(allColumns);

  useEffect(() => {
    const newColumns = matchesSm || matchesMd ? mobilColumns : allColumns;
    setColumnVisible(newColumns);
  }, [matchesSm,matchesMd]);
  

  const columns = [
    { 
      field: "id", 
      headerName: "ID" ,
      flex:0.2
    },
    {
      field: "name",
      headerName: "Name",
      flex: 0.6,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
      flex:0.4,
      cellClassName: "age-column--cell",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 0.7,
      cellClassName: "phone-column--cell"
    },
    {
      field: "email",
      headerName: "Email",
      flex: 0.7,
      cellClassName: "email-column--cell"
    },
    {
      field: "access",
      headerName: "Access Level",
      headerAlign: "center",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="50%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              access === "admin"
                ? colors.greenAccent[600]
                : access === "manager"
                ? colors.greenAccent[700]
                : colors.greenAccent[800]
            }
            borderRadius="4px"
            color="#eee"
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}
            <Typography color="whitesmoke" >
              {matchesSm || matchesMd ? "" : access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px" width="95vw" overflow="hidden"> 
      <Header title="TEAM" subtitle="Managing the Team Members" />
      <Box
        m={matchesSm ? "0.5rem" : "0 10px 5px 90px"}
        height="75vh"
        width="90vw"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[400],
            fontWeight: "600"
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.primary[400],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[600],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.primary[400],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} columnVisibilityModel={columnVisible}/>
      </Box>
    </Box>
  );
};

export default Team;