import React, { useState, useEffect } from 'react';
import { Box, List, ListItem, ListItemText, ListItemIcon, IconButton, Button, Drawer, TextField, Typography, Tooltip } from '@mui/material';
import { Message, Delete, Add, Edit, Check, GitHub } from '@mui/icons-material';

export default function Sidebar({ chats, onSelectChat, onNewChat, onDeleteChat, selectedChat, onRenameChat, open, onClose, isMobile }) {
  const [isOpen, setIsOpen] = useState(open);
  const [editingId, setEditingId] = useState(null);
  const [newTitle, setNewTitle] = useState('');
  const [hoveredChat, setHoveredChat] = useState(null);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const handleStartEdit = (chat) => {
    setEditingId(chat.id);
    setNewTitle(chat.title);
  };

  const handleFinishEdit = (chatId) => {
    if (newTitle.trim()) {
      onRenameChat(chatId, newTitle.trim());
    }
    setEditingId(null);
  };

  return (
    <Drawer
      variant={isMobile ? 'temporary' : 'permanent'}
      open={isOpen}
      onClose={onClose}
      sx={{
        width: 280,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 280,
          boxSizing: 'border-box',
          backgroundColor: '#202123',
          borderRight: '1px solid rgba(255, 255, 255, 0.1)',
          transition: 'all 0.3s ease-in-out',
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <Box sx={{ 
        p: 2,
        opacity: 1,
        transition: 'opacity 0.3s ease-in-out',
      }}>
        <Button
          fullWidth
          variant="outlined"
          startIcon={<Add />}
          onClick={onNewChat}
          sx={{
            color: 'white',
            borderColor: 'rgba(255,255,255,0.1)',
            transition: 'all 0.2s ease-in-out',
            transform: 'scale(1)',
            '&:hover': {
              borderColor: '#00ff9d',
              boxShadow: '0 0 10px #00ff9d',
              backgroundColor: 'rgba(0, 255, 157, 0.1)',
            },
          }}
        >
          New Chat
        </Button>
      </Box>

      <List sx={{ 
        overflow: 'auto',
        flex: 1,
        '&::-webkit-scrollbar': {
          width: '6px',
        },
        '&::-webkit-scrollbar-track': {
          background: 'transparent',
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '3px',
        },
      }}>
        {chats.map((chat) => (
          <ListItem
            key={chat.id}
            selected={selectedChat?.id === chat.id}
            onMouseEnter={() => setHoveredChat(chat.id)}
            onMouseLeave={() => setHoveredChat(null)}
            sx={{
              transition: 'all 0.3s ease-in-out',
              transform: 'translateX(0)',
              '&.Mui-selected': {
                backgroundColor: 'rgba(0, 255, 157, 0.1)',
                boxShadow: 'inset 0 0 5px rgba(0, 255, 157, 0.3)',
              },
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.05)',
              },
            }}
          >
            <ListItemIcon sx={{ 
              minWidth: 40,
              transition: 'transform 0.2s ease',
            }}>
              <Message sx={{ 
                color: 'white',
                animation: hoveredChat === chat.id ? 'pulse 1.5s infinite' : 'none',
                '@keyframes pulse': {
                  '0%': { opacity: 1 },
                  '50%': { opacity: 0.6 },
                  '100%': { opacity: 1 },
                },
              }} />
            </ListItemIcon>

            {editingId === chat.id ? (
              <TextField
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                autoFocus
                size="small"
                sx={{
                  input: { color: 'white' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#00ff9d',
                      boxShadow: '0 0 5px rgba(0, 255, 157, 0.3)',
                    },
                  },
                }}
              />
            ) : (
              <ListItemText
                primary={chat.title}
                sx={{
                  color: 'white',
                  cursor: 'pointer',
                }}
                onClick={() => onSelectChat(chat)}
              />
            )}

            <Box
              sx={{
                display: 'flex',
                gap: 1,
                opacity: 0.3,
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  opacity: 1,
                },
              }}
            >
              {editingId === chat.id ? (
                <IconButton
                  size="small"
                  onClick={() => handleFinishEdit(chat.id)}
                  sx={{
                    color: '#00ff9d',
                    boxShadow: '0 0 5px rgba(0, 255, 157, 0.3)',
                    '&:hover': {
                      color: '#00ff9d',
                      boxShadow: '0 0 10px #00ff9d',
                    },
                  }}
                >
                  <Check />
                </IconButton>
              ) : (
                <IconButton
                  size="small"
                  onClick={() => handleStartEdit(chat)}
                  sx={{
                    color: '#00ff9d',
                    boxShadow: '0 0 5px rgba(0, 255, 157, 0.3)',
                    '&:hover': {
                      color: '#00ff9d',
                      boxShadow: '0 0 10px #00ff9d',
                    },
                  }}
                >
                  <Edit />
                </IconButton>
              )}
              <IconButton
                size="small"
                onClick={() => onDeleteChat(chat.id)}
                sx={{
                  color: '#ff4444',
                  boxShadow: '0 0 5px rgba(255, 68, 68, 0.3)',
                  '&:hover': {
                    color: '#ff4444',
                    boxShadow: '0 0 10px #ff4444',
                  },
                }}
              >
                <Delete />
              </IconButton>
            </Box>
          </ListItem>
        ))}
      </List>

      <Box sx={{ 
        p: 2, 
        borderTop: '1px solid rgba(255,255,255,0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2
      }}>
        <Typography 
          variant="body2" 
          sx={{ 
            color: '#00ff9d',
            textShadow: '0 0 5px rgba(0, 255, 157, 0.3)',
          }}
        >
          Created by @usualdork 
        </Typography>
        <Tooltip title="View on GitHub">
          <IconButton 
            component="a" 
            href="https://github.com/usualdork" 
            target="_blank"
            sx={{
              color: '#00ff9d',
              boxShadow: '0 0 5px rgba(0, 255, 157, 0.3)',
              '&:hover': {
                color: '#00ff9d',
                boxShadow: '0 0 10px #00ff9d',
                transform: 'translateY(-2px)',
              }
            }}
          >
            <GitHub />
          </IconButton>
        </Tooltip>
      </Box>
    </Drawer>
  );
}