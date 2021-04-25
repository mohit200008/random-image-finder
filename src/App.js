import React, { useEffect, useState} from 'react';
import { Box } from '@material-ui/core';
import Navbar from './components/navbar';
import BreadCrumb from './components/BreadCrumb';
import { getImages } from './service/api';
import Images from './components/images.jsx';
import './App.css';

function App() {
  const [data,setData]= useState([]);
  useEffect(()=> {
    getImages().then(response => {
      setData(response.data.hits);
      console.log(response.data.hits);
    })
  },[])
  return (
    <Box>
      <Navbar />
      <BreadCrumb />
      <Images data={data}/>
  
    
    </Box>
  );
}

export default App;
