import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from "@/styles/Chat.module.css";
import IconButton from '@mui/material/IconButton';
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import Avatar from '@mui/material/Avatar';
import { chatSystemPrompt } from '@/prompt.js'; // Import the prompt from the prompt.js file
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Box,
  Paper,
  CircularProgress,
  Divider
} from '@mui/material';

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'system',
      content: 'Hello! I\'m here to help answer questions about Vasilis\' experience and skills. What would you like to know?'
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const endpoint = process.env.NEXT_PUBLIC_AZURE_OPENAI_ENDPOINT;
  const apiKey = process.env.NEXT_PUBLIC_AZURE_OPENAI_API_KEY
  const deploymentName = process.env.NEXT_PUBLIC_AZURE_OPENAI_DEPLOYMENT_NAME
  const apiVersion = process.env.NEXT_PUBLIC_AZURE_OPENAI_API_VERSION
  const openaiUrl = `${endpoint}/openai/deployments/${deploymentName}/chat/completions?api-version=${apiVersion}`;
  console.log("OpenAI URL:", openaiUrl);
  const headers = {
    "Content-Type": "application/json",
    "api-key": apiKey
  };

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const userMessage = { role: 'user', content: input };
    setInput('');
    setLoading(true);

    try {

      let messageHistory = messages.map(m => `[${m.role}]: ${m.content}`).join('\n');
      if (messageHistory.length > 3000) {
        messageHistory = messageHistory.slice(-3000);
      }
      const response = await fetch(openaiUrl, 
      {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
        messages: [
            {
              role: "system",
              content: chatSystemPrompt
            },
            {
              role: "user",
              content: messageHistory
            },
            userMessage
          ],
          max_tokens: 300,
          temperature: 0.7
        }),
      });

      setMessages(prev => [...prev, userMessage]);
      if (!response.ok) {
        setMessages(prev => [...prev, { role: 'system', content: "Failed to get response" }]);
      }else{
        const data = await response.json();
        setMessages(prev => [...prev, { role: 'system', content: data.choices[0].message.content }]);
        // go to the bottom of the chat
        setTimeout(() => {
          const dialog = document.querySelector('[role="dialog"] .MuiDialogContent-root > div');
          if (dialog) {
            dialog.scrollTo({ top: dialog.scrollHeight, behavior: 'smooth' });
          }
        }, 50);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { 
        role: 'system', 
        content: 'Sorry, I encountered an error. Please try again.' 
      }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <div className={styles.chatPlacement}>
        <IconButton 
          aria-label="chat" 
          color="primary" 
          size="large"
          onClick={handleOpen}
        >
          <ChatIcon sx={{width:50, height: 50}} />
        </IconButton>
      </div>

      {/* Chat Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            height: '70vh',
            maxHeight: '600px',
            display: 'flex',
            flexDirection: 'column'
          }
        }}
      >
        <DialogTitle sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          borderBottom: '1px solid #e0e0e0'
        }}>
          <Avatar 
            alt="Chatbot Avatar"
            src="/bot.png"
          />
          <Typography variant="h6">
            Chat with my AI Assistant
          </Typography>
          <IconButton onClick={handleClose} size="small">
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        
        <DialogContent sx={{ 
          flex: 1, 
          display: 'flex', 
          flexDirection: 'column',
          padding: 0
        }}>
          {/* Messages Area */}
          <Box sx={{ 
            flex: 1, 
            overflowY: 'auto', 
            padding: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 1
          }}>
            {messages.map((message, index) => (
              <Paper
                key={index}
                elevation={1}
                sx={{
                  padding: 2,
                  maxWidth: '80%',
                  alignSelf: message.role === 'user' ? 'flex-end' : 'flex-start',
                  backgroundColor: message.role === 'user' ? 'lightskyblue' : 'moccasin',
                  borderRadius: 2
                }}
              >
                <Typography variant="body2" sx={{ whiteSpace: 'pre-wrap' }}>
                  {message.content}
                </Typography>
              </Paper>
            ))}
            {loading && (
              <Box sx={{ display: 'flex', justifyContent: 'center', padding: 1 }}>
                <CircularProgress size={24} />
              </Box>
            )}
          </Box>

          <Divider />

          {/* Input Area */}
          <Box sx={{ 
            padding: 2, 
            display: 'flex', 
            gap: 1,
            alignItems: 'center',
            justifyItems: 'space-between',
          }}>
            <TextField
              fullWidth
              maxRows={1}
              variant="outlined"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={loading}
              size="small"
            />
            <Typography variant="caption" color="textSecondary">
              {input.length}/300
            </Typography>
            <IconButton
              color="primary"
              onClick={sendMessage}
              disabled={!input.trim() || loading || input.length > 300}
              sx={{ marginLeft: 1 }}
            >
              <SendIcon />
            </IconButton>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Chat;