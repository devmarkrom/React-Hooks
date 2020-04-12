import { createMuiTheme } from '@material-ui/core/styles';

const theme =  createMuiTheme({
  typography : {
    useNextVariants: true
  },
  palette : {
    primary: {
      main : '#008f39'
    },
    common : {
      white : '#ffffff'
    },
    secondary: {
      main: '#cb3234'
    }
  },
  spacing: 10
});

export default theme;
