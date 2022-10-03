import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { BrowserRouter } from 'react-router-dom'

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>

        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)
