import { createTheme } from '@mui/material';
import { colors } from '../../../theme';
const styles = createTheme({
  cellParent: {
    padding: 2,
  },
  cell: {
    textAlign: 'center',
    padding: 2,
    backgroundColor: colors.green,
    color: 'white',
    marginBottom: 1,
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
