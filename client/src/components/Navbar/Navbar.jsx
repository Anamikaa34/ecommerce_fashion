import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import "./Navbar.scss";
import Cart from '../Cart/Cart';

const Navbar = () =>{

    const [open, setOpen] = useState(false)

    return (
      <div className='navbar'>
         <div className='wrapper'>
            <div className='left'></div>
        <div className='item'>
                <img src=' ' alt=""/>
                <KeyboardArrowDownIcon />
            <div className='item'>
                <span>USD</span>
                <KeyboardArrowDownIcon/>
            </div>
            <div className='item'>
                <Link className='link' to ="/products/1">Women</Link>
            </div>
            <div className='item'>
                <Link className='link' to="/products/2">Men</Link>
            </div>
            <div className='item'>
                <Link className='link' to="/products/3">Children</Link>
            </div>
        </div>
            <div className='center'>
                <Link className='link' to ="/">MYSTORE</Link>
            </div>
            <div className='right'>
            <div className='item'>
                <Link className='link' to ="/">Homepage</Link>
            </div>
            <div className='item'>
                <Link className='link' to ="/">About</Link>
            </div>
            <div className='item'>
                <Link className='link' to="/">Contact</Link>
            </div>
            <div className='item'>
                <Link className='link' to="/">STORES</Link>
            </div>
            <div className='icons'>
                <SearchIcon/>
                <PersonOutlineIcon/>
                <FavoriteBorderOutlinedIcon/>
                <div className='cartIcon' onClick={()=> setOpen(!open)}>
                <ShoppingCartOutlinedIcon/>
                <span>0</span>
                </div>
            </div>
            </div>
         </div>
         {open &&  <Cart />}
        </div>
    );
};
export default Navbar;

// Reminder - put images in public img wale me