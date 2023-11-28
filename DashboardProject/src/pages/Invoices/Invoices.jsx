import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { rows, columns } from "./Data";

const Invoices = () => {
  return (
    <div style={{ height: 600, width: "98%", margin: "0 auto" }}>
      <DataGrid
        checkboxSelection
        slots={{
          toolbar: GridToolbar,
        }}
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </div>
  );
};

export default Invoices;
