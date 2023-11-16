import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@emotion/react";


const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" ,flex:0.3},
    { field: "registrarId", headerName: "Registrar ID"},
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
      flex:0.3
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 0.7,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 0.7,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 0.7,
    },
    {
      field: "city",
      headerName: "City",
      flex: 0.7
    },
    {
      field: "zipCode",
      headerName: "ZipCode",
      flex: 0.7
    }
  ];

  return (
    <Box m="20px" width="95vw" overflow="hidden">
      <Header title="CONTACTS" subtitle="List of Contacts for Future Reference" />
      <Box
        m="0 10px 5px 100px"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[400],
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
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.primary[200]} !important`,
          },
        }}
      >
        <DataGrid slots={{ toolbar: GridToolbar }} rows={mockDataContacts} columns={columns} />
      </Box>
    </Box>
  );
};

export default Contacts;