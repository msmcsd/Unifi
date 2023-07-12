import { Button, Stack } from '@mui/material'
import React from 'react'

const InstallButtonGroup = () => {
  return (
			<Stack
				spacing={2}
				direction="row"
				justifyContent="center"
				alignItems="center"
				sx={{ pt: 1, pb: 1 }}
			>
				<Button variant="contained">Install</Button>
				<Button variant="contained">Uninstall</Button>
			</Stack>
	);
}

export default InstallButtonGroup