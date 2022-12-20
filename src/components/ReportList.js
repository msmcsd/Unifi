import { Box } from '@mui/system';
import { DataGrid } from '@mui/x-data-grid';
import { useContext } from 'react';
import { CommandsContext } from '../contexts/CommandsContext';

const reportItem = {
  id: 0,
  category: "",
  test: "",
  keyword: "",
  passed: false
}

const reportItems = [
  {id: 0, category: "Service", test: "Service Status", keyword: "Running", passed: true},
  {id: 1, category: "Service", test: "Driver Status", keyword: "Running", passed: true},
  {id: 2, category: "ELAM/AM-PPL", test: "AM-PPL Driver Status", keyword: "ANTIMALWARE LIGHT", passed: false},
]

const setCellBackcolor = (params) => {
  const color = params.row.passed ? "green" : "red"
 
  return (
      <div
        style={{
          backgroundColor: `${color}`,
          color: "white",
          fontSize: 12,
          width: "100%",
          textAlign: "left"
        }}
      >
        {params.value}
      </div>
    );
}

const columns = [
  { field: 'id', headerName: '', width: 10 },
  {
    field: 'category',
    headerName: 'Category',
    width: 100,
    sortable: false,
    flex: 1,
    renderCell: (params) => setCellBackcolor(params)
  },
  {
    field: 'test',
    headerName: 'Test',
    width: 200,
    sortable: false,
    flex: 2,
    renderCell: (params) => setCellBackcolor(params)
  },
  {
    field: 'keyword',
    headerName: 'Keyword',
    width: 180,
    sortable: false,
    flex: 1,
    renderCell: (params) => setCellBackcolor(params)
  },
  {
    field: 'passed',
    headerName: '',
    sortable: false,
    width: 50,
  }
];

const ReportList = () => {
  const { reports } = useContext(CommandsContext, []);

  console.log(reports)

  return (
    <Box sx={{
      m: 1,
      // width: 220,
      height: 250,
      borderRadius: 1,
      bgcolor: 'white',
      border: '1px solid grey',
      fontSize: '14px',
    }}>Reports
      <DataGrid
        initialState={{
          columns: {
            columnVisibilityModel: {
              id: false,
              passed: false,
            },
          },
        }}
        sx={{  // Removes outline on focus
          "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
            outline: "none !important",
          }
        }}
        rows={reports}
        columns={columns}
        hideFooter={true}
        // onCellDoubleClick={() => dispatch({type: ReducerAction.ClearLogs})}
        getRowHeight={() => 16}
        headerHeight={25}
        getRowId={row => row.id}
        // Remove column header menus
        disableColumnMenu
        disableColumnFilter
        disableColumnSelector
        />
    </Box>
  )
}

export default ReportList