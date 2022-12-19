import { Divider } from '@mui/material';
import { Box } from '@mui/system';

const ReportList = () => {

  return (
    <Box sx={{
      m: 1,
      // width: 220,
      height: 250,
      borderRadius: 1,
      bgcolor: 'white',
      border: '1px solid grey',
      fontSize: '14px'
    }}>Reports
        <Divider/>
    </Box>
  )
}

export default ReportList