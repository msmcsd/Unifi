import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import CommandsContextProvider from './contexts/CommandsContext';
import DosCommandList from './components/DosCommandList';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {
  const [task, setTask] = useState({
    "name": "test",
    "commandGroup": 1,
    "commands": [
      { "displayText": "text" }
    ]
  })

  useEffect(() => {
    fetch('http://localhost:5000/Api/Commands')
      .then(response => response.json())
      .then(data => setTask(data.find(t => t.commandGroup === 1 && t.name==="Service")))
  }, [])

  // const a = task.find(t => t.commandGroup === 1 && t.name==="Service");
  // console.log(a);
  const theme = createTheme()

  return (
    <div className="App">
      {/* <CommandsContextProvider> */}
      <ThemeProvider theme={theme}>
        {/* <DosCommandList commands={[{ Name: "Check service status" }, {Name: "Download installer"}]} /> */}
        <DosCommandList task={task} />
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
