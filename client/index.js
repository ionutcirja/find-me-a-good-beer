import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import api from 'superagent-wrapper';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import createStore from './store';
import App from './components/app';
import rootSaga from './sagas';

api.init('https://api.punkapi.com/v2/', {});

const initialData = {};
const store = createStore(initialData);
store.runSaga(rootSaga);

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#DC143C',
      contrastText: '#fff',
    },
    secondary: {
      main: '#ffffff',
      contrastText: '#DC143C',
    },
  },
  typography: {
    subheading: {
      color: '#DC143C',
    },
  },
  overrides: {
    MuiFormLabel: {
      root: {
        color: '#DC143C',
        marginBottom: '10px',
      },
    },
  },
});


render(
  <Provider store={store}>
    <CssBaseline>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </CssBaseline>
  </Provider>,
  document.getElementById('root'),
);
