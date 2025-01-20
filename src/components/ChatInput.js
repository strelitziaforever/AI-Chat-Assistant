import React from 'react';
import { Box, TextField, IconButton, Select, MenuItem } from '@mui/material';
import { Send } from '@mui/icons-material';

export default function ChatInput({
  value,
  onChange,
  onSend,
  disabled,
  model,
  onModelChange,
  enterKeyBehavior,
  onEnterKeyBehaviorChange,
}) {
  const handleKeyDown = (e) => {
    if (enterKeyBehavior === 'send' && e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  const selectStyles = {
    backgroundColor: '#2a2a2a',
    color: '#00ff9d',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(0, 255, 157, 0.1)',
    '&:hover': {
      boxShadow: '0 0 15px rgba(0, 255, 157, 0.2)',
      borderColor: 'rgba(0, 255, 157, 0.3)',
    },
    '&.Mui-focused': {
      boxShadow: '0 0 20px rgba(0, 255, 157, 0.25)',
    },
    '& .MuiSelect-icon': {
      color: '#00ff9d',
    }
  };

  const menuItemStyles = {
    '&.Mui-selected': {
      backgroundColor: 'rgba(0, 255, 157, 0.1)',
      '&:hover': {
        backgroundColor: 'rgba(0, 255, 157, 0.2)',
      }
    },
    '&:hover': {
      backgroundColor: 'rgba(0, 255, 157, 0.1)',
    }
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: { xs: 0, md: 280 },
        right: 0,
        p: { xs: 1, sm: 2, md: 3 },
        backgroundColor: '#1a1a1a',
        borderTop: '1px solid rgba(0, 255, 157, 0.1)',
      }}
    >
      <Box
        sx={{
          maxWidth: '768px',
          margin: '0 auto',
          position: 'relative',
          width: '100%',
        }}
      >
        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <Select
            value={model}
            onChange={onModelChange}
            disabled={disabled}
            size="small"
            sx={selectStyles}
            MenuProps={{
              PaperProps: {
                sx: {
                  backgroundColor: '#2a2a2a',
                  border: '1px solid rgba(0, 255, 157, 0.1)',
                  boxShadow: '0 0 20px rgba(0, 255, 157, 0.15)',
                }
              }
            }}
          >
            <MenuItem value="model1" sx={menuItemStyles}>Claude</MenuItem>
            <MenuItem value="model2" sx={menuItemStyles}>Default Model</MenuItem>
          </Select>
          <Select
            value={enterKeyBehavior}
            onChange={onEnterKeyBehaviorChange}
            disabled={disabled}
            size="small"
            sx={selectStyles}
            MenuProps={{
              PaperProps: {
                sx: {
                  backgroundColor: '#2a2a2a',
                  border: '1px solid rgba(0, 255, 157, 0.1)',
                  boxShadow: '0 0 20px rgba(0, 255, 157, 0.15)',
                }
              }
            }}
          >
            <MenuItem value="send" sx={menuItemStyles}>Enter to Send</MenuItem>
            <MenuItem value="newline" sx={menuItemStyles}>Enter for New Line</MenuItem>
          </Select>
        </Box>
        <TextField
          fullWidth
          multiline
          maxRows={4}
          value={value}
          onChange={onChange}
          disabled={disabled}
          placeholder="Type your message here..."
          onKeyDown={handleKeyDown}
          sx={{
            '& .MuiOutlinedInput-root': {
              backgroundColor: '#2a2a2a',
              color: '#00ff9d',
              transition: 'all 0.3s ease',
              border: '1px solid rgba(0, 255, 157, 0.1)',
              '&:hover': {
                boxShadow: '0 0 15px rgba(0, 255, 157, 0.2)',
                '& fieldset': {
                  borderColor: 'rgba(0, 255, 157, 0.3)',
                }
              },
              '&.Mui-focused': {
                boxShadow: '0 0 20px rgba(0, 255, 157, 0.25)',
                '& fieldset': {
                  borderColor: 'rgba(0, 255, 157, 0.5)',
                }
              },
              '& textarea::placeholder': {
                color: 'rgba(0, 255, 157, 0.5)',
              }
            }
          }}
        />
        <IconButton
          onClick={onSend}
          disabled={disabled}
          sx={{
            position: 'absolute',
            right: 8,
            bottom: 8,
            color: '#00ff9d',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'scale(1.1)',
              color: '#00ff9d',
              textShadow: '0 0 10px #00ff9d',
            },
            '&:disabled': {
              color: 'rgba(0, 255, 157, 0.3)',
            }
          }}
        >
          <Send />
        </IconButton>
      </Box>
    </Box>
  );
}