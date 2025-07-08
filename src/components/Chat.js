import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from "@/styles/Chat.module.css";
import IconButton from '@mui/material/IconButton';
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
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

    const body = JSON.stringify({
      messages: messages,
      max_tokens: 300,
      temperature: 0.7
    });

    try {
      const response = await fetch(openaiUrl, 
      {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
        messages: [
            {
              role: "system",
              content: `You are a helpful assistant. Provide accurate, concise, and professional information about Vasilis Mpletsos’ background, skills, and experience.
              Vasilis holds a BEng & MEng in Electrical and Computer Engineering and an MSc in Advanced Computer Systems from the Polytechnic School of Aristotle University. He has worked across sectors including research, private enterprise, and public administration, with expertise in AI, software engineering, embedded systems, and cloud architecture (Azure).
              He has contributed to impactful projects involving predictive analytics, document intelligence, and computer vision for organizations like Ecodev, Satori Analytics, CERTH, Kenotom, and Fieldscale
              Vasilis is proficient in a wide array of technologies including Python, C, FastAPI, React, PyTorch, Azure, Docker, and more.
              Vasilis was born in 1996 in Athens, Greece, and has lived in Thessaloniki since 2014.
              He has a passion for software development, particularly in the areas of embedded systems, computer vision, and machine learning.
              He has also being part of Aristotle FSAE Racing Team, where he contributed to the design and development of a 1:2 scale F1 vehicle.
              If the user inquires about topics outside his professional scope, kindly steer the conversation back to his qualifications, technical abilities, or relevant work experience.
              `
            },
            {
              role: "user",
              content: messages.map(m => `[${m.role}]: ${m.content}`).join('\n')
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
            dialog.scrollTop = dialog.scrollHeight;
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
          <Typography variant="h6">Chat with my AI Assistant</Typography>
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
                  backgroundColor: message.role === 'user' ? '#e3f2fd' : '#f5f5f5',
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
            alignItems: 'flex-end'
          }}>
            <TextField
              fullWidth
              multiline
              maxRows={3}
              variant="outlined"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={loading}
              size="small"
            />
            <IconButton
              color="primary"
              onClick={sendMessage}
              // disabled={!input.trim() || loading}
              disabled={true}
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