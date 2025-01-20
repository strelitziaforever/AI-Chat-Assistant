import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Menu } from '@mui/icons-material';

export default function Header({ onToggleSidebar }) {
  return (
    <Box
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 1100,
        padding: '1rem',
        background: '#1a1a1a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid rgba(0, 255, 157, 0.1)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
      }}
    >
      <IconButton
        sx={{
          display: { xs: 'block', md: 'none' },
          color: '#00ff9d',
          transition: 'transform 0.2s ease',
          '&:hover': { 
            transform: 'scale(1.1)',
            textShadow: '0 0 10px #00ff9d'
          }
        }}
        onClick={onToggleSidebar}
      >
        <Menu />
      </IconButton>
      <Typography
        variant="h5"
        sx={{
          color: '#00ff9d',
          fontWeight: 600,
          textAlign: 'center',
          width: '100%',
          textShadow: '0 0 10px rgba(0, 255, 157, 0.5)',
          animation: 'glow 2s ease-in-out infinite',
          '@keyframes glow': {
            '0%, 100%': { 
              textShadow: '0 0 10px rgba(0, 255, 157, 0.5)' 
            },
            '50%': { 
              textShadow: '0 0 20px rgba(0, 255, 157, 0.8), 0 0 30px rgba(0, 255, 157, 0.6), 0 0 40px rgba(0, 255, 157, 0.4)' 
            }
          }
        }}
      >
        AI Chat Assistant
      </Typography>
    </Box>
  );
}