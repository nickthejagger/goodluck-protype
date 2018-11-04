//importing React Dependencies 
import React, { Component } from 'react';
import AppBar from './Appbar'
import Kertas from './Paper'
//importing material-ui
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
//importing css
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#fffd61',
      main: '#ffca28',
      dark: '#c79a00',
      contrastText: '#000',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000000',
    },
  },
})
class App extends Component  {
  render() {
    return(
      <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar />
      <main>
        <Kertas />
      </main>
      </MuiThemeProvider>
    )
  }
}

export default App