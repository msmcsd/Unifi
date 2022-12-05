import * as React from 'react';
import { DataGrid} from '@mui/x-data-grid';
// import { withStyles } from '@mui/material';

// const StyledDataGrid = withStyles({
//   root: {
//     "& .MuiDataGrid-renderingZone": {
//       maxHeight: "none !important"
//     },
//     "& .MuiDataGrid-cell": {
//       lineHeight: "unset !important",
//       maxHeight: "none !important",
//       whiteSpace: "normal"
//     },
//     "& .MuiDataGrid-row": {
//       maxHeight: "none !important"
//     }
//   }
// })(DataGrid);

const setTextColor = (params) => {
  let textColor = "";
  
  switch (params.row.type) {
    case "Error":
      textColor = "red";
      break;
    case "Commands":
      textColor = "blue";
      break;
    case "Progress":
      textColor = "green";
      break;
    default:
  }
  // console.log(params.row.type)
  // console.log(textColor)
  return (
        <div
          style={{
            color: `${textColor}`,
            textAlign: "left",
          }}
        >
          {params.value}
        </div>
      );
}

const columns = [
  { field: 'id', headerName: 'ID', width: 10 },
  {
    field: 'type',
    headerName: 'type',
    width: 50,
  },
  {
    field: 'log',
    headerName: '',
    width: 500,
    renderCell: (params) => setTextColor(params)
  }
];

const rows = [
  { id: 1, type: 'Snow', log: 'By default, DataGridPro allows all columns to be resized by dragging the right portion of the column separator.' },
  { id: 2, type: 'Lannister', log: 'Cersei'},
  { id: 3, type: 'Lannister', log: 'Jaime' },
  { id: 4, type: 'Stark', log: 'Arya'},
  { id: 5, type: 'Commands', log: 'API documentation for the React DataGrid component. Learn about the available props and the CSS API.' },
  { id: 6, type: 'Melisandre', log: "null"},
  { id: 7, type: 'Clifford', log: 'Ferrara' },
  { id: 8, type: 'Frances', log: 'Rossini' },
  { id: 9, type: 'Roxie', log: 'Harvey' },
  { id: 10, type: 'Roxie', log: 'Harvey' },
  { id: 11, type: 'Snow', log: 'By default, DataGridPro allows all columns to be resized by dragging the right portion of the column separator.' },
  { id: 12, type: 'Lannister', log: 'Cersei'},
  { id: 13, type: 'Lannister', log: 'Jaime' },
  { id: 14, type: 'Stark', log: 'Arya'},
  { id: 15, type: 'Error', log: 'API documentation for the React DataGrid component. Learn about the available props and the CSS API.' },
  { id: 16, type: 'Melisandre', log: "test"},
  { id: 17, type: 'Clifford', log: 'Ferrara' },
  { id: 18, type: 'Frances', log: 'Rossini' },
  { id: 19, type: 'Error', log: 'Harvey' },
  { id: 20, type: 'Progress', log: 'Harvey' },
  { id: 21, type: 'Roxie', log: 'Harvey' },
  { id: 22, type: 'Roxie', log: 'Harvey' },
];

function StatusGrid() {
  return (
    <div style={{ height: 300, width: 600 }}>
      <DataGrid
        initialState={{
          columns: {
            columnVisibilityModel: {
              id: false,
              type: false,
            },
          },
        }}
        sx={{  // Removes outline on focus
          "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
            outline: "none !important",
          },
          "&>.MuiDataGrid-main": { // Removes row dividers
            "&>.MuiDataGrid-columnHeaders": {
              borderBottom: "none",
            },

            "& div div div div >.MuiDataGrid-cell": {
              borderBottom: "none",
            },
          }
        }}
        // options={{customHeaderRender: () => null} }
        rows={rows}
        columns={columns}
        // pageSize={100}
        // rowsPerPageOptions={[1000]}
        // disableSelectionOnClick
        // hideFooterPagination
        hideFooter={true}
        onCellDoubleClick={() => console.log("double clicked")}
        // rowHeight="16px"
        getRowHeight={() => 18}
        headerHeight={1}
        
      />
    </div>
  );
}

export default StatusGrid;