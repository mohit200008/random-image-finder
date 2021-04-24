import React from 'react';
import { Box,TextField } from '@material-ui/core';

function BreadCrumb() {
    return (
        <Box>
          <TextField label="Search Images"/>
          <TextField label="Number of Images"/>
        </Box>
    )
}

export default BreadCrumb
