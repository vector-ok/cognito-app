import React, { useMemo } from 'react';
import { Grid, Box, Typography, LinearProgress } from '@mui/material';
import styles from './styles';

function Weather({ data, handleDetail }) {
  return (
    <Grid
      container
      rowspacing={1}
      columnSpacing={{ xs: 1 }}
      sx={styles.cellParent}
    >
      {data?.map((item, index) => (
        <Grid item xs={3}>
          <Box sx={styles.cell} xs={6} onClick={() => handleDetail(item)}>
            <Typography sx={styles.cellName}>{item?.location.name}</Typography>
            <Typography sx={styles.cellType}>
              {item.current.is_day === 1 ? 'day' : 'night'}
            </Typography>
            <Typography sx={styles.cellValue}>{item.current.temp_c}</Typography>
            <LinearProgress
              variant="determinate"
              value={item.current.cloud}
              color="success"
              sx={styles.cellProgress}
            />
            <Typography sx={styles.cellDescription}>
              {item.current.wind_dir}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

export default Weather;
