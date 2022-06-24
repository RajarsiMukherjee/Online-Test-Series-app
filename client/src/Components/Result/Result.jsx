import React from 'react'
import "./Result.css"
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom'
export default function Result() {
  const navigate = useNavigate()
  return (
    <div className='table'>
      <div className='t1'>
        <p className='text'>Please provide your valuable feedback about Mock Test:</p>
        <button className='b1'>STUDENT FEEDBACK</button>
      </div>
      <div>
        <button onClick={() => navigate("/")} className='b2'>BACK</button>
      </div>
      <div>
        <p className='text2'>Score Card</p>
      </div>
      <div className='t3'>
        <b>Total Question</b>

      </div>
      <div className='t3'>180</div>
      <div className='t3'>Total Attempted</div>
      <div className='t3'>0</div>
      <div className='t3'>
        Correct Answers

      </div>
      <div className='t3'>0</div>
      <div className='t3'>Incorrect Answers</div>
      <div className='t3'>0</div>
      <div className='t3'>
        Score
      </div>
      <div className='t3'>0</div>
      <div></div>
    </div>
  )
}
