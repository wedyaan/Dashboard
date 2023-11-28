import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { rows, columns } from "./Data";

const Contacts = () => {
  return (
    <div style={{ height: 600, width: "98%", margin: "0 auto" }}>
      <DataGrid
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

export default Contacts;
