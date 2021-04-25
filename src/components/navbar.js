import React from 'react';
import { AppBar,makeStyles,Toolbar,Typography }  from '@material-ui/core';
import CollectionsIcon from '@material-ui/icons/Collections';


const useStyles = makeStyles({
    component:{
        background: '#445A6F !important',
        color: '#ffff !important'
    }
})

const Navbar=()=> {
    const classes= useStyles();
    return (
        <AppBar className={classes.component} position="static">
          <Toolbar>
             <CollectionsIcon />
             <Typography variant="h4" style={{marginLeft : 10 }}>Random Image Finder</Typography> 
          </Toolbar>
        
        </AppBar>
    )
}

export default Navbar
