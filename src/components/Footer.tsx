import { Box, Typography } from '@material-ui/core'
import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <>
        <Box style={{ display:'flex', backgroundColor:'#2C2D5B', justifyContent:'center'}}>
        <Box style={{ width:'80%'}}>
          <Typography variant='h1'>Footer</Typography>
          <Typography variant='h1'>Footer</Typography>
        </Box>
        </Box>
      </>
    )
  }
}

export default Footer
