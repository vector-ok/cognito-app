import { createTheme } from '@mui/material';
export const theme = createTheme({
  formBody: {
    my: 3,
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
  },
});

export const colors = {
  lightGreen: '#84F15F',
  deepGreen: '#5FB144',
  green: '#5FA239',
  white: '#E5E8E3',
};
