import { useState } from "react";
import { useEffect } from "react";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import { useTheme } from "@emotion/react";
import Header from "../../components/Header";
import useMediaQuery from '@mui/material/useMediaQuery';

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMd = useMediaQuery(theme.breakpoints.down('md'));

  const mobilColumns = {
    id: true,
    registrarId:false,
    name: true,
    age: false,
    phone: false,
    city: true,
    email: false,
    address:false,
    zipCode: true
  }

  const allColumns = {
    id: true,
    registrarId:true,
    name: true,
    age: true,
    phone: true,
    city: true,
    email: true,
    address:true,
    zipCode: true
  }

  const [columnVisible, setColumnVisible] = useState(allColumns);

  useEffect(() => {
    const newColumns = matchesSm || matchesMd ? mobilColumns : allColumns;
    setColumnVisible(newColumns);
  }, [matchesSm,matchesMd]);

  const columns = [
    { field: "id", headerName: "ID" ,flex:0.3},
    { field: "registrarId", headerName: "Registrar ID", flex:0.5},
    {
      field: "name",
      headerName: "Name",
      flex: 0.7,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
      flex: 0.3
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 0.5,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 0.7,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 0.7
    },
    {
      field: "zipCode",
      headerName: `${matchesSm ? "Zip" : "ZipCode"}`,
      flex: 0.4
    }
  ];

  return (
    <Box m="20px" width="95vw" overflow="hidden">
      <Header title="CONTACTS" subtitle="List of Contacts for Future Reference" />
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
          "& .css-qvtrhg-MuiDataGrid-virtualScroller": {
            overflowX: "hidden"
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.primary[400],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.primary[200]} !important`,
          },
        }}
      >
        <DataGrid slots={{ toolbar: GridToolbar }} rows={mockDataContacts} columns={columns} columnVisibilityModel={columnVisible}/>
      </Box>
    </Box>
  );
};

export default Contacts;