import './App.css';
import CommandsContextProvider from './contexts/CommandsContext';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ClientArea from './components/ClientArea';

function App() {
  const theme = createTheme()

  return (
    <div className="App">
      <CommandsContextProvider>
        <ThemeProvider theme={theme}>
          <ClientArea />
        </ThemeProvider>
      </CommandsContextProvider>
    </div>
  )
}

export default App;
