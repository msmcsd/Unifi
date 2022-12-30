import './App.css';
import CommandsContextProvider from './contexts/CommandsContext';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ClientArea from './components/ClientArea';
import SwipeableTemporaryDrawer from './components/SwipeableTemporaryDrawer';
import AppBar from './components/AppBar'
import { lightTheme } from './themes/theme'
import { CssBaseline } from '@mui/material';

function App() {
  const theme = createTheme(lightTheme)

  return (
    <div className="App">
      <CssBaseline />
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
