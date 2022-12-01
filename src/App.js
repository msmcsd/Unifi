import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import CommandsContextProvider from './contexts/CommandsContext';
import DosCommandList from './components/DosCommandList';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {
  const [weather, setWeather] = useState([
    { date: '', temperatureC: 0, temperatureF: 0, summary: "" }
  ])

  useEffect(() => {
    fetch('http://localhost:5000/WeatherForecast')
      .then(response => response.json())
      .then(data => setWeather(data))
  }, [])

  const theme = createTheme()

  return (
    <div className="App">
      {/* <CommandsContextProvider> */}
      <ThemeProvider theme={theme}>
        <DosCommandList commands={[{ Name: "Check service status" }, {Name: "Download installer"}]} />
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
