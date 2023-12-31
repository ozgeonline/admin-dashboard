import { useState } from "react";
import { useEffect } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";
import useMediaQuery from '@mui/material/useMediaQuery';

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMd = useMediaQuery(theme.breakpoints.down('md'));

  const mobilColumns = {
    id: true,
    name: true,
    phone: false,
    email: false,
    cost: true,
    date:true
  }

  const allColumns = {
    id: true,
    name: true,
    phone: true,
    email: true,
    cost: true,
    date:true
  }

  const [columnVisible, setColumnVisible] = useState(allColumns);

  useEffect(() => {
    const newColumns = matchesSm || matchesMd ? mobilColumns : allColumns;
    setColumnVisible(newColumns);
  }, [matchesSm,matchesMd]);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.2},
    {
      field: "name",
      headerName: "Name",
      flex: 0.7,
      cellClassName: "name-column--cell",
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
      field: "cost",
      headerName: "Cost",
      flex: 0.6,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          ${params.row.cost}
        </Typography>
      ),
    },
    {
      field: "date",
      headerName: "Date",
      flex: 0.6
    },
  ];

  return (
    <Box m="20px" width="95vw" overflow="hidden">
      <Header title="INVOICES" subtitle="List of Invoices Balances" />
      <Box
        m={matchesSm ? "0.3rem" : "0 10px 5px 90px"}
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
        <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} columnVisibilityModel={columnVisible}/>
      </Box>
    </Box>
  );
};

export default Invoices;