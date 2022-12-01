import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import CommandsContextProvider from './contexts/CommandsContext';
import DosCommandList from './components/DosCommandList';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import URL from './constants/Url';
import { fetchAllTasks } from './data/fetchData';

function App() {
  const [tasks, setTasks] = useState([{
    "name": "",
    "commandGroup": 1,
    "commands": [
      { "displayText": "" }
    ]
  }])

  useEffect(() => {
    const fetchTasks = async () => {
      const data = await fetchAllTasks();
      console.log("Fetch all tasks in App.js");
      setTasks(data.filter(t => t.commandGroup === 1));
    }

    fetchTasks();
  }, [])

  const theme = createTheme()

  return (
    <div className="App">
      {/* <CommandsContextProvider> */}
      <ThemeProvider theme={theme}>
        {
          tasks.map(t => (t.commands && t.commands.length > 0 && <DosCommandList key={t.name} task={t} />))
        }
        </ThemeProvider>
      {/* </CommandsContextProvider> */}
    </div>
  )
}

export default App;
