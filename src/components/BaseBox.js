import { Box } from "@mui/system"

const BaseBox = () => {
  return (
    <Box sx={{
            m: 2,
            width: 250,
            borderRadius: 1,
            bgcolor: 'white',
            border: '1px solid grey',
            fontSize: '14px'
    }}/>
  )
}

export default BaseBox;