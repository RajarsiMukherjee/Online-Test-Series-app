import React from 'react'
import "./Header.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Avatar from '@mui/material/Avatar';
export default function Header() {
    return (
        <div>
            <div className='mainNav'>
                <div className='acLogo' >
                    <Avatar src="/broken-image.jpg" />
                </div>
                <div className='userData'>
                    <p>Candidate Name	: [Your Name]</p>
                    <p>Exam Name	: NEET</p>
                    <p>Subject Name	: NEET 2019</p>
                </div>
            </div>

        </div>
    )
}
