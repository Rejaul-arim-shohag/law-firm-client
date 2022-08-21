import { Typography, useTheme } from '@mui/material'
import React from 'react'


export default function Dashboard() {
    const theme = useTheme();
  return (
    <div >
        <Typography  variant="h1" component={"span"} color={theme.custom.secondary}>
          Hello Mom
        </Typography>
        <Typography  variant="h1" component={"h1"} color={'transparent'}>
          Hello Mom
        </Typography>
        <Typography variant="inherit">Inherit</Typography>
        <Typography variant="overline">Overline</Typography>
      </div>
  )
}
