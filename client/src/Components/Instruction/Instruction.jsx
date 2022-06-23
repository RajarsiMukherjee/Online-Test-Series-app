import React from 'react'
import "./Instruction.css";
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
export default function Instruction() {
    return (
        <div>
            <div className='heading'><h3>GENERAL INSTRUCTIONS</h3></div>
            <div>
                <h3>Please read the instructions carefully</h3>
                <div className='main'>

                    <div>

                        <ol>
                            <h4>General Instructions:</h4>
                            <li>Total duration of AIAPGT - Ayurveda is 90 min.</li>
                            <li>The clock will be set at the server. The countdown timer in the top right corner of screen will display the remaining time available for you to complete the examination. When the timer reaches zero, the examination will end by itself. You will not be required to end or submit your examination.</li>
                            <li>The Questions Palette displayed on the right side of screen will show the status of each question using one of the following symbols:
                                <ol>
                                    <li>You have not visited the question yet.</li>
                                    <li>You have not answered the question.</li>
                                    <li>You have answered the question.</li>
                                    <li>You have NOT answered the question, but have marked the question for review.</li>
                                    <li>The question(s) "Answered and Marked for Review" will be considered for evalution.</li>
                                </ol>
                            </li>
                            <li>You can click on your "Profile" image on top right corner of your screen to change the language during the exam for entire question paper. On clicking of Profile image you will get a drop-down to change the question content to the desired language.</li>
                            <li>You can click on  to navigate to the bottom and  to navigate to top of the question are, without scrolling.</li>

                            <h4>General Instructions:</h4>
                            <li>To answer a question, do the following:
                                <ol>
                                    <li>Click on the question number in the Question Palette at the right of your screen to go to that numbered question directly. Note that using this option does NOT save your answer to the current question.</li>
                                    <li>Click on Save & Next to save your answer for the current question and then go to the next question.</li>
                                    <li>Click on Mark for Review & Next to save your answer for the current question, mark it for review, and then go to the next question.</li>
                                </ol>
                            </li>
                            <h4>Answering a Question:</h4>
                            <li>Procedure for answering a multiple choice type question
                                <ol>
                                    <li>To select you answer, click on the button of one of the options.</li>
                                    <li>To deselect your chosen answer, click on the button of the chosen option again or click on the Clear Response button</li>
                                    <li>To change your chosen answer, click on the button of another option</li>
                                    <li>To save your answer, you MUST click on the Save & Next button.</li>
                                    <li>To mark the question for review, click on the Mark for Review & Next button.</li>
                                </ol>
                            </li>
                            <li>To change your answer to a question that has already been answered, first select that question for answering and then follow the procedure for answering that type of question.</li>
                            <h4>Navigating through sections:</h4>
                            <li>Sections in this question paper are displayed on the top bar of the screen. Questions in a section can be viewed by click on the section name. The section you are currently viewing is highlighted.</li>
                            <li>After click the Save & Next button on the last question for a section, you will automatically be taken to the first question of the next section.</li>
                            <li>You can shuffle between sections and questions anything during the examination as per your convenience only during the time stipulated.</li>
                            <li>Candidate can view the corresponding section summery as part of the legend that appears in every section above the question palette.</li>
                        </ol>

                        <hr />
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Please note all questions will appear in your default language. This language can be changed for a particular question later on.</p>
                        <hr />
                        <br />
                        <label>&nbsp;&nbsp;&nbsp;<input type="checkbox" /> I have read and understood the instructions. All computer hardware allotted to me are in proper working condition. I declare that I am not in possession of / not wearing / not carrying any prohibited gadget like mobile phone, bluetooth devices etc. /any prohibited material with me into the Examination Hall.I agree that in case of not adhering to the instructions, I shall be liable to be debarred from this Test and/or to disciplinary action, which may include ban from future Tests / Examinations</label>
                        <br />
                        <hr />
                        <br />
                        <Button className='button' variant="contained" color="success">
                            PROCEED
                        </Button>
                        <br /><br /><br /><br /><br /><br />
                         
                    </div>

                </div>
            </div>
        </div>
    )
}
