import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./Data";
import { Box, Typography, useTheme } from "@mui/material";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";

const Team = () => {
  const theme = useTheme();

  const columns = [
    { field: "id", headerName: "ID", align: "center  ", headerAlign: "center" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      align: "center ",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      align: "center  ",
      headerAlign: "center",
    },
    {
      field: "age",
      headerName: "Age",
      align: "center  ",
      headerAlign: "center",
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
      align: "center  ",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "Access",
      align: "center  ",
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              p: "5px",
              width: "99px",
              borderRadius: "3px",
              textAlign: "center",
              display: "flex",
              justifyContent: "space-evenly",
              backgroundColor:
                access === "Admin"
                  ? theme.palette.primary.main
                  : access === "Manager"
                  ? theme.palette.secondary.dark
                  : "#3da58a",
            }}
          >
            {access === "Admin" && (
              <AdminPanelSettingsOutlined
                sx={{ color: "#fff" }}
                fontSize="small"
              />
            )}
            {access === "Manager" && (
              <LockOpenOutlined sx={{ color: "#fff" }} fontSize="small" />
            )}
            {access === "User" && (
              <SecurityOutlined sx={{ color: "#fff" }} fontSize="small" />
            )}

            <Typography sx={{ fontSize: "13px", color: "#fff" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <div style={{ height: 600, width: "98%", margin: "0 auto" }}>
      <DataGrid
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </div>
  );
};

export default Team;
