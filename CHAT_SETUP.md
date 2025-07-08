# Chat Component Setup Instructions

## Overview
The chat component is now integrated with Azure OpenAI to provide an interactive AI assistant that can answer questions about Vasilis' professional background and experience.

## Setup Instructions

### 1. Azure OpenAI Service Setup
1. Create an Azure OpenAI resource in the Azure portal
2. Deploy a GPT model (recommended: GPT-4 or GPT-3.5-turbo)
3. Get your endpoint URL and API key from the Azure portal

### 2. Environment Configuration
1. Copy `.env.local.example` to `.env.local`
2. Fill in your Azure OpenAI configuration:

```
AZURE_OPENAI_ENDPOINT=https://your-resource-name.openai.azure.com/
AZURE_OPENAI_API_KEY=your-api-key-here
AZURE_OPENAI_DEPLOYMENT_NAME=your-deployment-name
AZURE_OPENAI_API_VERSION=2024-02-15-preview
```

### 3. Features
- **Fixed positioning**: Chat button appears in the bottom-right corner
- **Interactive dialog**: Click the chat icon to open the chat interface
- **AI responses**: Connected to Azure OpenAI for intelligent responses
- **Context-aware**: The AI knows about Vasilis' background and experience
- **Responsive design**: Works on desktop and mobile devices

### 4. Usage
1. Click the chat icon in the bottom-right corner
2. Type your questions about Vasilis' experience, skills, or projects
3. The AI will provide relevant information based on his professional background

### 5. Customization
You can modify the system prompt in `/api/chat.js` to update the AI's knowledge about Vasilis or change its behavior.

## Technical Details
- **Frontend**: React with Material-UI components
- **Backend**: Next.js API route (`/api/chat.js`)
- **AI Service**: Azure OpenAI GPT models
- **Styling**: CSS modules with hover effects and smooth animations
