import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from '@mui/material'
import { Extension, Email, Notifications } from '@mui/icons-material'
import React, { useState } from 'react'
import ava1 from './assets/ava1.jpg'

const MyToolBar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
})

const SearchBar = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  color: 'black',
  padding: '0 10px',
  width: '40%',
  borderRadius: theme.shape.borderRadius,
}))

const Icons = styled(Box)(({theme}) => ({
  display: 'none',
  gap: 10,
  alignItems: 'center',
  [theme.breakpoints.up('sm')]:{
    display: 'flex'
  }
}))

const UserBox = styled(Box)(({theme}) => ({
  display: 'flex',
  gap: 10,
  alignItems: 'center',
  [theme.breakpoints.up('sm')]:{
    display: 'none'
  }
}))

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  return (
    <AppBar position='sticky'>
      <MyToolBar>
        <Typography
          variant='h6'
          sx={{
            display: {
              xs: 'none',
              sm: 'block',
            },
          }}
        >
          My Blog
        </Typography>
        <Extension
          sx={{
            display: {
              xs: 'block',
              sm: 'none',
            },
          }}
        />
        <SearchBar>
          <InputBase placeholder='search...' />
        </SearchBar>
        <Icons onClick={() => setMenuOpen(true)}>
          <Badge badgeContent={4} color='error'>
            <Email />
          </Badge>
          <Badge badgeContent={4} color='error'>
            <Notifications />
          </Badge>
          <Avatar src={ava1} alt='jhon' sx={{width: 30, height: 30}} />
        </Icons>
        <UserBox onClick={() => setMenuOpen(true)}>
          <Avatar src={ava1} alt='jhon' sx={{width: 30, height: 30}} />
          <Typography>John Siler</Typography>
        </UserBox>
      </MyToolBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={isMenuOpen}
        onClose={() => setMenuOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar
