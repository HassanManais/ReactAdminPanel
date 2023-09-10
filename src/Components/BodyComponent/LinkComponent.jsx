import { Box,Grid,Typography } from '@material-ui/core'
import React from 'react'
import { PageHeader } from '../Common/CommonComponent'

export default function LinkComponent() {
  return (
        <Box mt={2}>
          <Grid container>
            <Grid item xs={12}>
              <Box mt={1} mb={3}>

            <PageHeader pageTitle='Link'/>

              </Box>
              <Typography variant="body1">

             HelloWorld 
              </Typography>
            </Grid>

          </Grid>
            
        </Box>
  
  )
}
