import { useContext } from 'react';
import { DataGrid} from '@mui/x-data-grid';
import SocketEvent from '../constants/SocketEvent';
import ReducerAction from '../constants/ReducerAction';
import { CommandsContext } from '../contexts/CommandsContext';

const setTextColorByLogType = (params) => {

  const getColor = () => {
    switch (params.row.type) {
      case SocketEvent.Error: return "red";
      case SocketEvent.Parameters: return "blue";
      case SocketEvent.Progress: return "green";
      default:
    }
  }
  
  // console.log(params.row.type)
  // console.log(textColor)
  return (
        <div
          style={{
            color: `${getColor()}`,
            // textAlign: "left",
            fontSize: 13
          }}
        >
          {params.value}
        </div>
      );
}

const columns = [
  { field: 'id', headerName: '', width: 10 },
  {
    field: 'type',
    headerName: '',
    width: 50,
  },
  {
    field: 'log',
    headerName: '',
    width: 500,
    renderCell: (params) => setTextColorByLogType(params)
  }
];

// const rows = [
//   { id: 1, type: 'Snow', log: 'By default, DataGridPro allows all columns to be resized by dragging the right portion of the column separator.' },
//   { id: 2, type: 'Lannister', log: 'Cersei'},
//   { id: 3, type: 'Lannister', log: 'Jaime' },
//   { id: 4, type: 'Stark', log: 'Arya'},
//   { id: 5, type: 'Parameters', log: 'API documentation for the React DataGrid component. Learn about the available props and the CSS API.' },
//   { id: 6, type: 'Melisandre', log: "null"},
//   { id: 7, type: 'Clifford', log: 'Ferrara' },
//   { id: 8, type: 'Frances', log: 'Rossini' },
//   { id: 9, type: 'Roxie', log: 'Harvey' },
//   { id: 10, type: 'Roxie', log: 'Harvey' },
//   { id: 11, type: 'Snow', log: 'By default, DataGridPro allows all columns to be resized by dragging the right portion of the column separator.' },
//   { id: 12, type: 'Lannister', log: 'Cersei'},
//   { id: 13, type: 'Lannister', log: 'Jaime' },
//   { id: 14, type: 'Stark', log: 'Arya'},
//   { id: 15, type: 'Error', log: 'API documentation for the React DataGrid component. Learn about the available props and the CSS API.' },
//   { id: 16, type: 'Melisandre', log: "test"},
//   { id: 17, type: 'Clifford', log: 'Ferrara' },
//   { id: 18, type: 'Frances', log: 'Rossini' },
//   { id: 19, type: 'Error', log: 'Harvey' },
//   { id: 20, type: 'Progress', log: 'Harvey' },
//   { id: 21, type: 'Roxie', log: 'Harvey' },
//   { id: 22, type: 'Roxie', log: 'Harvey' },
// ];

// Theme to remove cell borders
// export const customTheme = createTheme({
//     components: {
//         MuiDataGrid: {
//             styleOverrides: {
//                 root: {
//                     border: 'none'
//                 }
//             }
//         }
//     }
// })

function StatusGrid() {
  const { logs, dispatch } = useContext(CommandsContext)
  // console.log(logs);

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
        rows={logs}
        columns={columns}
        // pageSize={100}
        // rowsPerPageOptions={[1000]}
        // disableSelectionOnClick
        // hideFooterPagination
        hideFooter={true}
        onCellDoubleClick={() => dispatch({type: ReducerAction.ClearLogs})}
        // rowHeight="16px"
        getRowHeight={() => 18}
        headerHeight={1}
        
      />
    </div>
  );
}

export default StatusGrid;