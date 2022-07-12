import { createTheme } from '@mui/material';
import { colors } from '../../../theme';
const styles = createTheme({
  map: {
    width: '100px',
    height: '100px',
  },
  cellParent: {
    padding: 2,
  },
  cell: {
    textAlign: 'center',
    padding: 2,
    backgroundColor: colors.green,
    color: 'white',
  },
  cellName: {
    fontSize: 15,
  },
  cellType: {
    fontSize: 10,
    marginBottom: 2,
  },
  cellValue: {
    fontSize: 30,
  },
  cellDescription: {
    fontSize: 10,
  },
  cellProgress: {
    margin: 1,
  },
});
export default styles;
