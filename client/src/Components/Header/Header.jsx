import React from 'react'
import "./Header.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';

export default function Header() {

    const ExamNamee = useSelector((store) => store.examName)
    const ExamLevell = useSelector((store) => store.examLevel)

    console.log("datatata" , ExamLevell,ExamNamee)

    return (
        <div>
            <div className='mainNav'>
                <div className='acLogo' >
                    <Avatar src="/broken-image.jpg" />
                </div>
                <div className='userData'>
                    <p>Candidate Name	: [Your Name]</p>
                    <p>Exam Name	: {ExamNamee}</p>
                    <p>Subject Name	: {ExamLevell}</p>
                </div>
            </div>

        </div>
    )
}
