import { createTheme } from '@mui/material';
import { colors } from '../../theme';
const styles = createTheme({
  header: {
    backgroundColor: '#222222',
    color: 'white',
    padding: 10,
  },
  sensorBox: {
    margin: 4,
    backgroundColor: colors.deepGreen,
  },
  sensorBoxHeader: {
    padding: 3,
    backgroundColor: colors.lightGreen,
    textTransform: 'uppercase',
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
  verticalLine: {
    marginTop: 3,
    marginBottom: 3,
  },
  fullSize: {
    width: '100%',
    height: '100%',
  },
});
export default styles;
