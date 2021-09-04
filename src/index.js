import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#131921',
      main: '#131921',
      dark: '#131921',
      contrastText: '#fff',
    },
    secondary: {
      light: '#1C8ADB',
      main: '#1C8ADB',
      dark: '#1C8ADB',
      contrastText: '#000',
    },
  },
});
ReactDOM.render(
  <React.StrictMode>
        <MuiThemeProvider theme={theme}>

    <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
