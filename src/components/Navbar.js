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
import Stack from '@mui/material/Stack';
import styles from "@/styles/Navbar.module.css";

const pages = ['Stack', 'Projects', 'Experience', 'Education', 'Contact'];

function ResponsiveAppBar() {

  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePageChange = (page) => {
    switch (page) {
      case 'Stack':
        router.push('/?section=languages');
        break;
      case 'Projects':
        router.push('/?section=projects');
        break;
      case 'Experience':
        router.push('/?section=experience');
        break;
      case 'Education':
        router.push('/?section=education');
        break;
      case 'Contact':
        router.push('/?section=contact');
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
          <Stack direction="row" spacing={2} sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            <Tooltip title="Download My CV">
              <Avatar 
                alt="Vasileios Mpletsos"
                src="/profile.jpg"
              sx={{ cursor: 'pointer' }}
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/Vasileios Mpletsos CV.pdf';
                link.download = 'Vasileios Mpletsos CV.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              />
            </Tooltip>
            <Tooltip title="LinkedIn">
              <Avatar
                alt="Linkedin"
                src="/linkedin.png"
                sx={{ cursor: 'pointer' }}
                onClick={() => window.open('https://www.linkedin.com/in/vasileiosmpletsos/', '_blank')}
              />
            </Tooltip>
            <Tooltip title="Github">
              <Avatar 
                alt="Github" 
                src="/github.png"
                sx={{ cursor: 'pointer' }}
                onClick={() => window.open('https://github.com/VasilisMpletsos', '_blank')}
              />
            </Tooltip>
            <Tooltip title="Orcid">
              <Avatar 
                alt="Orcid" 
                src="/orcid.png"
                sx={{ cursor: 'pointer' }}
                onClick={() => window.open('https://orcid.org/0009-0008-8887-543X', '_blank')}
              />
            </Tooltip>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;