import { Button, Stack } from '@mui/material';
import React from 'react'

const DownloadButtonGroup = () => {
  return (
			<Stack  
				spacing={2}
				direction="row"
				justifyContent="center"
				alignItems="center"
				sx={{ pt: 1, pb: 1 }}
			>
				<Button variant="contained">Download</Button>
			</Stack>
	);
}

export default DownloadButtonGroup