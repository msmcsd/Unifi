import { Box, List, ListItem, ListItemText } from "@mui/material"
import { useContext, useEffect, useRef } from "react"
import ReducerAction from "../../../constants/ReducerAction"
import SocketEvent from "../../../constants/SocketEvent"
import { CommandsContext } from "../../../contexts/CommandsContext"

const ListGrid = () => {
  const { logs, dispatch } = useContext(CommandsContext)
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      // This scroll the List to bottom.
      scrollRef.current.scrollIntoView(false);
    }
  }, [logs]);

  const getLogColor = (log) => {
    switch (log.type)
    {
      case SocketEvent.Error: return "red";
      case SocketEvent.Parameters: return "blue";
      case SocketEvent.Progress: return "green";
      default: return "";
    }
  }

  return (
    <Box sx={{
          m: 2,
          maxHeight: 600,
          width: 500,
          borderRadius: 1,
          bgcolor: 'white',
          border: '1px solid grey',
          overflow: "auto"
        }}
      >
      <List>
        {logs.map(log => (
          <ListItem
            key={log.id}
            disablePadding
            sx={{ ml: 1, maxWidth: 460 }}
            onDoubleClick={() => dispatch({ type: ReducerAction.ClearLogs })}
          >
            <ListItemText primary={log.log} sx={{height: 10}} primaryTypographyProps={{fontSize: 12, color: `${getLogColor(log)}`}} />
          </ListItem>
        ))}
        <ListItem ref={scrollRef} />
      </List>
    </Box>
  )
}

export default ListGrid