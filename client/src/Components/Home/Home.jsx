import React, { useEffect } from 'react'
import "./Home.css"
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import axios from "axios"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()
  const [age, setAge] = React.useState('');
  const [data, setData] = useState([])

  useEffect(() => {
    axios("http://localhost:2348/test/namess").then((res)=> setData(res.data)).catch((err) => console.log(err))
  },[])

  // const handleChange = (event: SelectChangeEvent) => {
  //   //setAge(event.target.value as string);
  // };

  return (
    <div className='mainHome'>
    <div className='firstForm'>
      <Box sx={{ minWidth: 120 }}>
        <h3>Select exam you would like to appear</h3>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">--select--</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
             
          >
            {
              data.map((e) => (
                <MenuItem value={e}>{e}</MenuItem>
              ))
            }
            {/* <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem> */}
          </Select>
        </FormControl>
        <h3>Paper</h3>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">--select--</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
             
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box><br></br><br></br>
      <Button onClick={() => navigate("/instruction")} className='button' variant="contained" color="success">
        Success
      </Button>


    </div>
    </div>
  )
}
