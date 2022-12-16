import './App.css';
import CommandsContextProvider from './contexts/CommandsContext';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ClientArea from './components/ClientArea';
import SwipeableTemporaryDrawer from './components/SwipeableTemporaryDrawer';
import AppBar from './components/AppBar'

function App() {
  const theme = createTheme()

  return (
    <div className="App">
      <CommandsContextProvider>
        <ThemeProvider theme={theme}>
          <AppBar />
          {/* <SwipeableTemporaryDrawer /> */}
          {/* <ClientArea /> */}
        </ThemeProvider>
      </CommandsContextProvider>
    </div>
  )
}

export default App;
