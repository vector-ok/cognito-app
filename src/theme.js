import { createTheme } from '@mui/material';
const theme = createTheme({
  formBody: {
    my: 8,
    mx: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  titleBox: {
    mx: 4,
    display: 'flex',
    flexdirection: 'row',
    alignItems: 'center',
  },

  submitBox: {
    marginTop: 2,
    display: 'flex',
    flexdirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    // gap: 10,
  },

  title: {
    textTransform: 'uppercase',
    color: 'darkgray',
    /* color: '#dddddd'; */
  },
});

export default theme;
