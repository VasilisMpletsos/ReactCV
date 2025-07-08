import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { useRouter } from 'next/router';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton  from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import styles from "@/styles/Navbar.module.css";

const pages = ['Programming Languages', 'Projects', 'Work Experience', 'Education'];

function ResponsiveAppBar() {

  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePageChange = (page) => {
    switch (page) {
      case 'Programming Languages':
        router.push('/?section=languages');
        break;
      case 'Projects':
        router.push('/?section=projects');
        break;
      case 'Work Experience':
        router.push('/?section=experience');
        break;
      case 'Education':
        router.push('/?section=education');
        break;
      default:
        break;
    }
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Image
            src="/favicon.png"
            alt="Favicon"
            width={32}
            height={32}
            style={{ marginRight: 8 }}
            className={styles.logo}
            priority
          />
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
            onClick={() => router.push('/')}
          >
            asilis Mpletsos
          </Typography>
          <IconButton
            size="large"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={(event) => setAnchorEl(event.currentTarget)}
            color="inherit"
            sx={{ display: { xs: 'flex', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
          >
            {pages.map((page) => (
              <Button
                key={page}
                variant='text'
                sx={{ my: 2, color: 'black', display: 'block' }}
                onClick={() => {
                  handlePageChange(page);
                  setAnchorEl(null);
                }}
              >
                {page}
              </Button>
            ))}
          </Menu>
          
          {/* Show pages on bar if big screen else in menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                variant='text'
                sx={{ my: 2, color: 'white', display: 'block' }}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            <Tooltip title="Just Me">
              <Avatar alt="Vasileios Mpletsos" src="/profile.jpg"/>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;