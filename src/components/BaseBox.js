import { Divider, styled } from "@mui/material";
import { Box } from "@mui/system"
import { withTheme } from "styled-components";

const BaseBox = styled(Box)(({ theme }) => ({
  color: theme.typography.listTitle.backgroundColor,
  borderRadius: 4,
  border: '1px solid grey',
  margin: 5
}))
// const BaseBox = styled(withTheme(Box))(props => ({
//   color: props.theme.typography.listTitle.backgroundColor,
//   borderRadius: 5,
//   border: '1px solid grey',
//   margin: 5
// }))


// const BaseBox = () => {
//   const theme = useTheme()

//   return (
//     <Box
//       sx={{
//         m: 1,
//         borderRadius: 1,
//         border: '1px solid grey',
//       }}
//     >
//     </Box>
//   )
// }

export default BaseBox;