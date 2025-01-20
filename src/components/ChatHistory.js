import React from 'react';
import { List, ListItem, ListItemText, IconButton, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ChatHistory = ({ history, onDelete }) => (
  <Paper sx={{ maxHeight: '300px', overflowY: 'auto', padding: 2 }}>
    <List>
      {history.map((chat, index) => (
        <ListItem key={index} secondaryAction={
          <IconButton edge="end" aria-label="delete" onClick={() => onDelete(index)}>
            <DeleteIcon />
          </IconButton>
        }>
          <ListItemText
            primary={`Q: ${chat.input}`}
            secondary={`A: ${chat.response}`}
          />
        </ListItem>
      ))}
    </List>
  </Paper>
);

export default ChatHistory;
