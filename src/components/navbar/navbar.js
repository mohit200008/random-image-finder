import React from 'react';
import { AppBar,makeStyles,Toolbar,Typography }  from '@material-ui/core';
import CollectionsIcon from '@material-ui/icons/Collections';


function navbar() {
    return (
        <AppBar>
          <Toolbar>
             <CollectionsIcon />
             <Typography variant="h4" style={{marginLeft : 10 }}>Image Finder</Typography> 
          </Toolbar>
        
        </AppBar>
    )
}

export default navbar
