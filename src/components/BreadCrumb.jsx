import { Box,makeStyles,TextField } from '@material-ui/core';

const useStyles=makeStyles(theme => ({
    component: {
        background: '#F0F8FF',
        '& > *' : {
            margin:theme.spacing(1)
        }
    }
}))

const BreadCrumb = ({ onTextChange, onCountChange }) => {
    const classes= useStyles();
    return (
        <Box m={1} className= {classes.component}>
          <TextField label="Search Images"
            onChange={(e)=> onTextChange(e.target.value)}
          />
          <TextField label="Number of Images"
           onChange={(e)=> onCountChange(e.target.value)} />
        </Box>
    )
}

export default BreadCrumb;
