import { BloodtypeRounded } from '@mui/icons-material';
import { createTheme } from '@mui/material';
import { colors } from '../../../theme';
const styles = createTheme({
  city: {
    fontSize: 30,
    marginBottom: 0,
    textTransform: 'capitalize',
  },
  region: {
    fontSize: 14,
    marginBottom: 3,
    textTransform: 'capitalize',
    backgroundColor: '#4F5151',
    paddingLeft: 1,
    color: 'white',
    // padding: 1,
  },
  detail: {
    marginBottom: 2,
    textTransform: 'capitalize',
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
  detailsSection: {
    display: 'flex',
    justifyContent: 'flex-start',
    backgroundColor: colors.white,
    padding: 3,
    textTransform: 'uppercase',
    display: 'flex',
    justifyContent: 'space-between',
  },
});
export default styles;
