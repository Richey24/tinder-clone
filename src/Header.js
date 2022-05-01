import React from 'react'
import './header.css'
import logo from './logo.webp'
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton'
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
    return (
        <div className='header'>
            <IconButton>
                <PersonIcon fontSize='large' className='icon' />
            </IconButton>
            <img src={logo} alt="logo" className='logo' />
            <IconButton>
                <ForumIcon fontSize='large' className='icon' />
            </IconButton>
        </div>
    )
}

export default Header