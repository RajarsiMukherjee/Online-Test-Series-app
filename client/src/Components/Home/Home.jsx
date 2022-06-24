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
import { useDispatch, useSelector } from 'react-redux';
import { examNamee, examLevel } from '../../Redux/Action';

export default function Home() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [age, setAge] = React.useState('');
  const[pap , setPap] = useState("")
  const [data, setData] = useState([])
  const[paper1 , setPaper1] = useState([])
  console.log("papa" , pap)

  // const examName = useSelector((store) => store.examName)
  // const examNameLevel = useSelector((store) => store.examName)
  // console.log("examName",examName)

  useEffect(() => {
    axios("https://rajashri-mock.herokuapp.com/test/namess").then((res)=> setData(res.data)).catch((err) => console.log(err))
  },[])

  useEffect(() => {
    axios(`https://rajashri-mock.herokuapp.com/test/papers?exam=${age}`).then((res)=> setPaper1(res.data)).catch((err) => console.log(err))
  },[age])

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
    dispatch(examNamee(event.target.value))
  };
  const handleChangePp = (event: SelectChangeEvent) => {
    setPap(event.target.value);
    dispatch(examLevel(event.target.value))
  };
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
            onChange={handleChange} 
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
            value={pap}
            label="Pap"
            onChange={handleChangePp} 
             
          >
            {
              paper1.map((e) => (
                <MenuItem value={e}>{e}</MenuItem>
              ))
            }
            {/* <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem> */}
          </Select>
        </FormControl>
      </Box><br></br><br></br>
      <Button disabled={(age.length  === 0 ) || (pap.length  === 0 ) } onClick={() => navigate("/instruction")} className='button' variant="contained" color="success">
        Success
      </Button>


    </div>
    </div>
  )
}
