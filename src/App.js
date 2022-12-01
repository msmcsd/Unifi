import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import CommandsContextProvider from './contexts/CommandsContext';
import DosCommandList from './components/DosCommandList';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import URL from './constants/Url';

function App() {
  const [tasks, setTasks] = useState([{
    "name": "",
    "commandGroup": 1,
    "commands": [
      { "displayText": "" }
    ]
  }])

  useEffect(() => {
    const fetchAllTasks = async () => {
      try {
        const response = await fetch(URL.ALL_COMMANDS);
        const data = await response.json();
        // setTasks(data);
        setTasks(data.filter(t => t.commandGroup === 1))
        console.log(data.length);
      } catch (error) {
        console.log(error);
      }
    }

    fetchAllTasks();

    // fetch(URL.ALL_COMMANDS)
    //   .then(response => response.json())
    //   .then(data => setTask(data.find(t => t.commandGroup === 1 && t.name==="Service")))
  }, [])

  // const a = task.find(t => t.commandGroup === 1 && t.name==="Service");
  // console.log(a);
  const theme = createTheme()

  return (
    <div className="App">
      {/* <CommandsContextProvider> */}
      <ThemeProvider theme={theme}>
        {/* <DosCommandList commands={[{ Name: "Check service status" }, {Name: "Download installer"}]} /> */}
        {
          tasks.map(t => (t.commands && t.commands.length > 0 && <DosCommandList key={t.name} task={t} />))
        }
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {weather.length}
          </a>
        </header> */}
        </ThemeProvider>
      {/* </CommandsContextProvider> */}
    </div>
  )
}

export default App;
