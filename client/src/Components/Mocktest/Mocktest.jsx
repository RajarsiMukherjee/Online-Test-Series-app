import React from 'react'
import "./Mocktest.css";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
export default function Mocktest() {

    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    return (
        <div>

            <div className='main'>
                <div className='leftMain'>
                    <div className='left'>
                        <h2>Question: 1</h2><hr></hr>
                        <p>What is is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>

                        <ol>
                            <li>survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised</li>
                            <li>software like Aldus PageMaker including versions of Lorem Ipsum comes from sections 1.10.32 .</li>
                            <li>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,</li>
                            <li>the more obscure Latin words, consectetur, from a Lorem Ipsum</li>
                        </ol>


                        <div>
                            <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label"> &nbsp; &nbsp; &nbsp;Chose Correct Option</FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
                                    name="radio-buttons-group"
                                    row

                                >
                                    <FormControlLabel value="1" control={<Radio />} label=" &nbsp; &nbsp;1)" />
                                    <FormControlLabel value="2" control={<Radio />} label=" &nbsp; &nbsp;2)" />
                                    <FormControlLabel value="3" control={<Radio />} label=" &nbsp; &nbsp;3)" />
                                    <FormControlLabel value="4" control={<Radio />} label=" &nbsp; &nbsp;4)" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <hr /><br />


                    </div>
                    <hr />
                    <Stack direction="row" spacing={2}>

                        <Button variant="contained" color="success">
                            Save &  Next
                        </Button>
                        <Button variant="outlined" color="error">
                            Clear
                        </Button>
                    </Stack>
                    <div className='nextbt'>
                        <div>
                            <Stack direction="row" spacing={1}>

                                <Button variant="contained" color="primary">
                                    Back
                                </Button>
                                <Button variant="outlined" color="success">
                                    Next
                                </Button>
                            </Stack>
                        </div>
                        <div>
                            <Button variant="contained" color="success" onClick={handleClickOpen}>
                                Submit
                            </Button>
                            <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle id="alert-dialog-title">
                                    {"Are you sure you want to submit the test"}
                                </DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                        if you are confident with your all the answers and given
                                        as per the test instruction click on
                                        the agree button or else if any doubt click on Disagree button.
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose}>Disagree</Button>
                                    <Button onClick={handleClose} autoFocus>
                                        Agree
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </div>

                    </div>
                </div>
                <div className='right'>
                    <div className='btnType'>
                        <div>
                            <button className='notVisited'>98</button>
                            <p> &nbsp;Not Visited</p>
                        </div>
                        <div>
                            <button className='notAnswered'>98</button>
                            <p> &nbsp;Not Answered</p>
                        </div>
                        <div>
                            <button className='answered'>98</button>
                            <p> &nbsp;Answered</p>
                        </div>
                    </div>
                    <div className='allQuesBtn'>
                        <button>58</button>
                        <button>58</button>
                        <button>58</button>
                        <button>58</button>
                        <button>58</button>
                        <button>58</button>
                        <button>58</button>
                        <button>58</button>
                        <button>58</button>
                        <button>58</button>
                        <button>58</button>
                        <button>58</button>
                        <button>58</button>
                        <button>58</button>
                        <button>58</button>
                        <button>58</button>
                        <button>58</button>
                        <button>58</button>
                        <button>58</button>
                        <button>58</button>
                        <button>58</button>
                        <button>58</button>
                        <button>58</button>

                    </div>
                </div>
            </div>
        </div>
    )
}
