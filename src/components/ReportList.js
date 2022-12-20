import { Box } from '@mui/system';
import { DataGrid } from '@mui/x-data-grid';

const reportItem = {
  id: 0,
  category: "",
  test: "",
  keyword: "",
  success: "0"
}

const reportItems = [
  {id: 0, category: "Service", test: "Service Status", keyword: "Running", success: "1"},
  {id: 1, category: "Service", test: "Driver Status", keyword: "Running", success: "1"},
  {id: 2, category: "ELAM/AM-PPL", test: "AM-PPL Driver Status", keyword: "ANTIMALWARE LIGHT", success: "0"},
]

const setCellBackcolor = (params) => {
  const color = params.row.success === "1" ? "green" : "red"
 
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
    field: 'success',
    headerName: '',
    sortable: false,
    width: 50,
  }
];

const ReportList = () => {

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
              success: false,
            },
          },
        }}
        sx={{  // Removes outline on focus
          "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
            outline: "none !important",
          }
        }}
        rows={reportItems}
        columns={columns}
        hideFooter={true}
        // onCellDoubleClick={() => dispatch({type: ReducerAction.ClearLogs})}
        getRowHeight={() => 16}
        headerHeight={25}
        // Remove column header menus
        disableColumnMenu
        disableColumnFilter
        disableColumnSelector
        />
    </Box>
  )
}

export default ReportList