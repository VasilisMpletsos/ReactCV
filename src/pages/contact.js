import * as React from 'react';
import Typography from '@mui/material/Typography';
import styles from "@/styles/Contact.module.css";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact = () => {
  const handlePhoneClick = () => {
    if (/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      window.location.href = "tel:+306944048324";
    }
  };

  return (
    <Box className={styles.contactContainer}>
      <Paper elevation={6} 
      sx={{ p: 4, m: 2, maxWidth: 420, textAlign: 'center', 
      borderRadius: 4, background: 'linear-gradient(135deg, #e0e7ff 0%, #f0fdfa 100%)' }}
      className={styles.contactPaper}>
        <Avatar
          alt="Vasileios Mpletsos"
          src="/profile.jpg"
          sx={{ width: 200, height: 200, margin: '0 auto', mb: 3, boxShadow: 3, border: '3px solid #1976d2' }}
          className={styles.avatarImage}
        />
        <Typography variant="h5" gutterBottom fontWeight={700} color="#1976d2">
          Contact Me
        </Typography>
        <Box display="flex" alignItems="center" justifyContent="center" mb={1}>
          <EmailIcon color="primary" sx={{ mr: 1 }} />
          <Typography variant="body1">
            <a href="mailto:vasileiosmpletsos@gmail.com" style={{ color: '#1976d2', textDecoration: 'none', fontWeight: 500 }}>
              vasileiosmpletsos@gmail.com
            </a>
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center" mb={1}>
          <LinkedInIcon color="primary" sx={{ mr: 1, fontSize: 30 }} />
          <Typography variant="body1">
            <a href="https://www.linkedin.com/in/vasileiosmpletsos/" target="_blank" rel="noopener noreferrer" style={{ color: '#1976d2', textDecoration: 'none', fontWeight: 500 }}>
              linkedin.com/in/vasileiosmpletsos
            </a>
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center" mb={1}>
          <PhoneIcon color="primary" sx={{ mr: 1, cursor: 'pointer' }} onClick={handlePhoneClick} />
          <Typography
            variant="body1"
            fontWeight={500}
            sx={{ cursor: 'pointer' }}
            onClick={handlePhoneClick}
          >
            (+30) 6944048324
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}

export default Contact;