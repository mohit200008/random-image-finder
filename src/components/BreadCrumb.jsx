import { Box,makeStyles,TextField } from '@material-ui/core';

const useStyles=makeStyles(theme => ({
    component: {
        background: '#F0F8FF',
        '& > *' : {
            margin:theme.spacing(1)
        }
    }
}))

const BreadCrumb = () => {
    const classes= useStyles();
    return (
        <Box m={1} className= {classes.component}>
          <TextField label="Search Images" />
          <TextField label="Number of Images" />
        </Box>
    )
}

export default BreadCrumb;
